import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../features/auth';
import style from '../Login/Login.module.css';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const { token } = useSelector(state => state.auth);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(loginUser(email));
    setEmail('');
  };

  const handleChange = event => {
    const { value } = event.target;
    setEmail(value);
  };

  if (token !== null) {
    const my_token = JSON.stringify(token);
    localStorage.setItem('token', my_token);
    navigate('/dashboard/trip');
  }

  return (
    <section className={style.baseView}>
      <div className='bg-white lg:w-1/2 lg:h-1/2 sm:w-3/4 sm:h-3/4'>
        <form onSubmit={handleSubmit} className='grid place-items-center p-10'>
          <h2 className='mb-3 font-bold text-[#0F7173] lg:text-xl'>Welcome</h2>
          <div className='relative w-full grid'>
            <input
              type='email'
              value={email}
              id='floating_filled'
              className='block px-2.5 pb-2.5 pt-5 text-sm text-gray-500 border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#0F7173] peer'
              placeholder=' '
              onChange={handleChange}
            />
            <label
              htmlFor='floating_filled'
              className='absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#0F7173] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'
            >
              Email
            </label>
          </div>

          <div className=' flex justify-center items-center mt-8 '>
            <button
              type='submit'
              className=' rounded-full bg-[#5451D6] text-white p-1 w-48 font-bold'
            >
              Login
            </button>
          </div>

          <div>
            <p className='mt-8 text-primary'>
              Don't have an account?{' '}
              <Link to='signup' className='font-bold'>
                Signup
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
