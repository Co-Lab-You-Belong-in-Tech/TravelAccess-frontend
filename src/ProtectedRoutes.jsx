import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from './context/AuthProvider';

const ProtectedRoutes = () => {
  const { auth } = useContext(AuthContext);
  return auth ? <Outlet /> : <Navigate to='/' />;
};

export default ProtectedRoutes;
