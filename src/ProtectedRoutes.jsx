import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from './context/AuthProvider';
import print from './helper/print';

//Move useAuth to a separate file
export const useAuth = () => {
  const { auth } = useContext(AuthContext);
  if (auth) {
    return true;
  }
  return false;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to='/' />;
};

export default ProtectedRoutes;
