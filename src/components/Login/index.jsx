import img from '../../assets/signupimg.jpg';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from '../Login/Login.module.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    setEmail('');
    navigate('/dashboard/trip');
  };

  return (
    <section className={style.baseView}>
      <div className='bg-gray-200 w-1/2 h-1/2'>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col items-center  p-7'
        >
          <h2 className='mb-3 font-bold lg:text-3xl'>Welcome</h2>
          <div class='relative'>
            <input
              type='text'
              id='floating_filled'
              class='block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
            />
            <label
              for='floating_filled'
              class='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'
            >
              Floating filled
            </label>
          </div>
          {/* <input
            type='email'
            placeholder='janedoe@gmail.com'
            className='mb-7 p-3'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
*/}
          <div className=' flex justify-center items-center mt-8 '>
            <Link to='homepage'>
              <button
                type='submit'
                className=' rounded-full border-black border p-1 w-48 font-bold'
              >
                Login
              </button>
            </Link>
          </div>

          <div>
            <p className='mt-8'>
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

