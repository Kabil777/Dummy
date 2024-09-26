import React, { useState } from 'react';
import '../styles/Time.css'
const ToggleButton = () => {
  const [toggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!toggled);
  };

  return (
    <div>
       <button className={`toggle-button ${toggled ? "toggled":""}`}
                onClick={handleToggle}>
        <div className='thumb'></div>
       </button>
    </div>
  );
};



export default ToggleButton;
