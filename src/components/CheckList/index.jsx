import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchChecklist } from '../../features/checklist';
import CheckBox from '../CheckBox';
import style from './CheckList.module.css';
import { useSelector } from 'react-redux';
import { transform } from '../../helper/ObjectTransform';

const CheckList = () => {
  const checklist = useSelector(state => state.checklists);
  const dispatch = useDispatch();
  console.log(checklist);

  useEffect(() => {
    dispatch(fetchChecklist());
  }, [dispatch]);

  return (
    <div className={style.outerBox}>
      <div className='flex flex-row justify-center bg-[url("../../../src/ssets/UI Elements/Checlist_box and_line.svg")] '>
        <h2 className='font-extrabold text-xl'>Destination: &nbsp;</h2>
        <span className='text-lg'> Seoul, South Korea.</span>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-2 md:grid-cols-3 '>
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
      </div>
    </div>
  );
};

export default CheckList;
