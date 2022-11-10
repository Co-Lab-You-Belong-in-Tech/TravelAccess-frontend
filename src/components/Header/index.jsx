// import { FaUserCircle } from 'react-icons/fa';
import profile from '/assets/Icons/Profile filled icon.png';
import { Link, useNavigate } from 'react-router-dom';
import style from './Header.module.css';
import { logout } from '../../features/auth';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const user = localStorage.getItem('token');
  const { isAuthenticated } = useSelector(state => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    if (isAuthenticated) {
      dispatch(logout());
      localStorage.removeItem('token');
      navigate('/');
    }
  };

  return (
    <div className={style.wrapper}>
      <div className={style.mainHeader}>
        <div>
          <h2 className='font-semibold'>
            <Link to='/'>
              <img
                src='../../assets/Travel Access Logo.svg'
                alt='Travel Access Logo'
                className='w-40'
              />
            </Link>
          </h2>
        </div>
        {isAuthenticated && user ? (
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
                <img src={profile} alt='profile' className='w-5 mx-5' />
              </Link>
            </div>
          </div>
        ) : (
          <div className={style.left}>
            <div>
              <Link to='/login' className='text-primary mx-2 font-medium'>
                Login
              </Link>
            </div>
            |
            <div>
              <Link to='/signup' className='text-primary mx-2 font-medium'>
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
