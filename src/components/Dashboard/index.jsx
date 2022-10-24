import style from './Dashboard.module.css';
import Header from '../Header';
import { Link, Outlet } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className={style.subHeader}>
        <h3>
          <Link to='/dashboard/trip'>Trips</Link>
        </h3>
        <h3>
          <Link to='/dashboard/travelprep'> Travel Prep</Link>
        </h3>
      </div>
      <Outlet />
    </div>
  );
};
