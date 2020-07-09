import React from 'react';
import { Provider } from 'react-redux';
import MiApp from './src/componentes/Miapp';
import store from './src/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <MiApp />
    </Provider>
  );
}

