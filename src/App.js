import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Navigator from './Navigator';
import MyCalendar from './Calender';
import MyTimesheet from './Timesheet';

function App() {
  return (
    <Router>
        <div className="App">
            <Navigator/>
            <Switch>
                <Route exact path="/">
                    Home Page
                </Route>
                <Route exact path="/calender">
                    <MyCalendar/>
                </Route>
                <Route exact path="/projects">
                    Projects
                </Route>
                <Route exact path="/profile">
                    Profile
                </Route>
                <Route exact path="/timesheet">
                    <MyTimesheet/>
                </Route>
                <Route exact path="/focus">
                    Focus Mode
                </Route>
                <Route path="*">
                    Error 404 Not Found
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
