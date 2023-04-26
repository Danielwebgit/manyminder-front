import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const LoggedIn = () => {
  
//const  LoggedIn = useSelector((state: RootState) => state.login);

const token = localStorage.getItem('token');

if(token) {
  return true;
} else {
  return false;
}

//return LoggedIn;
};

export default LoggedIn;