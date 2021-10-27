import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Notfound from './components/Notfound/Notfound';
import Resturant from './components/Resturant/Resturant';
import TopNav from './components/TopNav/TopNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mealdetail from './Mealdetail/Mealdetail';

function App() {
  return (
    <div>
     
    <Router>
      <TopNav></TopNav>
      <Switch>
          <Route exact path = "/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/resturant">
            <Resturant></Resturant>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path = "/sesturantmeal/:mealId">
            <Mealdetail></Mealdetail>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
      </Switch>
    </Router>

    </div>
  );
}

export default App;
