import Header from '../Header';
import style from './Dashboard.module.css';

export const Dashboard = () => {
  return (
    <>
      <Header />
      <div className={style.subHeader}>
        <h3>Trips</h3>
        <h3>Travel Prep</h3>
      </div>
      <div className={style.innerBox}>
        <div className={style.innerTabs}>
          <div>
            <h4>Flight</h4>
            <h4>Stay</h4>
            <h4>Bundles</h4>
          </div>
        </div>
      </div>
    </>
  );
};
