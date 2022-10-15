import Header from '../Header';
import Footer from '../Footer';
import style from './Hompage.module.css';
import location from '../../assets/geo-alt-fill (1).svg';
import caret from '../../assets/caret-down-fill.svg';
import img1 from '../../assets/signupimg.jpg';
import img2 from '../../assets/signupimg.jpg';
import img3 from '../../assets/signupimg.jpg';
import { MdLocationOn } from 'react-icons/md';

const Homepage = () => {
  return (
		<div>
			<Header />
			<main className={style.containerHomepage}>
				<div className={style.homepageInnerTabs}>
					<ul className={style.homepageTabs}>
						<li className={style.links}>Flights</li>
						<li className={style.links}>Stay</li>
						<li className={style.links}>Bundles</li>
					</ul>
				</div>
				<section className=' p-1 lg:p-6'>
					<div className='flex mb-2 '>
						<h4>One Way</h4>
						<h4 className='font-bold ml-4'>Roundtrip</h4>
					</div>
					<div>
						<form>
							<div className={style.formUp}>
								<div className='flex flex-col location'>
									<label
										htmlFor='input-group-1'
										className='block mb-2 text-sm font-medium text-gray-900'>
										From
									</label>
									<div className='relative mb-6'>
										<div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
											<MdLocationOn />
										</div>
										<input
											type='text'
											id='input-group-1'
											className={style.homepageInput}
											placeholder='Enter a city or airport'
										/>
									</div>
								</div>

								<div className='flex flex-col'>
									<label
										htmlFor='input-group-1'
										className='block mb-2 text-sm font-medium text-gray-900'>
										To
									</label>
									<div className='relative mb-6'>
										<div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
											<MdLocationOn />
										</div>
										<input
											type='text'
											id='input-group-1'
											className={style.homepageInput}
											placeholder='Enter your destination'
										/>
									</div>
								</div>
							</div>
							<div className={style.formDown}>
								{/* <div date-rangepicker className='flex flex-col'> */}
								<div className='flex flex-col'>
									<label className='mb-2'> Departing</label>
									<input
										name='start'
										type='date'
										className={style.nextInput}
										placeholder='select date'
									/>
								</div>
								<div className='flex flex-col'>
									<label className='mb-2'>Returning</label>
									<input
										name='end'
										type='date'
										className={style.nextInput}
										placeholder='select date'
									/>
									{/* </div> */}
								</div>
								<div className='flex flex-col'>
									<label className='mb-2'>Travelers</label>
									<select
										className={style.nextInput}
										name='travelers'
										id='travelers'>
										<option value='1'>1 Adult</option>
										<option value='2'>2</option>
										<option value='3'>3</option>
										<option value='4'>4</option>
										<option value='5'>5</option>
									</select>
								</div>
								<div className='flex flex-col'>
									<label className='mb-2'>Tickets</label>
									<select
										className={style.nextInput}
										name='travelers'
										id='travelers'>
										<option value='1'>Economy</option>
										<option value='2'>Business</option>
										<option value='3'>First class</option>
									</select>
								</div>
							</div>
							<div className={style.buttonContainer}>
								<button
									type='submit'
									className='rounded-full border-black border p-1 w-44'>
									Search
								</button>
							</div>
						</form>
					</div>
				</section>
			</main>
			<div className=' border-gray-400 border-b-2 mt-2 '></div>
			<section className='container mx-auto p-1'>
				<div className={style.explore}>
					<h4>Explore Destination</h4>
					<h4>view all</h4>
				</div>
				<div className='grid gap-1 grid-cols-2'>
					<div>
						<img
							src='https://via.placeholder.com/541x167'
							alt='placeholder picture 1'
						/>
					</div>
					<div>
						<img
							src='https://via.placeholder.com/541x167'
							alt='placeholder picture 1'
						/>
					</div>
				</div>
				<div className='grid grid-cols-1'>
					<div className='mt-6 flex justify-center items-center'>
						<img
							src='https://via.placeholder.com/924x240'
							alt='placeholder picture 1'
						/>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default Homepage;