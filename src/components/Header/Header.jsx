import { FaRegUserCircle } from 'react-icons/fa';
import style from './Header.module.css';
export const Header = () => {
  return (
    <div className={style.mainHeader}>
      <div>TravelAccess</div>
      <div className={style.left}>
        <div>My Trip </div>
        <div>
          <FaRegUserCircle />
        </div>
      </div>
    </div>
  );
};
