import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import AuthContext from '../../context/AuthProvider';
import { useContext } from 'react';

const Header = () => {
  const { setAuth } = useContext(AuthContext);
  const handleLogout = () => {
    setAuth(null);
  };

  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.mainHeader}>
          <div>
            <h2 className='font-semibold'>
              <Link to='/homepage'>
                <img
                  src='../../assets/Travel Access Logo.svg'
                  alt='Travel Access Logo'
                  className='w-40'
                />
              </Link>
            </h2>
          </div>
          <div className={style.left}>
            <div>
              <button
                className='text-primary mx-2 font-medium'
                type='button'
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
            |
            <div>
              <Link to='/dashboard/trip'>
                <FaUserCircle className='text-primary w-5 h-5' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
