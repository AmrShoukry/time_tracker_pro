import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Navigator from './Navigator';

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
                    Calender
                </Route>
                <Route exact path="/projects">
                    Projects
                </Route>
                <Route exact path="/profile">
                    Profile
                </Route>
                <Route exact path="/timesheet">
                    Timesheet
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
