
import { Link , useParams} from 'react-router-dom';
import style from '../TravelPrep/TravelPrep.module.css'
import like from '../../../public/assets/Icons/Heart filled icon.svg';


const Checklistcards = () => {
	const trips = useParams();

	return (
		<div>
			<Link to={`/${trips.id}/`}>
				<div className={style.showcase}>
					<p className='text-white lg:text-2xl'>Seoul</p>
					<p className='text-white lg:text-2xl'>South Korea</p>
				<div className={style.heart}>
						<img src={like} alt={like} className='like' />
					</div>
			</div>
			</Link>
				{/* <div className={style.showcase}>
					<p className='text-white lg:text-2xl'>Seoul</p>
					<p className='text-white lg:text-2xl'>South Korea</p>
				<div className={style.heart}>
					<img src={like} alt={like} className='like' />
					</div>
				</div> */}
			</div>
	);
}

export default Checklistcards
