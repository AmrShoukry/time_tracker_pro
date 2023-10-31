import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Navigator from './Navigator';
import MyCalendar from './Calender';
import MyTimesheet from './Timesheet';
import Logout from './Logout';
import Login from './Login';
import Signup from './Signup';
import Projects from './Projects';
import Focus from './Focus';
import Profile from './Profile';
import Home from './Home';
import Newproject from './ProjectNew';

function App() {
  return (
    <Router>
        <div className="App">
            <Switch>
                <Route exact path="/">
                    <Navigator/>
                    <Home/>
                </Route>
                <Route exact path="/home">
                    <Navigator/>
                    <Home/>
                </Route>
                <Route exact path="/calender">
                    <Navigator/>
                    <MyCalendar/>
                </Route>
                <Route exact path="/projects">
                    <Navigator/>
                    <Projects/>
                </Route>
                <Route exact path="/projects/new">
                    <Navigator/>
                    <Newproject/>
                </Route>
                <Route exact path="/profile">
                    <Navigator/>
                    <Profile/>
                </Route>
                <Route exact path="/timesheet">
                    <Navigator/>
                    <MyTimesheet/>
                </Route>
                <Route exact path="/focus">
                    <Navigator/>
                    <Focus/>
                </Route>
                <Route exact path="/login">
                    <Login/>
                </Route>
                <Route exact path="/signup">
                    <Signup/>
                </Route>
                <Route exact path="/logout">
                    <Logout/>
                </Route>
                <Route path="*">
                    <Navigator/>
                    Error 404 Not Found
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
