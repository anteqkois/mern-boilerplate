import database from '../config/database.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import User from '../database/models/user.js';
import { createApiError } from '../middlewares/errors.js';

const handleSignupErrors = (err) => {
  // console.log(err.message, err.code);
  let errors = { email: '', password: '', username: '' };

  // validation errors
  if (err.message.includes('User validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  // console.log(errors);

  return errors;
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    !auth && next(createApiError(`Incorrect password or username`, 400));

    const accessToken = jwt.sign({ email: email }, process.env.TOKEN_SECRET, {
      expiresIn: 3600,
    });

    const refreshToken = jwt.sign({ email: email }, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: 43200,
    });

    res.cookie('JWT', accessToken, {
      maxAge: 86400000,
      httpOnly: true,
    });

    const { username, _id } = user;

    return res.status(200).send({ email, username, _id });
  }
  !user && next(createApiError(`Incorrect password or username`, 400));
};

const logout = (req, res) => {
  res.cookie('JWT', '', {
    maxAge: 1,
    httpOnly: true,
  });

  return res.status(200).send('You are successffuly logout');
};

const signup = async (req, res, next) => {
  !req.body.username && next(createApiError(`No username`, 422));
  !req.body.email && next(createApiError(`No e-mail`, 422));
  !req.body.password && next(createApiError(`No password`, 422));

  const { email, password, username } = req.body;

  try {
    const user = await User.create({ email, password, username });
  } catch (err) {
    const errors = handleSignupErrors(err);
    return res.status(400).json({ error: errors });
  }

  !user && next(createApiError(`Something went wrong, user wasn't created !`, 500));
  next();
};

export default { login, logout, signup };

// const refreshToken = async (req, res, next) => {
//   // Nie potrzebna funkcja przy tej skali projektu (lepiej czas przeznaczy?? na co?? innego)

//   !req.cookies.JWT && next(createApiError(`Nie poprawny login lub has??o`, 400));
// };
