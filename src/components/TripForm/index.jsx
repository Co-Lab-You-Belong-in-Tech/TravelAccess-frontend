import { useState } from 'react';
import { MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';
import style from './TripForm.module.css';
import { LocationSearchInput } from '../CitySearch';

const TripForm = () => {
  const [search, setSearch] = useState('');
  const [trip, setTrip] = useState({
    origin: '',
    destination: '',
    startdate: '',
    enddate: '',
    travelers: 1,
    children: 0,
    tickets: 'economy',
  });
  const handleChange = e => {
    const { name, value } = e.target;
    setTrip(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(trip);
    setSearch(trip.destination);
  };

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
        {/* <div className='flex mb-2 '>
          <h4>One Way</h4>
          <h4 className='font-bold ml-4'>Roundtrip</h4>
        </div> */}
        <div>
          <form onSubmit={handleSubmit}>
            <div className={style.formUp}>
              <LocationSearchInput value={e => e.target.value} />
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
                    value={trip.origin || ''}
                    onChange={handleChange}
                    id='input-group-1'
                    className={style.homepageInput}
                    placeholder='Leaving from'
                    required
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
                    onChange={handleChange}
                    value={trip.destination || ''}
                    id='input-group-1'
                    className={style.homepageInput}
                    placeholder='Going to'
                    required
                  />
                </div>
              </div>
            </div>
            <div className={style.formDown}>
              {/* <div date-rangepicker className='flex flex-col'> */}
              <div className='flex flex-col'>
                <label className='mb-2'> Departing</label>
                <input
                  type='date'
                  name='startdate'
                  min={new Date().toISOString().split('T')[0]}
                  onChange={handleChange}
                  className={style.nextInput}
                  required
                />
              </div>
              <div className='flex flex-col'>
                <label className='mb-2'>Returning</label>
                <input
                  type='date'
                  name='enddate'
                  disabled={trip.startdate === '' ? true : false}
                  min={
                    trip.startdate
                      ? new Date(trip.startdate).toISOString().split('T')[0]
                      : ''
                  }
                  onChange={handleChange}
                  className={style.nextInput}
                  required
                />
                {/* </div> */}
              </div>
              <div className='flex flex-col'>
                <label className='mb-2'>Adults</label>

                <input
                  list='Adult'
                  name='Adult'
                  // value={trip.Adult || ''}
                  onChange={handleChange}
                  className={style.nextInput}
                  required
                />
                <datalist name='Adult' id='Adult'>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </datalist>
              </div>
              <div className='flex flex-col'>
                <label className='mb-2'>Children</label>

                <input
                  list='children'
                  name='children'
                  // value={trip.travelers || ''}
                  onChange={handleChange}
                  className={style.nextInput}
                />
                <datalist name='children' id='children'>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </datalist>
              </div>

              <div className='flex flex-col'>
                <label className='mb-2'>Tickets</label>
                <input
                  list='tickets'
                  name='tickets'
                  // value={trip.tickets || ''}
                  onChange={handleChange}
                  className={style.nextInput}
                />
                <datalist name='tickets' id='tickets'>
                  <option value='Economy' />
                  <option value='Business' />
                  <option value='First class' />
                </datalist>
              </div>
            </div>
            <div className={style.buttonContainer}>
              <input
                type='submit'
                value={'Create Trip'}
                className='rounded-full text-white bg-tertiary border p-1 w-44'
              />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default TripForm;
