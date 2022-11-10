import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchChecklist } from '../../features/checklist';
import CheckBox from '../CheckBox';
import style from './CheckList.module.css';
import { useSelector } from 'react-redux';
import CheckListItem from '../CheckListItem';
import print from '../../helper/print';
import Guide from '../Guide';
import ChecklistSelect from '../ChecklistSelect';
import printIcon from '/assets/Icons/Print icon.svg';
import download from '/assets/Icons/Download icon.svg';
import share from '/assets/Icons/Share icon.svg';
import Footer from '../Footer/index'

const CheckList = () => {
  const { checklist, trips } = useSelector(state => state);
  print(trips.trips);
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    alert('Form Submitted');
  };
  //  const checklistData = transform(checklist);
  //  console.log(checklistData);

  //  useEffect(() => {
  //    dispatch(fetchChecklist());
  //  }, [dispatch]);

  //  const checklistItems = checklist.entries( => {
  //    return <h3>{item[0]}</h3>;
  // });
  // const checklistItems = () => {
  //   for (const [key, value] of Object.entries(checklist)) {
  //     return <h3>{key}</h3>;
  //   }
  // };

  // const displayCheckList = () => {
  //   checklist.map(item => {
  //     <CheckListItem checklist={item} />;
  //   });
  // };

  return (
		<>
			<div className={style.outerBox}>
				<form onSubmit={handleSubmit}>
					<div className='flex flex-row mb-5 '>
						{/* <h2 className='font-bold text-xl text-primary'>
						Destination: &nbsp;
					</h2> */}
						<ChecklistSelect />
						<input
							className='mx-7 bg-green-800 rounded-sm p-1 text-white text-sm'
							type='submit'
							value='Submit'
						/>
					</div>
					<div>
						<div className={style.checklistIcons}>
							<img src={printIcon} alt={printIcon} className='mr-1 lg:mr-3' />
							<img src={download} alt={download} className=' mr-1 lg:mr-3' />
							<img src={share} alt={share} className='mr-1 lg:mr-3' />
							<div>
								<h4 className='text-primary'>Edit</h4>
							</div>
						</div>
					</div>
					<div className='grid grid-cols-1 lg:grid-cols-2 border border-emerald-700 p-2 text-xs '>
						<div className='flex flex-col '>
							<h3 className='font-bold ml-3'>Clothing</h3>
							<div className='flex flex-row items-center ml-3'>
								<CheckBox />
								<span className='border-b-2 w-full lg:w-2/3  pt-1'>
									<h4>Shirts</h4>
								</span>
							</div>
							<div className='flex flex-row items-center ml-3'>
								<CheckBox />
								<span className='border-b-2  pt-1 w-full  lg:w-2/3'>
									<h4>Dress</h4>
								</span>
							</div>
							<div className='flex flex-row items-center ml-3'>
								<CheckBox />
								<span className='border-b-2  pt-1 w-full  lg:w-2/3'>
									<h4>Jacket</h4>
								</span>
							</div>
							<div className='flex flex-row items-center ml-3'>
								<CheckBox />
								<span className='border-b-2  pt-1 w-full lg:w-2/3'>
									<h4>Jeans</h4>
								</span>
							</div>
							<div className='flex flex-row items-center ml-3'>
								<CheckBox />
								<span className='border-b-2  pt-1 w-full  lg:w-2/3'>
									<h4>Skirts</h4>
								</span>
							</div>
							<div className='flex flex-row items-center ml-3'>
								<CheckBox />
								<span className='border-b-2  pt-1 w-full lg:w-2/3'>
									<h4>Dress Pants</h4>
								</span>
							</div>
							<div>
								<h3 className='font-bold ml-3'>Accessories</h3>
								<div className='flex flex-row items-center ml-3'>
									<CheckBox />
									<span className='border-b-2  pt-1 w-full lg:w-2/3'>
										<h4>Sunglasses</h4>
									</span>
								</div>
								<div className='flex flex-row items-center ml-3'>
									<CheckBox />
									<span className='border-b-2  pt-1  w-full  lg:w-2/3'>
										<h4>Watch</h4>
									</span>
								</div>
								<div className='flex flex-row items-center ml-3'>
									<CheckBox />
									<span className='border-b-2  pt-1 w-full  lg:w-2/3'>
										<h4>Jewerly</h4>
									</span>
								</div>
								<div className='flex flex-row items-center ml-3'>
									<CheckBox />
									<span className='border-b-2  pt-1 w-full  lg:w-2/3'>
										<h4>Belts</h4>
									</span>
								</div>
								<div className='flex flex-row items-center ml-3'>
									<CheckBox />
									<span className='border-b-2  pt-1 w-full  lg:w-2/3'>
										<h4>Scarf</h4>
									</span>
								</div>
							</div>
							<div>
								<h3 className='font-bold ml-3'>Shoes</h3>
								<div className='flex flex-row items-center ml-3'>
									<CheckBox />
									<span className='border-b-2  pt-1 w-full lg:w-2/3'>
										<h4>Sneakers</h4>
									</span>
								</div>
								<div className='flex flex-row items-center ml-3'>
									<CheckBox />
									<span className='border-b-2  pt-1 w-full lg:w-2/3'>
										<h4>Boots</h4>
									</span>
								</div>
							</div>
							<div>
								<h3 className='font-bold ml-3'>Toiletries</h3>
								<div className='flex flex-row items-center ml-3'>
									<CheckBox />
									<span className='border-b-2  pt-1 w-full lg:w-2/3'>
										<h4>Soap</h4>
									</span>
								</div>
								<div className='flex flex-row items-center ml-3'>
									<CheckBox />
									<span className='border-b-2  pt-1 w-full lg:w-2/3'>
										<h4>Shampoo</h4>
									</span>
								</div>
								<div className='flex flex-row items-center ml-3'>
									<CheckBox />
									<span className='border-b-2  pt-1 w-full lg:w-2/3'>
										<h4>Body Wash</h4>
									</span>
								</div>
								<div className='flex flex-row items-center ml-3 '>
									<CheckBox />
									<span className='border-b-2  pt-1 w-full lg:w-2/3'>
										<h4>Deodorant</h4>
									</span>
								</div>
								<div className='flex flex-row items-center ml-3'>
									<CheckBox />
									<span className='border-b-2  pt-1 w-full lg:w-2/3'>
										<h4>Hand/Body Lotion</h4>
									</span>
								</div>
							</div>
						</div>
						<div className='flex flex-col lg:border-l-2 '>
							<h3 className='font-bold ml-3'>Electronics</h3>
							<div className='flex flex-row items-center ml-3'>
								<CheckBox />
								<span className='border-b-2 w-full lg:w-2/3 pt-1'>
									<h4>Laptop</h4>
								</span>
							</div>
							<div className='flex flex-row items-center ml-3'>
								<CheckBox />
								<span className='border-b-2 w-full  lg:w-2/3 pt-1'>
									<h4>Camera</h4>
								</span>
							</div>
							<div className='flex flex-row items-center ml-3'>
								<CheckBox />
								<span className='border-b-2 w-full  lg:w-2/3 pt-1'>
									<h4>Travel Adapter</h4>
								</span>
							</div>
							<div className='flex flex-row items-center ml-3'>
								<CheckBox />
								<span className='border-b-2 w-full lg:w-2/3  pt-1'>
									<h4>Charger</h4>
								</span>
							</div>

							<div>
								<h3 className='font-bold ml-3'>Personal Comfort</h3>
								<div className='flex flex-row items-center ml-3'>
									<CheckBox />
									<span className='border-b-2 w-full lg:w-2/3  pt-1'>
										<h4>Neck Pillow</h4>
									</span>
								</div>
								<div className='flex flex-row items-center ml-3'>
									<CheckBox />
									<span className='border-b-2 w-full  lg:w-2/3  pt-1'>
										<h4>Eye Mask</h4>
									</span>
								</div>
								<div className='flex flex-row items-center ml-3'>
									<CheckBox />
									<span className='border-b-2 w-full  lg:w-2/3  pt-1'>
										<h4>Books</h4>
									</span>
								</div>
								<div className='flex flex-row items-center ml-3'>
									<CheckBox />
									<span className='border-b-2 w-full  lg:w-2/3  pt-1'>
										<h4>Ear Phones</h4>
									</span>
								</div>
							</div>
							<div>
								<h3 className='font-bold ml-3'>Essentials</h3>
								<div className='flex flex-row items-center ml-3'>
									<CheckBox />
									<span className='border-b-2 w-full lg:w-2/3  pt-1'>
										<h4>Passport</h4>
									</span>
								</div>
								<div className='flex flex-row items-center ml-3'>
									<CheckBox />
									<span className='border-b-2 w-full lg:w-2/3  pt-1'>
										<h4>Visa</h4>
									</span>
								</div>
								<div className='flex flex-row items-center ml-3'>
									<CheckBox />
									<span className='border-b-2 w-full lg:w-2/3  pt-1'>
										<h4>Immunizations</h4>
									</span>
								</div>
								<div className='flex flex-row items-center ml-3'>
									<CheckBox />
									<span className='border-b-2 w-full lg:w-2/3  pt-1'>
										<h4>Notify Credit Card Companies</h4>
									</span>
								</div>
								<div className='flex flex-row items-center ml-3'>
									<CheckBox />
									<span className='border-b-2 w-full lg:w-2/3  pt-1'>
										<h4>Contact Cell Phone Provider</h4>
									</span>
								</div>
								<div className='flex flex-row items-center ml-3'>
									<CheckBox />
									<span className='border-b-2 w-full lg:w-2/3  pt-1'>
										<h4>Check Covid-19 doc requirements</h4>
									</span>
								</div>
								<div className='flex flex-row items-center ml-3'>
									<CheckBox />
									<span className='border-b-2 w-full lg:w-2/3  pt-1'>
										<h4>Buy Travel Insurance</h4>
									</span>
								</div>
							</div>
						</div>
					</div>
				</form>
				<div className='mt-4 lg:mt-0'>
					<Guide />
				</div>
			</div>
			<div>
				<Footer />
			</div>
		</>
	);
};

export default CheckList;
