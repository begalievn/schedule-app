import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { App } from './app/App';
import { persistor, store } from './store/store';

import { PersistGate } from 'redux-persist/integration/react';

import { ThemeProvider } from '@mui/material';
import { theme } from './assets/styles/theme';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PersistGate
          loading={null}
          persistor={persistor}
        >
          <App />
        </PersistGate>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>,
);
