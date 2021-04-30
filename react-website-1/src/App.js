import './App.css';
import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Spring from './components/pages/Spring';
import Summer from './components/pages/Summer';
import Autumn from './components/pages/Autumn';
import Winter from './components/pages/winter';

function App() {
  return (
    <Router>
    <Navbar/>
    <Switch>
    <Route path='/' exact component={Home} />
    <Route path='/spring' component={Spring} />
    <Route path='/summer' component={Summer} />
    <Route path='/autumn' component={Autumn} />
    <Route path='/winter' component={Winter} />

    </Switch>
    </Router>
    
  );

}

export default App;

