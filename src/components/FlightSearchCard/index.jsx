const FlightSearchCard = () => {
  return (
    <>
      <section className='container mx-auto bg-gray-200 '>
        <ul className='flex justify-around items-center p-2 font-semibold'>
          <li className=' hover:border-black border-b-2'>Flights</li>
          <li className=' hover:border-black border-b-2'>Stay</li>
          <li className=' hover:border-black border-b-2'>Bundle</li>
        </ul>
        <div className=' border-gray-400 border-b-2 mt-2 '></div>
        <div className='flex justify-evenly items-center p-8'>
          <form className='grid gap-8 grid-cols-2 lg:grid-cols-3 lg:gap-x-20 gap-y-0'>
            <div className='flex flex-col'>
              <label className='my-3'>Departing</label>
              <input type='text' className='p-2' />
            </div>
            <div className='flex flex-col'>
              <label className='my-3'>Returning</label>
              <input type='text' className='p-2' />
            </div>
            <div className='flex flex-col'>
              <label className='my-3'>Travelers</label>
              <input type='text' className='p-2' />
            </div>
            <div className='flex flex-col'>
              <label className='my-3'>From</label>
              <input type='text' className='p-2' />
            </div>
            <div className='flex flex-col'>
              <label className='my-3'>To</label>
              <input type='text' className='p-2' />
            </div>
          </form>
        </div>
      </section>
      <div className=' border-gray-400 border-b-2 mt-2 '></div>
    </>
  );
};
