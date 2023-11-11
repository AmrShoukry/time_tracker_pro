import './styles/App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom/cjs/react-router-dom.min';
import Navigator from './components/Navigator';
import MyCalendar from './components/Calender';
import MyTimesheet from './components/Timesheet';
import Logout from './components/Logout';
import Login from './components/Login';
import Signup from './components/Signup';
import Projects from './components/Projects';
import Focus from './components/Focus';
import Profile from './components/Profile';
import Home from './components/Home';
import Newproject from './components/ProjectNew';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Navigator />
            <Home />
          </Route>
          <Route exact path="/home">
            <Navigator />
            <Home />
          </Route>
          <Route exact path="/calender">
            <Navigator />
            <MyCalendar />
          </Route>
          <Route exact path="/projects">
            <Navigator />
            <Projects />
          </Route>
          <Route exact path="/projects/new">
            <Navigator />
            <Newproject />
          </Route>
          <Route exact path="/profile">
            <Navigator />
            <Profile />
          </Route>
          <Route exact path="/timesheet">
            <Navigator />
            <MyTimesheet />
          </Route>
          <Route exact path="/focus">
            <Navigator />
            <Focus />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/logout">
            <Logout />
          </Route>
          <Route path="*">
            <Navigator />
            Error 404 Not Found
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
