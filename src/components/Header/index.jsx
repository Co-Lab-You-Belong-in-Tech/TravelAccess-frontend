import React from 'react'
import { FaRegUserCircle } from 'react-icons/fa';
import FlightSearchCard from './FlightSearchCard';
import style from './Header.module.css';
const Header = () => {
	return (
		<div>
			<div className={style.wrapper}>
				<div className={style.mainHeader}>
					<div>
						<a href='/'>TravelAccess</a>
					</div>
					<div className={style.left}>
						<div>My Trip </div>
						<div>
							<FaRegUserCircle />
						</div>
					</div>
				</div>
			</div>
			<FlightSearchCard />
		</div>
	);
}

export default Header

 