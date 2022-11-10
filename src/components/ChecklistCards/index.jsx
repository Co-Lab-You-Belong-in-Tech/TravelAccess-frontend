import { Link, useParams } from 'react-router-dom';
import style from '../TravelPrep/TravelPrep.module.css';
import like from '/assets/Icons/Heart filled icon.svg';
import Guide from '../Guide';

const Checklistcards = ({ image, country, city }) => {
  return (
    <div
      className={`bg-[url(${image})] relative bg-no-repeat bg-cover flex justify-center bg-[40%, 40%] h-[360px] rounded-lg`}
      // style={{
      //   backgroundRepeat: 'no-repeat',
      //   // backgroundImage: url`(${image})`,
      //   backgroundPosition: '40% 40%',
      //   backgroundSize: 'cover',
      //   height: '360px',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   borderRadius: '5px',
      //   position: 'relative',
      // }}
    >
      <div className={style.overlay}>
        <p className='text-white lg:text-2xl'>{city}</p>
        <p className='text-white lg:text-2xl'>{country}</p>
        <div className={style.heart}>
          <img src={like} alt={like} className='like' />
        </div>
      </div>
    </div>
  );
};

export default Checklistcards;
