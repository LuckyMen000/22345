import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import reportWebVitals from './reportWebVitals'; 
import AppRouter from './Routes/AppRouter';

ReactDOM.render(
  <ChakraProvider>
    <Router>
      <AppRouter/>
    </Router>
  </ChakraProvider>,
  document.getElementById('root')
);

reportWebVitals(console.log);
