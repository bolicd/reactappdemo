import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import routes from './routes';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const store = createStore((state ={})=>state, applyMiddleware(thunk));

render(
  <Provider store={store} >
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>
  </Provider>,
  document.getElementById('app'));
