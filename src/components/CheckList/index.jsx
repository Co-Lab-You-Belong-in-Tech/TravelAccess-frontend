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
		<div className={style.outerBox}>
			<form onSubmit={handleSubmit}>
				<div className='flex flex-row justify-center mb-5 '>
					<h2 className='font-bold text-xl text-primary'>
						Destination: &nbsp;
					</h2>
					<ChecklistSelect />
					<input
						className='mx-7 bg-green-800 rounded-sm p-1 text-white text-sm'
						type='submit'
						value='Submit'
						
					/>
				</div>
				<div className='grid grid-cols-1 lg:grid-cols-4 gap-2 md:grid-cols-3 border border-emerald-700 p-2'>
					<div className='w-[7.5rem]'>
						<h3 className='font-bold'>Clothing</h3>
						<div className='flex flex-row items-center justify-between border-b'>
							<span>
								<h4>Trouser</h4>
							</span>
							<CheckBox />
						</div>
						<div className='flex flex-row items-center justify-between border-b'>
							<span>
								<h4>Shirts</h4>
							</span>
							<CheckBox />
						</div>
						<div className='flex flex-row items-center justify-between border-b'>
							<span>
								<h4>Jacket</h4>
							</span>
							<CheckBox />
						</div>
						<div className='flex flex-row items-center justify-between border-b'>
							<span>
								<h4>Jeans</h4>
							</span>
							<CheckBox />
						</div>
						<div className='flex flex-row items-center justify-between border-b'>
							<span>
								<h4>Skirts</h4>
							</span>
							<CheckBox />
						</div>
						<div className='flex flex-row items-center justify-between border-b'>
							<span>
								<h4>Dress Pants</h4>
							</span>
							<CheckBox />
						</div>
						<div className='flex flex-row items-center justify-between border-b'>
							<span>
								<h4>One Piece suit</h4>
							</span>
							<CheckBox />
						</div>
					</div>
					<div className='w-[7.5rem]'>
						<h3 className='font-bold'>Accessories</h3>
						<div className='flex flex-row items-center justify-between border-b'>
							<span>
								<h4>Sun Glasses</h4>
							</span>
							<CheckBox />
						</div>
						<div className='flex flex-row items-center justify-between border-b'>
							<span>
								<h4>Watch</h4>
							</span>
							<CheckBox />
						</div>
						<div className='flex flex-row items-center justify-between border-b'>
							<span>
								<h4>Scarf</h4>
							</span>
							<CheckBox />
						</div>
						<div className='flex flex-row items-center justify-between border-b'>
							<span>
								<h4>Jewelery</h4>
							</span>
							<CheckBox />
						</div>
					</div>
					<div className='w-[7.5rem]'>
						<h3 className='font-bold'>Shoes</h3>
						<div className='flex flex-row items-center justify-between border-b'>
							<span>
								<h4>Slippers</h4>
							</span>
							<CheckBox />
						</div>
						<div className='flex flex-row items-center justify-between border-b'>
							<span>
								<h4>Sneakers</h4>
							</span>
							<CheckBox />
						</div>
						<div className='flex flex-row items-center justify-between border-b'>
							<span>
								<h4>Loafers</h4>
							</span>
							<CheckBox />
						</div>
					</div>
					<div className='w-[7.5rem]'>
						<h3 className='font-bold'>Essentials</h3>
						<div className='flex flex-row items-center justify-between border-b'>
							<span>
								<h4>Passport</h4>
							</span>
							<CheckBox />
						</div>
						<div className='flex flex-row items-center justify-between border-b'>
							<span>
								<h4>Visa</h4>
							</span>
							<CheckBox />
						</div>
						<div className='flex flex-row items-center justify-between border-b'>
							<span>
								<h4>Immunizations</h4>
							</span>
							<CheckBox />
						</div>
						<div className='flex flex-row items-center justify-between border-b'>
							<span>
								<h4>Travel Insurance</h4>
							</span>
							<CheckBox />
						</div>
					</div>
					<div className='w-[7.5rem]'>
						<h3 className='font-bold'>Accessories</h3>
						<div className='flex flex-row items-center justify-between border-b'>
							<span>
								<h4>Sun Glasses</h4>
							</span>
							<CheckBox />
						</div>
						<div className='flex flex-row items-center justify-between border-b'>
							<span>
								<h4>Watch</h4>
							</span>
							<CheckBox />
						</div>
						<div className='flex flex-row items-center justify-between border-b'>
							<span>
								<h4>Scarf</h4>
							</span>
							<CheckBox />
						</div>
						<div className='flex flex-row items-center justify-between border-b'>
							<span>
								<h4>Jewelery</h4>
							</span>
							<CheckBox />
						</div>
					</div>
					<div className='w-[7.5rem]'>
						<h3 className='font-bold'>Accessories</h3>
						<div className='flex flex-row items-center justify-between border-b'>
							<span>
								<h4>Sun Glasses</h4>
							</span>
							<CheckBox />
						</div>
						<div className='flex flex-row items-center justify-between border-b'>
							<span>
								<h4>Watch</h4>
							</span>
							<CheckBox />
						</div>
						<div className='flex flex-row items-center justify-between border-b'>
							<span>
								<h4>Scarf</h4>
							</span>
							<CheckBox />
						</div>
						<div className='flex flex-row items-center justify-between border-b'>
							<span>
								<h4>Jewelery</h4>
							</span>
							<CheckBox />
						</div>
					</div>
					<div className='w-[7.5rem]'>
						<h3 className='font-bold'>Accessories</h3>
						<div className='flex flex-row items-center justify-between border-b'>
							<span>
								<h4>Sun Glasses</h4>
							</span>
							<CheckBox />
						</div>
						<div className='flex flex-row items-center justify-between border-b'>
							<span>
								<h4>Watch</h4>
							</span>
							<CheckBox />
						</div>
						<div className='flex flex-row items-center justify-between border-b'>
							<span>
								<h4>Scarf</h4>
							</span>
							<CheckBox />
						</div>
						<div className='flex flex-row items-center justify-between border-b'>
							<span>
								<h4>Jewelery</h4>
							</span>
							<CheckBox />
						</div>
					</div>
					{/* <div>{checklistItems()}</div> */}
				</div>
			</form>
			<div>
				<Guide />
			</div>
		</div>
	);
};

export default CheckList;
