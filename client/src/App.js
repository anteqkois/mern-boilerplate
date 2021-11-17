import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { ThemeProvider } from './providers/ThemeContext';
import { ErrorProvider } from './hooks/useError';

import MainLayout from './layouts/MainLayout';
import ScrollToTop from './components/utils/ScrollToTop';
import NotFound from './components/utils/NotFound';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      sessionStorage.getItem('isLogined') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
);

function App() {
  return (
    <ThemeProvider>
      <ErrorProvider>
        <Router>
          <MainLayout>
            <ScrollToTop />
            <Switch>
              <PrivateRoute path="/admin" component={<h1>Admin</h1>} />
              <Route
                exact
                path="/Home"
                component={
                  <>
                    <h1>Home</h1>
                    <div className="App">
                      <header className="App-header"></header>
                    </div>
                  </>
                }
              />
              <Route path="*" component={NotFound} />
            </Switch>
          </MainLayout>
        </Router>
      </ErrorProvider>
    </ThemeProvider>
  );
}

export default App;
