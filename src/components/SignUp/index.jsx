import { FaRegUserCircle } from 'react-icons/fa';
import img from '../../assets/signupimg.jpg'
import { useState } from 'react';

const Signup = () => {
  const [inputs, setInputs] = useState({})

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setInputs(values=>({...value,[name]:value}))
  }

  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
		<div>
			<section className='container mx-auto mt-16'>
				<div className='bg-gray-200 lg:grid grid-cols-2'>
					<form
						onSubmit={handleSubmit}
						className='flex flex-col  p-7 text-center '>
						<h2 className='mb-3 font-bold lg:text-3xl'>Welcome</h2>
						<input
							type='text'
							placeholder='Jane Doe'
							className='mb-7 p-3'
							value={inputs.name||""}
							onChange={handleChange}
							required
						/>
						<input
							type='email'
							placeholder='janedoe@gmail.com'
							className='mb-7 p-3'
							value={inputs.email||""}
							onChange={handleChange}
							required
						/>
						<input
							type='number'
							placeholder='000-000-000'
							className='mb-7 p-3'
							value={inputs.number||""}
							onChange={handleChange}
							required
						/>
						<div className=' flex justify-center items-center '>
							<div>
								<button
									type='submit'
									className=' rounded-full border-black border p-2 w-44 '>
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

					<div className='signupImg'>
						<img src={img} alt='img' />
					</div>
				</div>
			</section>
		</div>
	);
};

export default Signup;
