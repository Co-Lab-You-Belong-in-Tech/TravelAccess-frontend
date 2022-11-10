import React from 'react';
import style from '../Trip/Trip.module.css';
import calender from '/assets/Icons/Calendar icon.svg';
import location from '/assets/Icons/Pin icon.svg';
import user from '/assets/Icons/Traveler icon.svg';
import plane from '/assets/Icons/Airplane icon.svg';


const TripUpcoming = () => {
	return (
		<>
			<div>
				<div className='grid md:grid-cols-2'>
					<div className={style.cardContainer}>
						<img
							className={style.cardImage}
							src='../../assets/Images/Seoul template 1x.png '
							alt='seoul'
						/>
						
						<div className={style.cardText}>
							<div className={style.icons}>
								<div className={style.img}>
									<img src={location} alt={location} className={style.mobile} />
								</div>
								<div className='mx-4'>
									<h3 className='font-bold'>Destination:</h3>
									<p>Seoul, South Korea</p>
								</div>
							</div>
							<div className={style.icons}>
								<div className={style.img}>
									<img src={calender} alt={user} className={style.mobile} />
								</div>
								<div className='mx-4'>
									<h3 className='font-bold'>Flight Dates:</h3>
									<p>2/5/22 - 2/10/22</p>
								</div>
							</div>
							<div className={style.icons}>
								<div className={style.img}>
									<img src={user} alt={user} className={style.mobile} />
								</div>
								<div className='mx-4'>
									<h3 className='font-bold'>No of travelers:</h3>
									<p>2 Adult</p>
								</div>
							</div>
							<div className={style.icons}>
								<div className={style.img}>
									<img src={plane} alt={plane} className={style.mobile} />
								</div>
								<div className='mx-4'>
									<h3 className='font-bold'>Airline:</h3>
									<p>Korea Air</p>
								</div>
							</div>
						</div>
				
					</div>
					<div className={style.cardContainer2}>
						<img
							className={style.cardImage}
							src='../../assets/Images/LA upcoming trip 1x.png'
							alt='LA'
						/>
						
						<div className={style.cardText}>
							<div className={style.icons}>
								<div className={style.img}>
									<img src={location} alt={location} />
								</div>
								<div className='ml-4'>
									<h3 className='font-bold'>Destination: </h3>
									<p> Los Angeles,LA</p>
								</div>
							</div>
							<div className={style.icons}>
								<div className={style.img}>
									<img src={calender} alt={user} />
								</div>
								<div className='mx-4'>
									<h3 className='font-bold'>Flight Dates: </h3>
									<p>2/5/22 - 2/10/22</p>
								</div>
							</div>
							<div className={style.icons}>
								<div className={style.img}>
									<img src={user} alt={user} />
								</div>
								<div className='mx-4'>
									<h3 className='font-bold'>No of travelers: </h3>
									<p>1 Adult</p>
								</div>
							</div>
							<div className={style.icons}>
								<div className={style.img}>
									<img src={plane} alt={plane} />
								</div>
								<div className='mx-4'>
									<h3 className='font-bold'>Airline:</h3>
									<p>JetBlue</p>
								</div>
							</div>
						</div>
					
					</div>
				</div>
			</div>
			
			
		</>
	);
};

export default TripUpcoming;
