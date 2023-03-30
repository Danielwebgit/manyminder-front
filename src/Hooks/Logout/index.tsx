import { useNavigate } from 'react-router-dom';
import store from '../../redux/store';

const LoggedIn = () => {

  const navigate = useNavigate();

  return function () {

    store.dispatch({
      type: 'login/setLogin',
      payload: false
    });
    localStorage.removeItem('token');
    navigate('/login');
  }
};

export default LoggedIn;