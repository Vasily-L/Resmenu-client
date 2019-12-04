import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Components
import MainDish from './components/MainDish';
import Deserts from './components/Deserts';
import Drinks from './components/Drinks';
import MainNav from './components/MainNav';
import Main from './components/Main';
import Footer from './components/Footer';
// css
import './css/main.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <MainNav />
        <Switch>
          <Route path='/' component={Main} exact />
          <Route path='/MainDish' component={MainDish} />
          <Route path='/Deserts' component={Deserts} />
          <Route path='/Drinks' component={Drinks} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
