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
    <div className={style.wrapper}>
      <section className={style.loginContainer}>
        <div className='bg-white lg:w-4/6 mt-12'>
          <form
            onSubmit={handleSubmit}
            className='flex flex-col  p-10 justify-center items-center  '
          >
            <h2 className='mb-3 font-bold lg:text-3xl'>Welcome</h2>
            <input
              type='email'
              placeholder='janedoe@gmail.com'
              className='mb-7 p-3 border border-green-400 w-full'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />

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
    </div>
  );
};

export default Login;
