import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Analysis from './Analysis';
import Propuesta from './pages/Propuesta';
import Conclusion from './pages/Conclusion';

function App () {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/analysis' component={Analysis} />
          <Route path='/propuesta' component={Propuesta} />
          <Route path='/conclusion' component={Conclusion} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
