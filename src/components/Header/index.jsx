import { FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import style from './Header.module.css';

import { useAuth } from '../../ProtectedRoutes';
import { logout } from '../../features/auth';
import { useDispatch } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useAuth();
  const handleLogout = () => {
    if (isAuth) {
      dispatch(logout());
      localStorage.removeItem('token');
      navigate('/');
    }
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
