import React from 'react'
import M from 'materialize-css';
import  { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
export default function Home6() {
  
    const [phone,setPhone]=useState("")
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [education,setEducation]=useState([])
    const [experience,setExperience]=useState([])

    const [school,setSchool]=useState({
        name:"",
        degree:"",
        year:"",
      
    })


  return (
    <div className='Container' style={{background:"white"}}>
       <div className='heading' style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <h3 >Personal Details</h3>
        </div>
  <div className='row'>
  <div class="input-field col s3">
      <input value={name} id="name" onChange={(e)=>setName(e.target.value)} type="text" class="validate" />
      <label class="active" for="name">Name</label>
    </div>
    
         <div class="input-field col s3">
        <input value={email} id="email" onChange={(e)=>setEmail(e.target.value)} type="text" class="validate" />
        <label class="active" for="email">Email</label>
    </div>
    <div class="input-field col s3">
      <input value={phone} id="phone" onChange={(e)=>setPhone(e.target.value)} type="text" class="validate" />
      <label class="active" for="phone">Phone</label>
  </div>
  </div>
  <div className='education'  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
    <h4 style={{fontWeight:"bold"}}>Education</h4>
  </div>

  {
          
          education && (education.map(item=>{
              
            return <div className='row' style={{display:"flex",}}>
            <div className="input-field col s4">
            <input value={item.name} 
             type="text"  />
             
             </div>
             <div className="input-field col s2">
            <input value={item.year}  
             type="text"  />
             </div>
             <div className="input-field col s4">
            <input value={item.degree}  
             type="text"  />
             </div>
            
            </div> 
          }) )
         
      }

  <div className='row'>
  <div className="input-field col s4">
        <input value={school.name} id="school-name" onChange={(e)=>setSchool(prev=>{
            return {
                ...prev,
                name:e.target.value
            }
        })} type="text" className="validate" />
        <label htmlFor="school-name">Name of Institute</label>
    </div>
    <div className="input-field col s2">
        <input value={school.year} id="school-year" onChange={(e) => setSchool(prev=>{
            return{
                ...prev,
                year:e.target.value
            }
        })} type="text" className="validate" />
        <label htmlFor="school-year">Year</label>
    </div>
    <div className="input-field col s4">
        <input value={school.degree} id="school-degree"  onChange={(e) => setSchool(prev=>{
            return{
                ...prev,
                degree:e.target.value
            }
        })}  type="text" className="validate" />
        <label htmlFor="school-degree">Degree</label>
    </div>

  </div>
  <div style={{display:"flex",justifyContent:"center"}}> 
  {
    school.name && school.year && school.degree &&
    <button className="Button" type="button" onClick={(e) => {
        setEducation(prev => [...prev, school]);
        setSchool({name:"",degree:"",year:""});
    }} name="action">
        ADD
       
    </button>
  }
 

  </div>
 

  
      
    </div>
  )
}
