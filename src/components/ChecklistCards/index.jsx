import { Link, useParams } from 'react-router-dom';
import style from '../TravelPrep/TravelPrep.module.css';
import like from '../../../public/assets/Icons/Heart filled icon.svg';

const Checklistcards = ({ trip }) => {
  const { id, to } = trip;
  return (
    <Link to={`/${id}`}>
      <div className={style.showcase}>
        <p className='text-white lg:text-2xl'>{to}</p>
        {/* <p className='text-white lg:text-2xl'>South Korea</p> */}
        <div className={style.heart}>
          <img src={like} alt={like} className='like' />
        </div>
      </div>
    </Link>
  );
};

export default Checklistcards;
