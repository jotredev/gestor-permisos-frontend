import { useContext } from 'react';
import AuthContext from '../providers/auth.provider';

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
