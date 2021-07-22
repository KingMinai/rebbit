import axios from 'axios';

// const API_URL = 'http://localhost:5000/su/';

class AuthService {
  login = async (uname, pass) => {
    await axios
      .post(
        'http://localhost:5000/su/login',
        { username: uname, password: pass },
        {
          headers: { Accept: 'application/json' },
        }
      )
      .then((res) => {
        if (!!res.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(res.data));
        }
        return res.data;
      })
      .catch((err) => {
        return err;
      });
  };

  logout() {
    localStorage.removeItem('user');
  }

  register = (uname, em, pass) => {
    axios
      .post('http://localhost:5000/su/signup', {
        username: uname,
        email: em,
        password: pass,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();
