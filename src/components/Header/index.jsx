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
            <Link to='/dashboard/trip'>
              <div>
                <FaUserCircle className='text-primary w-5 h-5' />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
