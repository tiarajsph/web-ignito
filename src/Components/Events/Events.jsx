import React from 'react';
import './Events.css';
import event_1 from '../../assets/treasure.png';
import event_2 from '../../assets/battle.png';
import event_3 from '../../assets/hourglass.png';
import event_icon_1 from '../../assets/event_icon.png';

const Events = () => {
  return (
    <div className='events' >
      <div className='event'>
        <img src={event_1} alt='Treasure Hunt Event' />
        <div className='caption'>
          <img src={event_icon_1} alt='Treasure Hunt Icon' />
          <p>Treasure Hunt</p>
        </div>
      </div>

      <div className='event'>
        <img src={event_2} alt='Battle of Codes Event' />
        <div className='caption'>
          <img src={event_icon_1} alt='Battle of Codes Icon' />
          <p>Battle of Codes</p>
        </div>
      </div>

      <div className='event'>
        <img src={event_3} alt='Race Against Time Event' />
        <div className='caption'>
          <img src={event_icon_1} alt='Race Against Time Icon' />
          <p>Race Against Time</p>
        </div>
      </div>
    </div>
  );
}

export default Events;
