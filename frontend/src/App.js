import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Home from './components/Home'
import Login from './components/Login'
import Profile from './components/Profile'
import Navbar from './components/Navbar'
import ListForm from './components/ListForm'
import Logout from './components/Logout'
import { clearToken, getToken } from './services/local-storage'
import { clearUser } from './redux/actions/userActions'
import './App.css';

function App() {

  const dispatch = useDispatch() 

  const handleLogout = () => {
    clearToken()
    dispatch(clearUser())
  }
  console.log(getToken())
  return (
    <div className="App">
      <Router>
      {!getToken() ? <Redirect to="/login" /> : null }
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/lists/new" component={ListForm} />
          <Route exact path="/logout" component={Logout}/>
        </Switch>
        {getToken() ? <button onClick={handleLogout}>Logout</button> : null }
      </Router>
    </div>
  );
}

export default App;
