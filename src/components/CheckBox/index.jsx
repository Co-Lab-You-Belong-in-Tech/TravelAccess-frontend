import { useState } from 'react';

const CheckBox = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <input
        type='checkbox'
        checked={checked}
        onChange={() => setChecked(!checked)}
        className='mr-2'
      />
    </div>
  );
};

export default CheckBox;
