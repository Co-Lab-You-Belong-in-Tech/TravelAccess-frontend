import style from './Trip.module.css';
import { MdLocationOn } from 'react-icons/md';
import TripUpcoming from '../TripUpcoming';

export const Trip = () => {
  return (
    <>
      <div className={style.containerHomepage}>
        <div className={style.homepageInnerTabs}>
          <ul className={style.homepageTabs}>
            <li className={style.links}>Flights</li>
            <li className={style.links}>Stay</li>
            <li className={style.links}>Bundles</li>
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
                      id='input-group-1'
                      className={style.homepageInput}
                      placeholder='Enter a city or airport'
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
                      id='input-group-1'
                      className={style.homepageInput}
                      placeholder='Enter your destination'
                    />
                  </div>
                </div>
              </div>
              <div className={style.formDown}>
                {/* <div date-rangepicker className='flex flex-col'> */}
                <div className='flex flex-col'>
                  <label className='mb-2'> Departing</label>
                  <input
                    name='start'
                    type='date'
                    className={style.nextInput}
                    placeholder='select date'
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='mb-2'>Returning</label>
                  <input
                    name='end'
                    type='date'
                    className={style.nextInput}
                    placeholder='select date'
                  />
                  {/* </div> */}
                </div>
                <div className='flex flex-col'>
                  <label className='mb-2'>Travelers</label>
                  <input list="travelers" className={style.nextInput}/>
                  <datalist
                    name='travelers'
                    id='travelers'
                  >
                    <option value='1 Adult'></option>
                    <option value='2 Adult'></option>
                    <option value='3 Adult'></option>
                    <option value='4 Adult'></option>
                    <option value='5 Adult'></option>
                  </datalist>
                </div>
                <div className='flex flex-col'>
                  <label className='mb-2'>Tickets</label>
                  <input list ="tickets" className={style.nextInput}/>
                  <datalist
                    name='tickets'
                    id='tickets'
                  >
                    <option value='Economy'></option>
                    <option value='Business'></option>
                    <option value='First class'></option>
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
      <div className=' border-gray-200 border-b mt-2 '></div>
      <div className={style.upcomingDashboard}>
        <div className='text-primary mb-4 flex justify-between items-center'>
          <h4 className='font-bold'>Upcoming</h4>
          <h4 className={style.upcomimgText}>View All</h4>
        </div>
        <div>
          <TripUpcoming />
        </div>

        <section className='mt-6'>
          <div className='text-primary mb-4 flex justify-between items-center'>
            <h4 className='font-bold'>Discover</h4>
            <h4>View All</h4>
          </div>
        </section>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-2'>
          <div className='flex flex-col justify-start items-start '>
            <img
              src='../../assets/Images/Namsan tower discover 1x.png'
              alt='Namsan Tower'
              className='lg:h-52'
            />
            <p className='-mt-2 ml-2 text'>Namsan Tower</p>
          </div>
          <div>
            <img
              src='../../assets/Images/Bukchon Hanok Village discover 1x.png'
              alt='Bukchon Hanok Village'
              className='lg:h-52'
            />
            <p className='-mt-2 ml-2 text'>Bukchon Hanok Village</p>
          </div>
          <div className={style.bottomImg}>
            <div className='flex flex-col '>
              <img
                src='../../assets/Images/Lotte World discover 1x.png'
                alt='Lotte World'
                className='lg:h-52'
              />
              <p className='-mt-2 ml-2 text'>Lotte World</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </>
  );
};
