import React, {useState} from 'react';
import Navbar from './components/shared/Navbar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import CreateAccount from './components/pages/CreateAccount';
import UserView from './components/pages/UserView';
import Recipes from './components/pages/Recipes';
import Individual from './components/recipe/Individual';
import Footer from './components/shared/Footer';
import Signin from './components/pages/Signin';


function App() {
  //const [loggedIn, setLoggedIn] = useState(false);
 
  return (
    <div className="App">
        <Router>
          <Navbar />
          <Switch>
              <Route path='/' exact component = {Home} />
              <Route path='/signin' component={Signin} />
              <Route path='/createaccount' component={CreateAccount} />
              <Route path='/user' component={UserView} />
              <Route path='/recipes' component={Recipes} />
              <Route path='/individual' component={Individual} />
          </Switch>
        </Router>
        <Footer />
    </div>
    
  );
}

export default App;
