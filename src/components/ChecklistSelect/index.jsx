import React from 'react'

const ChecklistSelect = () => {
  return (
		<div className="bg-secondary">
			<select name='trip' id='trip'>
				<option className='text-md' value='Choose trip'>
					{' '}
                    Choose trip
				</option>
				<option className='text-md' value=' Seoul, South Korea'>
					{' '}
					Seoul, South Korea
				</option>
				<option className='text-md' value='London, United Kingdom'>
					{' '}
					London, United Kingdom
				</option>
				<option className='text-md' value='New York City, USA'>
					{' '}
					New York City, USA
				</option>
				<option className='text-md' value='Los Angeles, USA'>
					{' '}
					Los Angeles, USA
				</option>
				<option className='text-md' value='Sydney, Australia'>
					{' '}
					Sydney, Australia
				</option>
				<option className='text-md' value='Bangkok, Thailand'>
					{' '}
					Bangkok, Thailand
				</option>
				<option className='text-md' value='Brazil, South America'>
					{' '}
					Brazil, South America
				</option>
			</select>{' '}
		</div>
	);
}

export default ChecklistSelect
