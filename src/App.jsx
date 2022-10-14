import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Signup from './components/Signup';
import { Trip } from './components/Trip';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/homepage' element={<Homepage />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/dashboard' element={<Dashboard />}>
        <Route path='/dashboard/trip' element={<Trip />} />
      </Route>
    </Routes>
  );
};

export default App;
