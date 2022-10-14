import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import style from './Hompage.module.css'
import location from '../../assets/geo-alt-fill (1).svg'
import caret from '../../assets/caret-down-fill.svg'
import img1 from '../../assets/signupimg.jpg'
import img2 from '../../assets/signupimg.jpg'
import img3 from '../../assets/signupimg.jpg'

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
				<section className=' p-1 lg:p-12'>
					<div className='flex mb-2 '>
						<h4>One Way</h4>
						<h4 className='font-bold ml-4'>Roundtrip</h4>
					</div>
					<div>
						<form>
							<div className={style.formUp}>
								<div className=''>
									<div className='flex flex-col location'>
										<label className='mb-2'>From</label>
										<input type='text' className='p-1' />
									</div>
									<div className='location1'>
										<img src={location} alt='location' />
									</div>
								</div>

								<div className='flex flex-col'>
									<label className='mb-2'>To</label>
									<input type='text' className='p-1' />
									<div className='location'>
										<img src={location} alt='location' />
									</div>
								</div>
							</div>
							<div className={style.formDown}>
								<div className='flex flex-col'>
									<label className='mb-2'> Departing</label>
									<input type='date' className='p-1' />
								</div>
								<div className='flex flex-col'>
									<label className='mb-2'>Returning</label>
									<input type='date' className='p-1' />
								</div>
								<div className='flex flex-col'>
									<label className='mb-2'>Travelers</label>
									<input type='text' className='p-1' />
									<div>
										<img src={caret} alt='location' />
									</div>
								</div>
								<div className='flex flex-col'>
									<label className='mb-2'>Tickets</label>
									<input type='text' className='p-1' />
									<div>
										<img src={caret} alt='location' />
									</div>
								</div>
							</div>
							<div className={style.buttonContainer}>
								<button
									type='submit'
									className='rounded-full border-black border p-1 w-44  bg-purple-800 text-white border-none'>
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
				<div className='grid gap-3 grid-cols-2'>
					<div>
						<img src={img1} alt='flight' className='h-64 w-full object-cover' />
					</div>
					<div>
						<img src={img2} alt='flight' className='h-64 w-full object-cover' />
					</div>
				</div>
				<div className='grid grid-cols-1'>
					<div className='mt-6'>
						<img src={img3} alt='flight' className='w-full h-64 object-cover' />
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}
	
export default Homepage
