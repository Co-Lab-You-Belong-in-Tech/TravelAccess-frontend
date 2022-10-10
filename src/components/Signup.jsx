import React from 'react'
import style from '../components/Header/Header.module.css'
import { FaRegUserCircle } from 'react-icons/fa';
import img from '../assets/signupimg.jpg'
import { useState } from 'react';


const Signup = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('');
	const [number, setNumber] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
	}
  return (
		<div>
			<div className={style.wrapper}>
				<div className={style.mainHeader}>
					<div>
						<a href='/'>TravelAccess</a>
					</div>
					<div className={style.left}>
						<div>
							<FaRegUserCircle />
						</div>
					</div>
				</div>
			</div>
			<section className='container mx-auto mt-16'>
				<div className='bg-gray-200 lg:grid grid-cols-2'>
					<form
						onSubmit={handleSubmit}
						className='flex flex-col  p-7 text-center '>
						<h2 className='mb-3 font-bold lg:text-3xl'>Welcome</h2>
						<input
							type='text'
							placeholder='Name:Jane Doe'
							className='mb-7 p-3'
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
						<input
							type='email'
							placeholder='email:janedoe@gmail.com'
							className='mb-7 p-3'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						<input
							type='number'
							placeholder='phoneNumber:000-000-000'
							className='mb-7 p-3'
							value={number}
							onChange={(e) => setNumber(e.target.value)}
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
}

export default Signup
