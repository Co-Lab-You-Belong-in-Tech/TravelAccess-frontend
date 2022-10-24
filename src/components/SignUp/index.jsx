import { FaRegUserCircle } from 'react-icons/fa';
import img from '../../assets/signupimg.jpg';
import { useState } from 'react';
import style from './Signup.module.css';
import baseStyle from '../Login/Login.module.css';

const Signup = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = event => {
    const { name, value } = event.target;
    setInputs(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <section className={baseStyle.baseView}>
      <div className='bg-gray-200 w-1/2'>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col  p-5 text-center '
        >
          <h2 className='mb-3 font-bold lg:text-3xl'>Welcome</h2>
          <input
            type='text'
            name='fullname'
            placeholder='Jane Doe'
            className='mb-5 p-2'
            value={inputs.fullname || ''}
            onChange={handleChange}
            required
          />
          <input
            type='email'
            name='email'
            placeholder='janedoe@gmail.com'
            className='mb-5 p-2'
            value={inputs.email || ''}
            onChange={handleChange}
            required
          />
          <input
            type='tel'
            name='telephone'
            placeholder='000-000-000'
            className='mb-5 p-2'
            value={inputs.telephone || ''}
            onChange={handleChange}
            required
          />
          <div className=' flex justify-center items-center mt-8 '>
            <div>
              <button
                type='submit'
                className=' rounded-full border-black border p-1 w-48 font-bold '
              >
                signup
              </button>
            </div>
          </div>
          <div>
            <p className='mt-8'>
              Have an account?{' '}
              <a href='/' className='font-bold'>
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
