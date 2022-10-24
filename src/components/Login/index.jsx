import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './Login.module.css';

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
          <input
            type='email'
            placeholder='janedoe@gmail.com'
            className='mb-7 p-3'
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
  );
};

export default Login;
