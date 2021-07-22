import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import auth from './auth/authService';

import Navbar from './components/navbar';
import Feed from './components/feed';
import UserSignup from './components/userSignup';
import UserLogin from './components/userLogin';
import PostCreate from './components/postCreate';

function App() {
  let isLI = auth.getCurrentUser() ? true : false;
  return (
    <div className='App'>
      <Navbar isLI={isLI} />
      <Switch>
        <Route exact path='/'>
          <Feed type='home' />
        </Route>
        <Route exact path='/u/'>
          <Feed type='user' />
        </Route>
        <Route exact path='/u/signup' component={UserSignup} />
        <Route exact path='/u/login' component={UserLogin} />
        <Route exact path='/postcreate' component={PostCreate} />
        <Route />
      </Switch>
    </div>
  );
}

export default App;
