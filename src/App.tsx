import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import About from './components/About/About';
import Country from './components/Country/Country';
import Global from './components/Global/Global';
import Navbar from './components/Navbar/Navbar';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route component={Global} path="/" exact />
          <Route component={Country} path="/country" exact />
          <Route component={About} path="/about" />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
