import Header from '../Header';
import Footer from '../Footer';
import style from './Hompage.module.css';
import { MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';
import TripForm from '../TripForm';

const Homepage = () => {
  return (
    <div>
      <TripForm />
      <div className=' border-gray-200 border-b mt-2 '></div>
      <div className={style.containerExplore}>
        <section className='p-1'>
          <div className={style.explore}>
            <h4 className={style.exploreDestinations}>Explore Destination</h4>
            <h4>View All</h4>
          </div>
          <div className='grid gap-2 grid-cols-2 lg:grid-cols-3'>
            <div>
              <img
                src='../../assets/Images/Miami explore 1x.png'
                alt='Miami, Florida'
                className='lg:h-52 '
              />
              <p className='mt-3'>Miami, Florida</p>
            </div>
            <div>
              <img
                src='../../assets/Images/New York explore 1x.png'
                alt='New York, New York'
                className='lg:h-52'
              />
              <p className='mt-2'>New York City</p>
            </div>
            <div className={style.bottomImg}>
              <div className='flex flex-col'>
                <img
                  src='../../assets/Images/London explore 1x.png'
                  alt='London, United Kingdom'
                  className='lg:h-52'
                />
                <p className='mt-2'>London, United Kingdom</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
