import img from '../../assets/signupimg.jpg';
import { useState, useEffect } from 'react';
// import axiosInstance from '../../helper/axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    setEmail('');
    navigate('/dashboard/trip');
  };

  // const login = () => {
  //   axiosInstance.get('/tokens/create', { email }).then(res => {
  //     const { data } = res;
  //     console.log(data);
  //     navigate('/dashboard');
  //   });
  // };

  // useEffect(() => {
  //   if (localStorage.getItem('token')) {
  //     navigate('/dashboard');
  //     // history.push('/dashboard');
  //   }

  //   return () => {
  //     login();
  //   };
  // }, []);
  // login();

  return (
    <div>
      <section className='container mx-auto mt-16'>
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

            <div className=' flex justify-center items-center '>
              {/* <Link to='Header'> */}
              <button
                type='submit'
                className=' rounded-full border-black border p-2 w-44 '
              >
                Login
              </button>
              {/* </Link> */}
            </div>

            <div>
              <p className='mt-8'>
                Don't have an account?{' '}
                <a href='Signup' className='font-bold'>
                  Signup
                </a>
              </p>
            </div>
          </form>
          <div className='loginImg'>
            <img src={img} alt='loginImg' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
