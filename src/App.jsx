import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Events from './Components/Events/Events'
import Title from './Components/Title/Title'
import Speaker from './Components/Speakers/Speaker'
import Schedule from './Components/Schedule/Schedule'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
     
      <div className='container'>
      <Title subtitle = 'Events' title = 'Games and Competitions' />
        <Events />
        <Title subtitle = 'Speakers' title = 'Conference Speakers' />
        <Speaker />
        <Title subtitle='Schedule' title='Days and Itenary' />
        <Schedule />
        
        <Title subtitle='contact us' title='Reach out for queries' />
        <Contact />
        <Footer/>
      </div>
      
    </div>
  )
}

export default App
