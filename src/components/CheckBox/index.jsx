import { useState } from 'react';

const CheckBox = () => {
  const [checked, setIsChecked] = useState(false);

  return (
    <div>
      <input
        type='checkbox'
        checked={checked}
        onChange={() => {
          setIsChecked(!checked);
        }}
        className='mr-2'
      />
    </div>
  );
};

export default CheckBox;
