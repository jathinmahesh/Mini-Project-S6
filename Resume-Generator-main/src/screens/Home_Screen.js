import React from 'react'
import Resume1 from '../assets/Resume1.png'
import Resume2 from '../assets/Resume2.png'
import Resume4 from '../assets/Resume4 (1).png'
import Resume5 from '../assets/Resume_iit.png'
import Resume6 from '../assets/MIT.png'
import Resume7 from '../assets/Resume7.1.png'
import Resume8 from '../assets/Resume8.png'
import Resume9 from '../assets/Resume9.png'
import Resume10 from '../assets/Resume6.1.png'


import './Home_Screen.css'
import { Link } from 'react-router-dom'
export default function Home_Screen() {
  return (
    <div >
      <div style={{display:"flex",justifyContent:"center"}}>
      
      </div>
      

      <div className='Templates'>
      <div className='resume_image'>
        <Link to={`/Resume/1`}>
         
          <img src={Resume1}/>
          
       
        </Link>
         
       </div>
      
       <div className='resume_image'>
        <Link to={`/Resume/2`}>
        <img src={Resume2}/>
        </Link>
      
       </div>

      
       <div className='resume_image'>
        <Link to={`/Resume/4`}>
        <img src={Resume4}/>
        </Link>
         
       </div>

       <div className='resume_image'>
        <Link to={`/Resume/5`}>
        <img src={Resume5}/>
        </Link>
         
       </div>
       <div className='resume_image'>
        <Link to={`/Resume/6`}>
        <img src={Resume6}/>
        </Link>
         
       </div>

       <div className='resume_image'>
        <Link to={`/Resume/7`}>
        <img src={Resume7}/>
        </Link>
         
       </div>
       <div className='resume_image'>
        <Link to={`/Resume/8`}>
        <img src={Resume8}/>
        </Link>
         
       </div>

       <div className='resume_image'>
        <Link to={`/Resume/9`}>
        <img src={Resume9}/>
        </Link>
         
       </div>
      

       <div className='resume_image'>
        <Link to={`/Resume/10`}>
        <img src={Resume10}/>
        </Link>
         
       </div>

      </div>
       
    </div>
  )
}
