import style from './TravelPrep.module.css';
import { BsPlusLg } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrips } from '../../features/trips';
import Checklistcards from '../ChecklistCards';
import { useNavigate } from 'react-router-dom';
import like from '/assets/Icons/Heart filled icon.svg';
import Footer from '../Footer/index';
import { MdLocationOn } from 'react-icons/md';

export const TravelPrep = () => {
  const [trip, setTrip] = useState({
    origin: '',
    destination: '',
    startdate: '',
    enddate: '',
    adults: 0,
    children: 0,
    tickets: '',
  });
  const [showModal, setShowModal] = useState(false);
  const { trips } = useSelector(state => state.trips);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate('/dashboard/checklist');
  // };

  const handleChange = e => {
    const { name, value } = e.target;
    setTrip(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(trip);
  };
  const handleShow = () => setShowModal(true);

  useEffect(() => {
    dispatch(fetchTrips());
  }, [dispatch]);

  // const tripList = trips.map(trip => (
  //   <Checklistcards key={trip.id} trip={trip} />
  // ));

  return (
    <>
      <div className={style.outerBox}>
        <form className='flex items-center'>
          <label htmlFor='simple-search' className='sr-only'>
            Search
          </label>
          <div className='relative w-1/2 my-6 '>
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
            <div>
              <input
                type='text'
                id='simple-search'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 '
                placeholder='Search'
                required=''
              />
            </div>
          </div>
        </form>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-5 lg:grid-cols-4 '>
          <div className='rounded-md border border-[#0F7173]'>
            <button
              onClick={handleShow}
              className='grid place-items-center h-[360px] w-full'
            >
              <div>
                <BsPlusLg className='text-4xl text-[#0F7173]' />
              </div>
            </button>
            {showModal ? (
              <>
                <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
                  <div className='relative w-1/2 h-3/4 my-6 mx-auto max-w-3xl'>
                    {/*content*/}
                    <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                      {/*header*/}
                      <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
                        <h3 className='text-xl font-semibold'>Add Trip</h3>
                        <button
                          className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                          onClick={() => setShowModal(false)}
                        >
                          <span className='bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none'>
                            x
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className='relative p-6 flex-auto'>
                        <section className=' p-1 lg:p-6'>
                          {/* <div className='flex mb-2 '>
          <h4>One Way</h4>
          <h4 className='font-bold ml-4'>Roundtrip</h4>
        </div> */}
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
                                    disabled={
                                      trip.startdate === '' ? true : false
                                    }
                                    min={
                                      trip.startdate
                                        ? new Date(trip.startdate)
                                            .toISOString()
                                            .split('T')[0]
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
                                    name='adults'
                                    value={trip.adults || ''}
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
                                    // onChange={handleChange}
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
                                    value={trip.tickets || ''}
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
                            </form>
                          </div>
                        </section>
                      </div>
                      {/*footer*/}
                      <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
                        <button
                          className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                          type='button'
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                        <button
                          className='bg-primary text-white active:bg-primary font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                          type='button'
                          onClick={() => setShowModal(false)}
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
              </>
            ) : null}
          </div>
          <a
            href='https://www.britannica.com/place/Seoul/Economy'
            target={'_blank'}
          >
            <div className={style.showcase} style={{ textAlign: 'center' }}>
              <div className={style.overlay}>
                <p className={style.textCountry}>Seoul</p>
                <p className={style.textCountry}>South Korea</p>
                <div className={style.heart}>
                  <img src={like} alt={like} />
                </div>
              </div>
            </div>
          </a>
          <a href='https://www.britannica.com/place/London' target={'_blank'}>
            <div className={style.showcase1} style={{ textAlign: 'center' }}>
              <div>
                <p className={style.textCountry}>London</p>
                <p className={style.textCountry}>United Kingdom</p>
                <div className={style.heart}>
                  <img src={like} alt={like} />
                </div>
              </div>
            </div>
          </a>
          <a
            href='https://www.britannica.com/place/New-York-City'
            target={'_blank'}
          >
            <div className={style.showcase2} style={{ textAlign: 'center' }}>
              <div>
                <p className={style.textCountry}>New York City</p>
                <p className={style.textCountry}>USA</p>
                <div className={style.heart}>
                  <img src={like} alt={like} />
                </div>
              </div>
            </div>
          </a>
          <a
            href='https://www.britannica.com/place/Los-Angeles-California'
            target={'_blank'}
          >
            <div className={style.showcase3} style={{ textAlign: 'center' }}>
              <div>
                <p className={style.textCountry}>Los Angeles</p>
                <p className={style.textCountry}>USA</p>
                <div className={style.heart}>
                  <img src={like} alt={like} />
                </div>
              </div>
            </div>
          </a>
          <a href='#'>
            <div className={style.showcase4} style={{ textAlign: 'center' }}>
              <div>
                <p className={style.textCountry}>Sydney</p>
                <p className={style.textCountry}>Australia</p>
                <div className={style.heart}>
                  <img src={like} alt={like} />
                </div>
              </div>
            </div>
          </a>
          <a
            href='https://www.britannica.com/place/Sydney-New-South-Wales'
            target={'_blank'}
          >
            <div className={style.showcase5} style={{ textAlign: 'center' }}>
              <div>
                <p className={style.textCountry}>Bangkok</p>
                <p className={style.textCountry}>Thailand</p>
                <div className={style.heart}>
                  <img src={like} alt={like} />
                </div>
              </div>
            </div>
          </a>
          <a
            href='https://www.britannica.com/place/Sao-Paulo-Brazil'
            target={'_blank'}
          >
            <div className={style.showcase6} style={{ textAlign: 'center' }}>
              <div>
                <p className={style.textCountry}>Sao Paulo</p>
                <p className={style.textCountry}>Brazil</p>
                <div className={style.heart}>
                  <img src={like} alt={like} />
                </div>
              </div>
            </div>
          </a>

          {/* <div>
          {trips.length <= 0 ? (
            <h6 className='grid place-items-center h-[360px]'>No Trips</h6>
          ) : (
            tripList
          )}
        </div> */}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};
