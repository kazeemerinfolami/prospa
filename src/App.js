import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './Pages/Signup/Signup';
import NewBusinessPage from "./Pages/SelectSection/NewBusinessPage"
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Signup />
        </Route>
        <Route exact path="/pick-Business-type">
          <NewBusinessPage />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
