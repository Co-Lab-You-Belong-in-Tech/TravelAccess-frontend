import { Routes, Route, Outlet } from 'react-router-dom';
import CheckList from './components/CheckList';
import { Dashboard } from './components/Dashboard';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Signup from './components/SignUp';
import { TravelPrep } from './components/TravelPrep';
import { Trip } from './components/Trip';
import ProtectedRoutes from './ProtectedRoutes';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/' element={<Layout />}>
            <Route path='homepage' element={<Homepage />} />
            <Route path='dashboard' element={<Dashboard />}>
              <Route path='trip' element={<Trip />} />
              <Route path='travelprep' element={<TravelPrep />} />
              
              <Route path='checklist' element={<CheckList />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default App;
