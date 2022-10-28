import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from './context/AuthProvider';
import print from './helper/print';

export const useAuth = () => {
  const { auth } = useContext(AuthContext);
  if (!auth) {
    return false;
  }
  return true;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  print(isAuth);
  return isAuth ? <Outlet /> : <Navigate to='/' />;
};

export default ProtectedRoutes;
