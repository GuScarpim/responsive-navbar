import React from 'react';
import ReactDOM from 'react-dom';
import GlobalsStyles from './globalStyles';
import Menu from './components/menu/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <GlobalsStyles />
    <Menu />
  </React.StrictMode>,
  document.getElementById('root')
);
