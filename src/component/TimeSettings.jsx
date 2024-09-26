import React, { useState } from 'react'
import ToggleButton from './ToggleButton.jsx';
import '../styles/Time.css'

function TimeSettings() {
  const [selectedIndex, setSelectedIndex] = useState(0); 

  const handleItemClick = (index) => {
    setSelectedIndex(index);
  };

  const getItemClass = (index) => {
    return selectedIndex === index ? 'li-selected' : 'li-normal';
  };

  function getGMTOffset() {
    const offset = new Date().getTimezoneOffset(); // In minutes
    const sign = offset <= 0 ? "+" : "-";
    const hours = String(Math.abs(offset) / 60).padStart(2, '0');
    const minutes = String(Math.abs(offset) % 60).padStart(2, '0');
    return `GMT ${sign}${hours}:${minutes}`;
  }
  
  function getTimeZoneName() {
    return new Intl.DateTimeFormat('en-US',{ timeZoneName: 'long', year: undefined, day: undefined, month: undefined }).formatToParts().find(part => part.type === 'timeZoneName').value;
  }
  
  function getTimeZoneInfo() {
    const gmtOffset = getGMTOffset();
    const timeZoneName = getTimeZoneName();
    return `${gmtOffset}, ${timeZoneName}`;
  }
  
  return (
    <div className='main-content'>
      <div className='time-settings'>
        Time Settings
      </div>
      <center>
        <div className='time-settings-list-items'>
            <ul>
                <li className={getItemClass(0)} 
                    onClick={() => handleItemClick(0)}>
                    <div className='list-values'>
                      <div>Auto Attach</div>
                      <div><ToggleButton/></div>
                    </div>
                </li>
                <li className={getItemClass(1)} 
                    onClick={() => handleItemClick(1)}>
                    <div className='list-values'>
                      <div>Time Zone</div>
                      <div>{getTimeZoneInfo()}</div>
                    </div>
                </li>
                <li className={getItemClass(2)} 
                    onClick={() => handleItemClick(2)}>
                    <div className='list-values'>
                      <div>Daylight Saving</div>
                      <div><ToggleButton/></div>
                    </div>
                </li>
                <li className={getItemClass(3)} 
                    onClick={() => handleItemClick(3)}>
                    <div className='list-values'>
                      <div>24 Hours(Checking for errors)</div>
                      <div><ToggleButton/></div>
                    </div>
                </li>
            </ul>
        </div>
      </center>
    </div>
  )
}

export default TimeSettings
