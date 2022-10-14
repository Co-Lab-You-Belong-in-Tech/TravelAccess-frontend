import style from './Trip.module.css';
import { BsArrowLeftRight } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';

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
				<section className='p-1 lg:p-6'>
					<div className='flex'>
						<h4>One Way</h4>
						<h4 className='font-bold ml-4'>Roundtrip</h4>
					</div>
					<div>
						<form>
							<div className={style.formUp}>
								<div className='flex flex-col location'>
									<label
										htmlFor='input-group-1'
										className='block mb-2 text-sm font-medium text-gray-900'>
										From
									</label>
									<div className='relative mb-6'>
										<div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
											<MdLocationOn />
										</div>
										<input
											type='text'
											id='input-group-1'
											className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5'
											placeholder='Enter a city or airport'
										/>
									</div>
								</div>

								<div className='flex flex-col'>
									<label
										htmlFor='input-group-1'
										className='block mb-2 text-sm font-medium text-gray-900'>
										To
									</label>
									<div className='relative mb-6'>
										<div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
											<MdLocationOn />
										</div>
										<input
											type='text'
											id='input-group-1'
											className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5'
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
										className='p-1'
										placeholder='select date'
									/>
								</div>
								<div className='flex flex-col'>
									<label className='mb-2'>Returning</label>
									<input
										name='end'
										type='date'
										className='p-1'
										placeholder='select date'
									/>
									{/* </div> */}
								</div>
								<div className='flex flex-col'>
									<label className='mb-2'>Travelers</label>
									<select
										className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5'
										name='travelers'
										id='travelers'>
										<option value='1'>1 Adult</option>
										<option value='2'>2</option>
										<option value='3'>3</option>
										<option value='4'>4</option>
										<option value='5'>5</option>
									</select>
								</div>
								<div className='flex flex-col'>
									<label className='mb-2'>Tickets</label>
									<select
										className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5'
										name='travelers'
										id='travelers'>
										<option value='1'>Economy</option>
										<option value='2'>Business</option>
										<option value='3'>First class</option>
									</select>
								</div>
							</div>
							<div className={style.buttonContainer}>
								<button
									type='submit'
									className='rounded-full border-black border p-1 w-44  bg-purple-800 text-white border-none'>
									Search
								</button>
							</div>
						</form>
					</div>
				</section>
			</div>
			<div>
				<div>
					<h5 className='text-gray-900 text-lg leading-tight font-medium mb-2'>
						Upcoming
					</h5>
					<img
						src='https://via.placeholder.com/544x228'
						alt='placeholder picture 1'
					/>
				</div>
			</div>
			<div>
				<div className='flex justify-between items-center text-lg text-gray-900 font-medium mb-2 '>
					<h3>Discover</h3>
					<h3>View All</h3>
				</div>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-2 justify-center'>
					<img
						src='https://via.placeholder.com/352x162'
						alt='placeholder picture 1'
					/>
					<img
						src='https://via.placeholder.com/352x162'
						alt='placeholder picture 1'
					/>
					<img
						src='https://via.placeholder.com/352x162'
						alt='placeholder picture 1'
					/>
				</div>
				<div className='flex flex-row justify-around'></div>
			</div>
		</div>
	);
};
