import React, { useContext } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { ThemeContext } from '../providers/ThemeContext';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700;800;900&display=swap');
  *, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }
  body{
    background-color: ${({ theme }) => theme.colors.primary};
    overflow-x: hidden;
    scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
  *:focus{
    outline: dashed 2px green;
    outline-offset: 2px;
  }
`;

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
