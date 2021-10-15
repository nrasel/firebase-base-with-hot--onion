import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import BreakFast from './components/BreakFast/BreakFast';
import Lunch from './components/Lunch/Lunch';
import Dinner from './components/Dinner/Dinner';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/breakfast">
            <BreakFast />
          </Route>
          <Route exact path="/lunch">
            <Lunch />
          </Route>
          <Route exact path="/dinner">
            <Dinner />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
