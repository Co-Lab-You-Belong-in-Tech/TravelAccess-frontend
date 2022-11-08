import style from './TravelPrep.module.css';
import { BsPlusLg } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrips } from '../../features/trips';
import Checklistcards from '../ChecklistCards';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export const TravelPrep = () => {
  const { trips } = useSelector(state => state.trips);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard/checklist');
  };

  useEffect(() => {
    dispatch(fetchTrips());
  }, [dispatch]);

  const tripList = trips.map(trip => (
    <Checklistcards key={trip.id} trip={trip} />
  ));

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
        <div className='rounded-md border border-[#0F7173]'>
          <Button
            onClick={handleClick}
            className='grid place-items-center h-[360px] w-full'
          >
            <div>
              <BsPlusLg className='text-4xl text-[#0F7173]' />
            </div>
          </Button>
        </div>

        <div>
          {trips.length <= 0 ? (
            <h6 className='grid place-items-center h-[360px]'>No Trips</h6>
          ) : (
            tripList
          )}
        </div>
      </div>
    </div>
  );
};
