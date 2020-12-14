import App from './App';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { hydrate } from 'react-dom';
import Navbar from './Navbar';
import { Container } from 'react-bootstrap';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

const store = createStore(reducer)

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Navbar />
      <Container className="mt-5">
        <App />
      </Container>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
