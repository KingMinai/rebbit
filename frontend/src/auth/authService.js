import axios from 'axios';

// const API_URL = 'http://localhost:5000/su/';

class AuthService {
  login = (uname, pass) => {
    return axios
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
      });
  };

  logout() {
    localStorage.removeItem('user');
  }

  register = (uname, em, pass) => {
    return axios.post('http://localhost:5000/su/signup', {
      username: uname,
      email: em.toLowerCase(),
      password: pass,
    });
  };

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();
