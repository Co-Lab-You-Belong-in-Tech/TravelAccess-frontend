import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Header from './components/Header/Header';


const App = () => {
	return (
		<>
			<div></div>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/Signup' element={<Signup />} />
				<Route path='/Header' element={ <Header />}/>
			</Routes>
		</>
	);
};

export default App;
