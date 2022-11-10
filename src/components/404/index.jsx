import { FaChevronCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='grid place-items-center h-[100vh]'>
      <div className='flex flex-col items-center text-center'>
        <h1 className='font-extrabold text-[#0F7173]'>404 Not Found</h1>
        <Link className='flex items-center gap-4 text-[#0F7173]' to='/'>
          <span>
            <FaChevronCircleLeft />
          </span>{' '}
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
