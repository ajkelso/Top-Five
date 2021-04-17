import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from './components/Home'
import Profile from './components/Profile'
import Navigation from './components/Navigation'
import ListForm from './components/ListForm'
import Logout from './components/Logout'
import Alerts from './components/Alerts'
import { getToken } from './services/local-storage'
import CategoriesContainer from './components/CategoriesContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import { Container } from 'react-bootstrap'

function App() {

  return (
    <Container>
      <Router>
        <Navigation/>
        {!getToken() ? <Redirect to="/" /> : null }
        <Alerts />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/lists/new" component={ListForm} />
          <Route path="/categories" component={CategoriesContainer} />
          <Route exact path="/logout" component={Logout} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
