import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const LoggedIn = () => {

const  LoggedIn = useSelector((state: RootState) => state.login);

  return LoggedIn;
};

export default LoggedIn;