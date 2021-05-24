import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import { DataProvider } from './components/DataProvider';

function App() {
  return (
    <DataProvider>
    <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
        </Switch>
    </div>
    </DataProvider>
  );
}

export default App;
