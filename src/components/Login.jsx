import React from 'react'
import style from '../components/Header/Header.module.css'
import { FaRegUserCircle } from 'react-icons/fa';
import img from '../assets/signupimg.jpg'
import { useState } from 'react';
import {Link} from 'react-router-dom'


const Login = () => {
	const [email, setEmail] = useState('')


	const handleSubmit = (e) => {
		e.preventDefault()
		
	}
  return (
		<div>
			<div className={style.wrapper}>
				<div className={style.mainHeader}>
					<div>
						<a herf='/'>TravelAccess</a>
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
							type='email'
							placeholder='janedoe@gmail.com'
							className='mb-7 p-3'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>

						<div className=' flex justify-center items-center '>
							<Link to='Header'>
								<button
									type='submit'
									className=' rounded-full border-black border p-2 w-44 '>
									Login
								</button>
							</Link>
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
}

export default Login
