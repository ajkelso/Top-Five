import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Profile from './components/Profile'
import Navbar from './components/Navbar'
import ListForm from './components/ListForm'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/lists/new" component={ListForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
