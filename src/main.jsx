import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global'
import { AuthProvider } from './hooks/auth';
import ReactDOM from 'react-dom/client';
import theme from './styles/theme'
import { Routes } from './routes';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <AuthProvider>
          <Routes />
        </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
