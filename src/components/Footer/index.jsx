import React from 'react'
import style from './Footer.module.css';

const index = () => {
    return (
        
			<footer className={style.footerBackground}>
				<div className={style.footerContent}>
					<ul>
						<li className={style.footerList}>TravelAccess</li>
						<li className={style.footerList}>copyright 2022</li>
					</ul>
					<ul>
						<li className={style.footerList}>About</li>
						<li className={style.footerList}>Contact</li>
						<li>Feedback</li>
					</ul>
				</div>
			</footer>
		);
}

export default index
