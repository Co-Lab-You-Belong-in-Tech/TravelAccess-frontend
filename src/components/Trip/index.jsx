import style from './Trip.module.css';
import { BsArrowLeftRight } from 'react-icons/bs';

export const Trip = () => {
  return (
    <div className={style.outerBox}>
      <div className={style.innerBox}>
        <div className={style.outerTabs}>
          <div className={style.innerTabs}>
            <div className={style.tabs}>
              <h4>Flight</h4>
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
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-2 justify-center'>
          <img src='https://via.placeholder.com/350x150' alt='' />
          <img src='https://via.placeholder.com/350x150' alt='' />
          <img src='https://via.placeholder.com/350x150' alt='' />
          <img src='https://via.placeholder.com/350x150' alt='' />
          <img src='https://via.placeholder.com/350x150' alt='' />
          <img src='https://via.placeholder.com/350x150' alt='' />
          <img src='https://via.placeholder.com/350x150' alt='' />
          <img src='https://via.placeholder.com/350x150' alt='' />
        </div>
        <div className='flex flex-row justify-around'></div>
      </div>
    </div>
  );
};
