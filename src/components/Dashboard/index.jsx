import Header from '../Header';
import style from './Dashboard.module.css';
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import axiosInstance from '../helper/axios';

export const Dashboard = () => {
  const [destination, setDestination] = useState('');
  // const [departing, setDeparting] = useState('');
  const getImages = async () => {
    try {
      await axiosInstance
        .get('https://jsonplaceholder.typicode.com/photos')
        .then(res => console.log(res.data));
    } catch (error) {
      console.log(error);
    }
  };
  getImages();

  return (
    <>
      <Header />
      <div className={style.subHeader}>
        <h3>
          <Link to='/dashboard/trip'>Trips</Link>
        </h3>
        <h3>Travel Prep</h3>
      </div>
      <Outlet />
    </>
  );
};
