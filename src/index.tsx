import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './components/common/Theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
        <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
