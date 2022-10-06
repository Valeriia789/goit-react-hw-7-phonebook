import ReactDOM from 'react-dom/client';
import React from 'react';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import { store } from './redux/store';

import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
  </React.StrictMode>
);
