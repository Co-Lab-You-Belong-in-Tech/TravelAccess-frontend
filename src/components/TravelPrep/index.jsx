import style from './TravelPrep.module.css';
import { BsPlusLg } from 'react-icons/bs';
import like from '../../../public/assets/Icons/Heart filled icon.svg';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrips } from '../../features/trips';
import { Link, useParams } from 'react-router-dom';

export const TravelPrep = () => {
  const { trips } = useSelector(state => state.trips);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchTrips());
  }, [dispatch, trips]);

  return (
    <div className={style.outerBox}>
      <form className='flex items-center'>
        <label htmlFor='simple-search' className='sr-only'>
          Search
        </label>
        <div className='relative w-1/2'>
          <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
            <svg
              aria-hidden='true'
              className='w-5 h-5 text-gray-500 dark:text-gray-400'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                clipRule='evenodd'
              ></path>
            </svg>
          </div>
          <input
            type='text'
            id='simple-search'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 '
            placeholder='Search'
            required=''
          />
        </div>
      </form>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-5 '>
        <div className='border border-[#0F7173]'>
          <div className='grid place-items-center h-full'>
            <BsPlusLg className='text-4xl text-[#0F7173]' />
          </div>
        </div>
        <Link to={`/trip/${params.trip_id}`}>
          {' '}
          {/* This code to check if workable */}
          <div className={style.showcase}>
            <div className={style.overlay}>
              <p className='text-white lg:text-2xl'>Seoul</p>
              <p className='text-white lg:text-2xl'>South Korea</p>
            </div>
            <div className={style.heart}>
              <img src={like} alt={like} className='like' />
            </div>
          </div>
        </Link>
        <div className={style.showcase}>
          <div className={style.overlay}>
            <p className='text-white lg:text-2xl'>Seoul</p>
            <p className='text-white lg:text-2xl'>South Korea</p>
          </div>
          <div className={style.heart}>
            <img src={like} alt={like} className='like' />
          </div>
        </div>

        {/* <div className={style.showcase1}>
          <div className={style.overlay}>
            <p className='text-white lg:text-2xl'>London</p>
            <p className='text-white lg:text-2xl'>United Kingdom</p>
          </div>
          <div>
            <img src={like} alt={like} className='like' />
          </div>
        </div>
        <div className={style.showcase2}>
          <div className={style.overlay}>
            <p className='text-white lg:text-2xl'>New York</p>
            <p className='text-white lg:text-2xl'>USA</p>
          </div>
          <div>
            <img src={like} alt={like} className='like' />
          </div>
        </div>
        <div className={style.showcase3}>
          <div className={style.overlay}>
            <p className='text-white lg:text-2xl'>Los Angles</p>
            <p className='text-white lg:text-2xl'>USA</p>
          </div>
          <div>
            <img src={like} alt={like} className='like' />
          </div>
        </div>
        <div className={style.showcase4}>
          <div className={style.overlay}>
            <p className='text-white lg:text-2xl'>Sydney</p>
            <p className='text-white lg:text-2xl'>Australia</p>
          </div>
          <div>
            <img src={like} alt={like} className='like' />
          </div>
        </div>
        <div className={style.showcase5}>
          <div className={style.overlay}>
            <p className='text-white lg:text-2xl'>Bangkok</p>
            <p className='text-white lg:text-2xl'>Thailand</p>
          </div>
          <div>
            <img src={like} alt={like} className='like' />
          </div>
        </div>
        <div className={style.showcase6}>
          <div className={style.overlay}>
            <p className='text-white lg:text-2xl'>Brazil</p>
            <p className='text-white lg:text-2xl'>South America</p>
          </div>
          <div>
            <img src={like} alt={like} className='like' />
          </div>
        </div> */}
      </div>
    </div>
  );
};
