import style from './Trip.module.css';
import { MdLocationOn } from 'react-icons/md';
import TripUpcoming from '../TripUpcoming';
import TripForm from '../TripForm';
import Footer from '../Footer/index'

export const Trip = () => {
  return (
		<>
			<TripForm />

			<div className=' border-gray-200 border-b mt-2 '></div>
			<div className={style.upcomingDashboard}>
				<div className='text-primary mb-4 flex justify-between items-center'>
					<h4 className='font-bold'>Upcoming</h4>
					<h4 className={style.upcomimgText}>View All</h4>
				</div>
				<div>
					<TripUpcoming />
				</div>

				<section className='mt-6'>
					<div className='text-primary mb-4 flex justify-between items-center'>
						<h4 className='font-bold'>Discover</h4>
						<h4>View All</h4>
					</div>
				</section>
				<div className='grid grid-cols-2 lg:grid-cols-3 gap-2'>
					<div className='flex flex-col justify-start items-start '>
						<img
							src='../../assets/Images/Namsan tower discover 1x.png'
							alt='Namsan Tower'
							className='lg:h-52'
						/>
						<p className='-mt-2 ml-2 text'>Namsan Tower</p>
					</div>
					<div>
						<img
							src='../../assets/Images/Bukchon Hanok Village discover 1x.png'
							alt='Bukchon Hanok Village'
							className='lg:h-52'
						/>
						<p className='-mt-2 ml-2 text'>Bukchon Hanok Village</p>
					</div>
					<div className={style.bottomImg}>
						<div className='flex flex-col '>
							<img
								src='../../assets/Images/Lotte World discover 1x.png'
								alt='Lotte World'
								className='lg:h-52'
							/>
							<p className='-mt-2 ml-2 text'>Lotte World</p>
						</div>
					</div>
				</div>
			</div>
			<div>
        <Footer />
			</div>
		</>
	);
};
