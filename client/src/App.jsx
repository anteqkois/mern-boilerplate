import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import { ThemeProvider } from './providers/ThemeContext';
import { ErrorProvider } from './providers/ErrorContext';

import MainLayout from './layouts/MainLayout';
import ScrollToTop from './components/utils/ScrollToTop';
import NotFound from './components/utils/NotFound';
import Test from './components/Test';

const PrivateRoute = ({ children }) =>
  // sessionStorage.getItem('isLogined') ? children : <Navigate to={{ pathname: '/login' }} />;
  children;

function App() {
  return (
    <ThemeProvider>
      < BrowserRouter>
        <ErrorProvider>
          <MainLayout>
            <ScrollToTop />
            <Routes>
              {/* <PrivateRoute path="/admin" component={<h1>Admin</h1>} /> */}
              <Route path="/" element={<Test/>} />
              <Route
                path="/home"
                element={
                  <PrivateRoute>
                    <h1>Strona prywatna.</h1>
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<NotFound/>} />
            </Routes>
          </MainLayout>
        </ErrorProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;