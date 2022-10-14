import Header from '../Header';
import style from './Dashboard.module.css';
import { BsArrowLeftRight } from 'react-icons/bs';
import { useState } from 'react';

export const Dashboard = () => {
  const [destination, setDestination] = useState('');
  // const [departing, setDeparting] = useState('');
  return (
    <>
      <Header />
      <div className={style.subHeader}>
        <h3>Trips</h3>
        <h3>Travel Prep</h3>
      </div>
      <div className={style.outerBox}>
        <div className={style.innerBox}>
          <div className={style.outerTabs}>
            <div className={style.innerTabs}>
              <div className={style.tabs}>
                <h4>Flights</h4>
                <h4>Stay</h4>
                <h4>Bundles</h4>
              </div>
            </div>
          </div>
          <form className='w-[85%] m-auto'>
            <div className='flex flex-row justify-between '>
              <div className='flex flex-row justify-start items-center '>
                <div className={style.formItem}>
                  <label htmlFor='Departing'>Departing</label>
                  <input
                    type='text'
                    name='departing'
                    // onChange={e => setDeparting(e.target.value)}
                  />
                </div>
                <div className=''>
                  <button className='relative'>
                    <BsArrowLeftRight />
                  </button>
                </div>
                <div className={style.formItem}>
                  <label htmlFor='Returning'>Returning</label>
                  <input type='text' name='returning' />
                </div>
              </div>
              <div className='flex justify-end'>
                <div className={style.formItem}>
                  <label htmlFor='traveller'>Traveller</label>
                  <input type='number' name='traveller' />
                </div>
              </div>
            </div>
            <div className='flex flex-row justify-between'>
              <div className='flex flex-row justify-around w-full'>
                <div className={style.formItem}>
                  <label htmlFor='from'>From</label>
                  <input type='date' name='from' da />
                </div>
                <div className={style.formItem}>
                  <label htmlFor='to'>To</label>
                  <input type='date' name='to' />
                </div>
              </div>
              <div className='flex justify-end'>
                <div className={style.formItem}>
                  <label htmlFor='ticket'>Ticket</label>
                  <input type='number' name='ticket' />
                  {/* <select className='w-full' id='ticket' name='ticket'>
                  <option value='oneWay'>One Way</option>
                </select> */}
                </div>
              </div>
            </div>
          </form>
        </div>
        <div>
          <h3>Discover</h3>
          <img src='https://via.placeholder.com/150' alt='' />
        </div>
      </div>
    </>
  );
};
