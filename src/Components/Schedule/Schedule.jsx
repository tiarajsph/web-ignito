import React, { useRef } from 'react'
import './Schedule.css'
import next from "../../assets/front.png";
import prev from '../../assets/back.png'
import day1 from '../../assets/1.png'
import day2 from '../../assets/2.png'
import day3 from '../../assets/3.png'


const Schedule = () => {


  const slider = useRef();
    let tx = 0;

  const slideForward = () => {
        
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
    
      
  }
  
  const slideBackward = () => {
  
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  
  }
  return (
    <div className='schedule'>
      <img src={next} alt='' className='nextbtn' onClick={slideForward}/>
      <img src={prev} alt='' className='backbtn' onClick={slideBackward}/>
      <div className='slider'>
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className='date'  >
                <img src={day1} alt="" />
                <div>
                  <h3>DAY 1 SCHEDULE</h3>
                  <span>Inauguration</span>
                </div>
              </div>
              <p>09:00 AM - 09:30 AM
Registration and Welcome Kit Distribution

09:30 AM - 10:00 AM
Opening Ceremony

10:00 AM - 11:00 AM
Keynote Address: The Future of Technology and Innovation

11:00 AM - 11:15 AM
Tea/Coffee Break

11:15 AM - 12:15 PM
Panel Discussion: Emerging Trends in Technology

12:15 PM - 01:00 PM
Tech Expo Inauguration

01:00 PM - 02:00 PM
Lunch Break

02:00 PM - 03:00 PM
Workshop: Introduction to AI and Machine Learning

03:00 PM - 03:15 PM
Tea/Coffee Break

03:15 PM - 04:15 PM
Workshop: Building Your First Web Application with React

04:15 PM - 05:00 PM
Tech Talk: Cybersecurity in the Modern World

05:00 PM - 05:30 PM
Closing Remarks</p>
            </div>
          </li>

         
          <li>
            <div className="slide">
              <div className='date'  >
                <img src={day2} alt="" />
                <div>
                  <h3>DAY 2SCHEDULE</h3>
                  <span>Tech Workshops</span>
                </div>
              </div>
              <p>09:00 AM - 10:00 AM
Workshop: Data Science and Analytics

10:00 AM - 11:00 AM
Workshop: Blockchain Technology

11:00 AM - 11:15 AM
Tea/Coffee Break

11:15 AM - 12:15 PM
Workshop: Cloud Computing

12:15 PM - 01:00 PM
Tech Expo: Emerging Startups Showcase

01:00 PM - 02:00 PM
Lunch Break

02:00 PM - 03:00 PM
Workshop: DevOps Practices

03:00 PM - 03:15 PM
Tea/Coffee Break

03:15 PM - 04:15 PM
Workshop: Internet of Things (IoT)

04:15 PM - 05:00 PM
Hackathon Kickoff</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className='date'  >
                <img src={day3} alt="" />
                <div>
                  <h3>DAY 3 SCHEDULE</h3>
                  <span>Hackathon</span>
                </div>
              </div>
              <p>09:00 AM - 10:00 AM
Hackathon Session

10:00 AM - 11:00 AM
Competition: Coding Battle

11:00 AM - 11:15 AM
Tea/Coffee Break

11:15 AM - 12:15 PM
Competition: UX/UI Design Challenge

12:15 PM - 01:00 PM
Hackathon Progress Review

01:00 PM - 02:00 PM
Lunch Break

02:00 PM - 03:00 PM
Competition: Robotics Showdown

03:00 PM - 03:15 PM
Tea/Coffee Break

03:15 PM - 04:15 PM
Hackathon Session

04:15 PM - 05:00 PM
Tech Talk: Quantum Computing</p>
            </div>
          </li>

          

        </ul>
     </div>
      </div>
  )
}

export default Schedule
