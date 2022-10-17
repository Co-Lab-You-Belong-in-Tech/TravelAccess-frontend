import img from '../../assets/signupimg.jpg';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    setEmail('');
    navigate('/dashboard/trip');
  };

  return (
    <div>
      <section className='container mx-auto mt-16 '>
        <div className='bg-gray-200 lg:grid grid-cols-2'>
          <form
            onSubmit={handleSubmit}
            className='flex flex-col  p-7 text-center '
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
          <div className='loginImg'>
            <img
              src='https://via.placeholder.com/1120x584'
              alt='placeholder picture 1'
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
