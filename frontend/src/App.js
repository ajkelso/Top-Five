import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Profile from './components/Profile'
import Navbar from './components/Navbar'
import ListForm from './components/ListForm'
import Logout from './components/Logout'
import SignUp from './components/SignUp'
import { getToken } from './services/local-storage'

import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
      {/* {!getToken() ? <Redirect to="/login" /> : null } */}
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/lists/new" component={ListForm} />
          <Route exact path="/logout" component={Logout}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
