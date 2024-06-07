import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

// Custom theme
const customTheme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: 'white', // Set background color to white
        color: 'black', // Optional: Set text color to black
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
