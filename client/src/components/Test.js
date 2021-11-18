import React, { useEffect } from 'react';

import useError from '../providers/ErrorContext';

function Test() {
  const setError = useError();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setError('Coś poszło nie tak!');
    }, 2000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [setError]);

  // setError('Coś poszło nie tak')

  return <div>It,s test !</div>;
}

export default Test;
