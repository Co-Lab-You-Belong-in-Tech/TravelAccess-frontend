import { FaRegUserCircle } from 'react-icons/fa';
import { useState } from 'react';
import style from './Signup.module.css';
import baseStyle from '../Login/Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearMessage, registerUser } from '../../features/auth';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token, message } = useSelector(state => state.auth);

  const [inputs, setInputs] = useState({});
  const { name, email, phone } = inputs;

  const handleChange = event => {
    if (message) dispatch(clearMessage());
    const { name, value } = event.target;
    setInputs(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(registerUser(inputs));
    if (token) {
      localStorage.setItem('token', JSON.stringify(token));
      navigate('/');
    } else {
      navigate('/signup');
    }
  };

  return (
    <section className={baseStyle.baseView}>
      <div className='bg-white lg:w-1/2'>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col  p-5 text-center '
        >
          <h2 className='mb-3 font-bold text-primary lg:text-3xl'>Welcome</h2>
          {message && <div className='text-red-500 text-sm'>{message}</div>}
          <div className='relative grid'>
            <input
              type='text'
              name='name'
              value={name || ''}
              id='floating_filled'
              onChange={handleChange}
              className='block px-2.5 pb-2.5 pt-3 text-sm text-gray-500 border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#0F7173] peer'
              placeholder=' '
            />
            <label
              htmlFor='floating_filled'
              className='absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#0F7173] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'
            >
              Name
            </label>
          </div>
          <div className='relative w-full grid my-3'>
            <input
              type='email'
              name='email'
              value={email || ''}
              id='floating_filled'
              onChange={handleChange}
              className='block px-2.5 pb-2.5 pt-5 text-sm text-gray-500 border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#0F7173] peer'
              placeholder=' '
            />
            <label
              htmlFor='floating_filled'
              className='absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#0F7173] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'
            >
              Email
            </label>
          </div>
          <div className='relative w-full grid'>
            <input
              type='tel'
              name='phone'
              value={phone || ''}
              id='floating_filled'
              onChange={handleChange}
              className='block px-2.5 pb-2.5 pt-5 text-sm text-gray-500 border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#0F7173] peer'
              placeholder=' '
            />
            <label
              htmlFor='floating_filled'
              className='absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#0F7173] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'
            >
              Phone Number
            </label>
          </div>
          <div className=' flex justify-center items-center mt-8 '>
            <div>
              <button
                type='submit'
                className=' rounded-full bg-[#5451D6] text-white p-1 w-48 font-bold '
              >
                signup
              </button>
            </div>
          </div>
          <div>
            <p className='mt-8 text-primary'>
              Have an account?{' '}
              <Link to='/login' className='font-bold'>
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
