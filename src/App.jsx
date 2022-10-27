import { Routes, Route } from 'react-router-dom';
import CheckList from './components/CheckList';
import { Dashboard } from './components/Dashboard';
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
        <Route path='/signup' element={<Signup />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/homepage' element={<Homepage />} />
          <Route path='' element={<Dashboard />}>
            <Route path='/dashboard/trip' element={<Trip />} />
            <Route path='/dashboard/travelprep' element={<TravelPrep />} />
            <Route path='/dashboard/checklist' element={<CheckList />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

const Layout = ({ children }) => {
  return <div>{children}</div>;
};
export default App;
