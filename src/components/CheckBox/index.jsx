import { useState } from 'react';

const CheckBox = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <input
        type='checkbox'
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    </div>
  );
};

export default CheckBox;
