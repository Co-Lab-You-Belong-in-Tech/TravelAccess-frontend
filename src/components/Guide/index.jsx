import React from 'react'
import traveller from '/assets/Images/Airport pic for checklist page 1x.png'
import style from '../Guide/guide.module.css'

const Guide = () => {
  return (
		<div>
			<div className={style.guideContainer}>
				<h2 className='text-primary mb-7'>Guide</h2>
				<h3 className='font-bold'>Travelling through the heart of Seoul</h3>
				<p className='leading-loose'>
					South Korea is known for the food, music, and attractions. Before you
					jet off, let's get ready for takeoff.
				</p>{' '}
				<p className='leading-loose'>
					In every city in Seoul, you can be sure to find all types of food that
					will cater to your taste. For those that enjoy shopping, be prepared
					to shop until you drop. There are many shopping centers, but the best
					prices can be found in the subway station areas located in Myeondong,
					Gangnam, and more.
				</p>
				<p className='leading-loose'>
					{' '}
					For all of your currency exchange purposes, they can be found at many
					tores within these shopping areas as well.
				</p>
				<p className='leading-loose'>
					When it comes to safety, rest assured you will feel safe. Be sure to
					download Kakao Maps and Kakao taxi ahead of time to best guide you
					with directions and getting to places.
				</p>
				<a
					href='https://en.wikipedia.org/wiki/Seoul'
					className='text-blue-400 text-sm'>
					For more resources, click here
				</a>
				<div>
					<img src={traveller} alt={traveller} />
				</div>
			</div>
		</div>
	);
}

export default Guide
