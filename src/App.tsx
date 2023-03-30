import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './Routes';
import Layouts from  './layouts'
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <Layouts>
        <AppRoutes />
      </Layouts>
    </Provider>    
    </BrowserRouter>   
  );
}

export default App;
