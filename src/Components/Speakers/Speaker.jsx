import React from 'react'
import './Speaker.css'
import speaker_1 from '../../assets/bill gates.png'
import speaker_2 from '../../assets/elon musk.png'
import speaker_3 from '../../assets/ada.png'
import speaker_4 from '../../assets/grace hopper.png'
import detail from '../../assets/loading.png'

const Speaker = () => {
  return (
      <div className='speaker'>
          <div className='gallery'>
              <img src={speaker_1} alt=''/>
              <img src={speaker_2} alt=''/>
              <img src={speaker_3} alt=''/>
              <img src={speaker_4} alt=''/>
          </div>
          <button className='btn centerbtn'>More Details<img src={detail} alt=''></img></button>
          </div>
  )
}

export default Speaker
