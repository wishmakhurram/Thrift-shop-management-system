import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/home';
import Login from './Pages/login';
import Signup from './Pages/signup';
import Admin from './Pages/Admin/index';
import Product from './Pages/product';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/all-products' component={Product}/>
        <Route exact path='/admin' component={Admin}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={Signup}/>
      </Switch>
    </div>
  );
}

export default App;
