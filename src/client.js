import App from './App';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { hydrate } from 'react-dom';
import Navbar from './Navbar';
import { Container } from 'react-bootstrap'

hydrate(
  <BrowserRouter>
    <Navbar />
    <Container className="mt-5">
      <App />
    </Container>
  </BrowserRouter>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
