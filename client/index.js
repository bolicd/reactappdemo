import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import routes from './routes';
import App from './components/App';

render(
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>,
document.getElementById('app'));
