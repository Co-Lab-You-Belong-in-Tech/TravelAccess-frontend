import { FaRegUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import style from './Header.module.css';
const Header = () => {
  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.mainHeader}>
          <div>
            <h2 className='font-semibold'>
              <a href='/'>TravelAccess</a>
            </h2>
          </div>
          <div className={style.left}>
            <h4>
              <Link to='/dashboard/trip'>My Trip</Link>{' '}
            </h4>
            <div>
              <FaRegUserCircle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
