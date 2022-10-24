import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import style from './Header.module.css';
const Header = () => {
  return (
		<div>
			<div className={style.wrapper}>
				<div className={style.mainHeader}>
					<div>
						<h2 className='font-semibold'>
							<Link to='/'>
								<img
									src='src/assets/Travel Access Logo.svg'
									alt='Travel Access Logo'
									className='w-40'
								/>
							</Link>
						</h2>
					</div>
					<div className={style.left}>
						{/* <h4>
              <Link to='/dashboard/trip'>My Trip</Link>{' '}
            </h4> */}
						<Link to='/dashboard'>
							<div>
								<FaUserCircle className='text-primary w-5 h-5' />
								{/* <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clip-path='url(#clip0_459_328)'>
                  <path
                    d='M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z'
                    fill='#0F7173'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_459_328'>
                    <rect width='24' height='24' fill='white' />
                  </clipPath>
                </defs>
              </svg> */}
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
