import { useState } from 'react';
import { MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';
import style from './TripForm.module.css';

const TripForm = () => {
  return (
    <div className={style.containerHomepage}>
      <div className={style.homepageInnerTabs}>
        <ul className={style.homepageTabs}>
          <li className={style.links}>
            <Link to='#' className={style.link}>
              Flights
            </Link>
          </li>
          <li className={style.links}>
            <Link to='#' className={style.link}>
              Stay
            </Link>
          </li>
          <li className={style.links}>
            {' '}
            <Link to='#' className={style.link}>
              Bundles
            </Link>
          </li>
        </ul>
      </div>
      <section className=' p-1 lg:p-6'>
        <div className='flex mb-2 '>
          <h4>One Way</h4>
          <h4 className='font-bold ml-4'>Roundtrip</h4>
        </div>
        <div>
          <form>
            <div className={style.formUp}>
              <div className='flex flex-col location'>
                <label
                  htmlFor='input-group-1'
                  className='block mb-2 text-sm font-medium text-gray-900'
                >
                  From
                </label>
                <div className='relative'>
                  <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                    <MdLocationOn className='text-primary w-25' />
                  </div>

                  <input
                    type='text'
                    name='origin'
                    id='input-group-1'
                    className={style.homepageInput}
                    placeholder='Leaving from'
                  />
                </div>
              </div>

              <div className='flex flex-col'>
                <label
                  htmlFor='input-group-1'
                  className='block mb-2 text-sm font-medium text-gray-900'
                >
                  To
                </label>
                <div className='relative mb-6'>
                  <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                    <MdLocationOn className='text-primary w-25' />
                  </div>
                  <input
                    type='text'
                    name='destination'
                    id='input-group-1'
                    className={style.homepageInput}
                    placeholder='Going to'
                  />
                </div>
              </div>
            </div>
            <div className={style.formDown}>
              {/* <div date-rangepicker className='flex flex-col'> */}
              <div className='flex flex-col'>
                <label className='mb-2'> Departing</label>
                <input
                  name='depature_date'
                  type='date'
                  className={style.nextInput}
                  required
                />
              </div>
              <div className='flex flex-col'>
                <label className='mb-2'>Returning</label>
                <input
                  className={style.nextInput}
                  name='return_date'
                  type='date'
                />
                {/* </div> */}
              </div>
              <div className='flex flex-col'>
                <label className='mb-2'>Travelers</label>

                <input list='travelers' className={style.nextInput} />
                <datalist name='travelers' id='travelers'>
                  <option value='1 Adult'></option>
                  <option value='2'></option>
                  <option value='3'></option>
                  <option value='4'></option>
                  <option value='5'></option>
                </datalist>
              </div>
              <div className='flex flex-col'>
                <label className='mb-2'>Tickets</label>
                <input list='tickets' className={style.nextInput} />
                <datalist name='tickets' id='tickets'>
                  <option value='Economy' />
                  <option value='Business' />
                  <option value='First class' />
                </datalist>
              </div>
            </div>
            <div className={style.buttonContainer}>
              <button
                type='submit'
                className='rounded-full text-white bg-tertiary border p-1 w-44'
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default TripForm;
