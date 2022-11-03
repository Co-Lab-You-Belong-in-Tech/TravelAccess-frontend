import React from 'react'
import style from '../Trip/Trip.module.css'
import calender from '/public/assets/Icons/Calendar icon.svg'
import location from '/public/assets/Icons/Pin icon.svg'
import user from '/public/assets/Icons/Traveler icon.svg'
import plane from '/public/assets/Icons/Airplane icon.svg'


const TripUpcoming = () => {
	return (
		<div>
			<div className='grid md:grid-cols-2'>
				<div className={style.cardContainer}>
					<img
						className={style.cardImage}
						src='/public/assets/Images/Seoul upcoming trip 1x.png'
						alt='seoul'
					/>
					<div className='flex pl-4'>
						<div className='flex flex-col justify-between'>
							<div className={style.icons}>
								<div>
									<img src={location} alt={location} />
								</div>
								<div className='text-sm ml-10'>
									<h5 className='font-bold'>Destination: </h5>
									<p> Seoul,South Korea</p>
								</div>
							</div>
							<div className={style.icons}>
								<div>
									<img src={calender} alt={user} />
								</div>
								<div className='text-sm ml-10'>
									<h3 className='font-bold'>Flight Dates: </h3>
									<p>12/10/22 - 12/30/22</p>
								</div>
							</div>
							<div className={style.icons}>
								<div>
									<img src={user} alt={user} />
								</div>
								<div className='text-sm ml-10'>
									<h3 className='font-bold'>No of travelers: </h3>
									<p>1 Adult</p>
								</div>
							</div>
							<div className='flex'>
								<div>
									<img src={plane} alt={plane} />
								</div>
								<div className='text-sm ml-10'>
									<h3 className='font-bold'>Airline:</h3>
									<p>Korea Air</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={style.cardContainer2}>
					<img
						className={style.cardImage}
						src='../../assets/Images/LA upcoming trip 1x.png'
						alt='seoul'
					/>
					<div className='flex pl-4'>
						<div className='flex flex-col justify-between'>
							<div className={style.icons}>
								<div>
									<img src={location} alt={location} />
								</div>
								<div className='text-sm ml-10'>
									<h5 className='font-bold'>Destination: </h5>
									<p> Los Angeles,LA</p>
								</div>
							</div>
							<div className={style.icons}>
								<div>
									<img src={calender} alt={user} />
								</div>
								<div className='text-sm ml-10'>
									<h3 className='font-bold'>Flight Dates: </h3>
									<p>2/5/22 - 2/10/22</p>
								</div>
							</div>
							<div className={style.icons}>
								<div>
									<img src={user} alt={user} />
								</div>
								<div className='text-sm ml-10'>
									<h3 className='font-bold'>No of travelers: </h3>
									<p>1 Adult</p>
								</div>
							</div>
							<div className='flex'>
								<div>
									<img src={plane} alt={plane} />
								</div>
								<div className='text-sm ml-10'>
									<h3 className='font-bold'>Airline:</h3>
									<p>JetBlue</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TripUpcoming