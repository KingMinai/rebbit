import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Feed from './components/feed';
import UserSignup from './components/userSignup';
import UserLogin from './components/userLogin';
import PostCreate from './components/postCreate';

function App() {
  return (
    <div className='App'>
      <Navbar />
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
