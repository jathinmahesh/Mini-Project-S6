import React, { useEffect, useState } from 'react'
import M from 'materialize-css';
import { Link } from 'react-router-dom';

export default function Home2() {
    const [record,setRecord]=useState([])
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [address,setAddress]=useState("")
    const [rank,setRank]=useState("")
    const [dob,setDob]=useState("")
    const [education,setEducation]=useState([])
    const [fetchedEducation,setFetchedEducation]=useState([])
    const [internships,setInternships]=useState([])
    const [fetchedInternships,setFetchedInternships]=useState([])
    const [i_desc,set_i_desc]=useState("")

    const [projects,setProjects]=useState([])
    const [fetchedProjects,setFetchedProjects]=useState([])
   const [p_desc,set_p_desc]=useState("")

   const [positions,setPositions]=useState([])
   const [fetchedPositions,setFetchedPositions]=useState([])
   const [position_desc,set_position_desc]=useState("")

   const [hobbies,setHobbies]=useState([])
   const [fetchedHobbies,setFetchedHobbies]=useState([])
   const [hobby,setHobby]=useState("")

   const [achievements,setAchievements]=useState([])
   const [fetchedAchievements,setFetchedAchievements]=useState([])
   const [achievement,setAcheivement]=useState("")

    const [school,setSchool]=useState({
        name:"",
        degree:"",
        year:"",
        cpi:"",

    })

    const [internship,setInternship]=useState({
        title:"",
        year:"",
        description:[]
    })

    const [project,setProject]=useState({
        title:"",
        year:"",
        description:[]
    })

    const [position,setPosition]=useState({
        title:"",
        year:"",
        description:[]
    })

    useEffect(()=>{
        const email_para=localStorage.getItem("email")
     fetch(`http://localhost:4000/getUser/?email=${email}`,
     {
        method:"GET",
        headers:{
            "Content-Type":"application/json"
          },
       
     }
     )
     .then(res=>res.json())
     .then(user=>{
        if(user){
          setRecord(user.user) 
        }
        console.log(user)
        setName(user.user.name)
         setEmail(user.user.email)
         setAddress(user.user.address)
         setPhone(user.user.phone)
         setRank(user.user.rank)
         setDob(user.user.dob)
         setFetchedEducation(user.user.educations)
         setFetchedAchievements(user.user.achievements)
         setFetchedInternships(user.user.internships)
         setFetchedProjects(user.user.projects)
         setFetchedPositions(user.user.positions)
         setFetchedHobbies(user.user.hobbies)
         
        
        console.log(email)
       
     })
     .catch(err=>console.log(err))
    },[email])


    const handleSubmit=()=>{
        localStorage.setItem("name",name)
        localStorage.setItem("email",email)
        localStorage.setItem("phone",phone)
        localStorage.setItem("address",address)
        localStorage.setItem("rank",rank)
        localStorage.setItem("dob",dob)
        localStorage.setItem("educations",JSON.stringify(education))
        localStorage.setItem("fetchedEducations",JSON.stringify(fetchedEducation))

        localStorage.setItem("internships",JSON.stringify(internships))
        localStorage.setItem("fetchedInternships",JSON.stringify(fetchedInternships))

        localStorage.setItem("projects",JSON.stringify(projects))
        localStorage.setItem("fetchedProjects",JSON.stringify(fetchedProjects))

        localStorage.setItem("positions",JSON.stringify(positions))
        localStorage.setItem("fetchedPositions",JSON.stringify(fetchedPositions))

        localStorage.setItem("hobbies",JSON.stringify(hobbies))
        localStorage.setItem("fetchedHobbies",JSON.stringify(fetchedHobbies))

        localStorage.setItem("achievements",JSON.stringify(achievements))
        localStorage.setItem("fetchedAchievements",JSON.stringify(fetchedAchievements))


       
    
         if(!record){ 
          fetch('http://localhost:4000/postUser',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
              },
            body:JSON.stringify({
                name:name,
                email:email,
                phone:phone,
                address:address,
                educations:education,
               rank:rank,
               dob:dob,
               internships:internships,
               projects:projects,
               positions:positions,
               achievements:achievements,
               hobbies:hobbies,
            })
          })
          .then(res=>{
            return res.json()
          })
          .then(data=>{alert(data)
            console.log(data)
          })
          .catch(err=>{
            console.log(err)
            alert('An error occurred while processing your request. Please try again later.');
          })
        
    
        } 
        else{
            fetch('http://localhost:4000/updateUser',{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name:name,
                email:email,
                phone:phone,
                address:address,
               rank:rank,
               dob:dob,
               educations:education,
               internships:internships,
               projects:projects,
               positions:positions,
               achievements:achievements,
               hobbies:hobbies,
                })
    
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data.updatedUser)
                alert("Updated Successfully")
            })
        }
        }
    
    

  return (
    <div className='Container'>
        <div className='heading' style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <h3 >Personal Details</h3>
        </div>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        
        <div class="row">
    <div class="input-field col s6">
      <input value={name} id="name" onChange={(e)=>setName(e.target.value)} type="text" class="validate" />
      <label class="active" for="name">Name</label>
    </div>
    
         <div class="input-field col s6">
        <input value={email} id="email" onChange={(e)=>setEmail(e.target.value)} type="text" class="validate" />
        <label class="active" for="email">Email</label>
    </div>
    
  <div class="input-field col s6">
      <input value={address} id="adress" onChange={(e)=>setAddress(e.target.value)} type="text" class="validate" />
      <label class="active" for="adress">Address</label>
  </div>
  <div class="input-field col s6">
      <input value={phone} id="phone" onChange={(e)=>setPhone(e.target.value)} type="text" class="validate" />
      <label class="active" for="phone">Phone</label>
  </div>
  <div class="input-field col s6">
      <input value={rank} id="rank" onChange={(e)=>setRank(e.target.value)} type="text" class="validate" />
      <label class="active" for="rank">JEE Rank</label>
  </div>
  <div class="input-field col s6">
      <input value={dob} id="dob" onChange={(e)=>setDob(e.target.value)} type="text" class="validate" />
      <label class="active" for="dob">DOB</label>
  </div>
    </div>
    
        </div>

     <div className='heading' style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <h3 >Education Details</h3>
     </div>
     <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"20px"}}>
     {
          
          fetchedEducation && (fetchedEducation.map(item=>{
              
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
             <div className="input-field col s2">
            <input value={item.cpi}  
             type="text"  />
             </div>
            </div> 
          }) )
         
      }
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
             <div className="input-field col s2">
            <input value={item.cpi}  
             type="text"  />
             </div>
            </div> 
          }) )
         
      }
       <div className="row" >
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
    <div className="input-field col s2">
        <input value={school.cpi} id="school-cpi" onChange={(e)=>setSchool(prev=>{
            return {
                ...prev,
                cpi:e.target.value
            }
        })} type="text" className="validate" />
        <label htmlFor="school-cpi">CPI</label>
    </div>
   
</div>
<button className="Button" type="button" onClick={(e) => {
                setEducation(prev => [...prev, school]);
                setSchool({name:"",degree:"",year:"",cpi:""});
            }} name="action">
                ADD
               
            </button>
 </div>
  
 <div className='heading' style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <h3 >Internship Details</h3>
     </div>
     <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
     {
       fetchedInternships && Array.isArray(fetchedInternships) && fetchedInternships.map(item=>{
            return <>
             <div className='row'>
            <div className="input-field col s6">
                 <input value={item.title} id="internship-title"  type="text" className="validate" />
                
             </div>
             <div className="input-field col s6">
                 <input value={item.year} id="internship-year"  type="text" className="validate" />
                
             </div>
            
            </div>
       <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
       {
    item.description.map(item1=>{
     return <div className="input-field col s12" >
     <textarea value={item1}  
               
               id="internship_description"
               className="materialize-textarea" style={{ width: "100% !important" }} />
    
 </div>
    })
   }
       </div>
            
            </>
        })
    }
    {
       internships && Array.isArray(internships) && internships.map(item=>{
            return <>
             <div className='row'>
            <div className="input-field col s6">
                 <input value={item.title} id="internship-title"  type="text" className="validate" />
                
             </div>
             <div className="input-field col s6">
                 <input value={item.year} id="internship-year"  type="text" className="validate" />
                
             </div>
            
            </div>
       <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
       {
    item.description.map(item1=>{
     return <div className="input-field col s12" >
     <textarea value={item1}  
               
               id="internship_description"
               className="materialize-textarea" style={{ width: "100% !important" }} />
    
 </div>
    })
   }
       </div>
            
            </>
        })
    }
     
   <div className='row'>
   <div className="input-field col s6">
        <input value={internship.title} id="internship-title" onChange={(e)=>setInternship(prev=>{
            return {
                ...prev,
                title:e.target.value
            }
        })} type="text" className="validate" />
        <label htmlFor="internship-title">Name of Institute</label>
    </div>
    <div className="input-field col s6">
        <input value={internship.year} id="internship-year" onChange={(e)=>setInternship(prev=>{
            return {
                ...prev,
                year:e.target.value
            }
        })} type="text" className="validate" />
        <label htmlFor="internship-year">Year</label>
    </div>
   
   </div>
   <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>

  
   {
    internship.description.map(item=>{
     return <div className="input-field col s12" >
     <textarea value={item}  
               
               id="internship_description"
               className="materialize-textarea" style={{ width: "100% !important" }} />
    
 </div>
    })
   }
   
   <div className="input-field col s12">
        <textarea value={i_desc}  
                  onChange={(e) => set_i_desc(e.target.value)}
                  id="internship_description"
                  className="materialize-textarea" style={{ width: "100% !important" }}
                  />
        <label className="active" htmlFor="internship_description">Description of the Internship</label>
    </div>

    <div className="row">
    <div className="col s12" style={{ display: 'flex', justifyContent: 'center' }}>
        <button className="Button"
                type="button"
                onClick={(e) => {
                   setInternship(prev=>({
                    ...prev,
                    description:[...prev.description,i_desc]
                   }))
                   set_i_desc("")
                }}
                name="action">
            ADD Desc
           
        </button>
    </div>
</div >

<div className="row">
    <div className="col s12" style={{ display: 'flex', justifyContent: 'center' }}>
        <button className="Button"
                type="button"
                onClick={(e) => {
                   setInternships(prev=>(
                    [...prev,internship]
                   ))
                   setInternship({
                    title:"",
                    year:"",
                    description:[]
                   })
                }}
                name="action">
            ADD 
           
        </button>
    </div>
</div >
</div>

   
   <div>
   </div>  
    </div>

    <div className='heading' style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <h3 >Projects and Courses</h3>
     </div>

     <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
     {
       fetchedProjects && Array.isArray(fetchedProjects) && fetchedProjects.map(item=>{
            return <>
             <div className='row'>
            <div className="input-field col s6">
                 <input value={item.title} id="project-title"  type="text" className="validate" />
                
             </div>
             <div className="input-field col s6">
                 <input value={item.year} id="project-year"  type="text" className="validate" />
                
             </div>
            
            </div>
       <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
       {
    item.description.map(item1=>{
     return <div className="input-field col s12" >
     <textarea value={item1}  
               
               id="item_description"
               className="materialize-textarea" style={{ width: "100% !important" }} />
    
 </div>
    })
   }
       </div>
            
            </>
        })
    }
    {
       projects && Array.isArray(projects) && projects.map(item=>{
            return <>
             <div className='row'>
            <div className="input-field col s6">
                 <input value={item.title} id="project-title"  type="text" className="validate" />
                
             </div>
             <div className="input-field col s6">
                 <input value={item.year} id="project-year"  type="text" className="validate" />
                
             </div>
            
            </div>
       <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
       {
    item.description.map(item1=>{
     return <div className="input-field col s12" >
     <textarea value={item1}  
               
               id="item_description"
               className="materialize-textarea" style={{ width: "100% !important" }} />
    
 </div>
    })
   }
       </div>
            
            </>
        })
    }
     
   <div className='row'>
   <div className="input-field col s6">
        <input value={project.title} id="project-title" onChange={(e)=>setProject(prev=>{
            return {
                ...prev,
                title:e.target.value
            }
        })} type="text" className="validate" />
        <label htmlFor="project-title">Name of Institute</label>
    </div>
    <div className="input-field col s6">
        <input value={project.year} id="project-year" onChange={(e)=>setProject(prev=>{
            return {
                ...prev,
                year:e.target.value
            }
        })} type="text" className="validate" />
        <label htmlFor="project-year">Year</label>
    </div>
   
   </div>
   <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>

  
   {
    project.description.map(item=>{
     return <div className="input-field col s12" >
     <textarea value={item}  
               
               id="project_description"
               className="materialize-textarea" style={{ width: "100% !important" }} />
    
 </div>
    })
   }
   
   <div className="input-field col s12">
        <textarea value={p_desc}  
                  onChange={(e) => set_p_desc(e.target.value)}
                  id="project_description"
                  className="materialize-textarea" style={{ width: "100% !important" }}
                  />
        <label className="active" htmlFor="project_description">Description of the Project / Course</label>
    </div>

    <div className="row">
    <div className="col s12" style={{ display: 'flex', justifyContent: 'center' }}>
        <button className="Button"
                type="button"
                onClick={(e) => {
                   setProject(prev=>({
                    ...prev,
                    description:[...prev.description,p_desc]
                   }))
                   set_p_desc("")
                }}
                name="action">
            ADD Desc
           
        </button>
    </div>
</div >

<div className="row">
    <div className="col s12" style={{ display: 'flex', justifyContent: 'center' }}>
        <button className="Button"
                type="button"
                onClick={(e) => {
                   setProjects(prev=>(
                    [...prev,project]
                   ))
                   setProject({
                    title:"",
                    year:"",
                    description:[]
                   })
                   console.log(projects)
                }}
                name="action">
            ADD 
           
        </button>
    </div>
</div >
</div>

   
   <div>
   </div>  
    </div>

    <div className='heading' style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <h3 >Positions of Responsibility</h3>
     </div>

     <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
     {
       fetchedPositions && Array.isArray(fetchedPositions) && fetchedPositions.map(item=>{
            return <>
             <div className='row'>
            <div className="input-field col s6">
                 <input value={item.title} id="position-title"  type="text" className="validate" />
                
             </div>
             <div className="input-field col s6">
                 <input value={item.year} id="position-year"  type="text" className="validate" />
                
             </div>
            
            </div>
       <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
       {
    item.description.map(item1=>{
     return <div className="input-field col s12" >
     <textarea value={item1}  
               
               id="item_description"
               className="materialize-textarea" style={{ width: "100% !important" }} />
    
 </div>
    })
   }
       </div>
            
            </>
        })
    }
    {
       positions && Array.isArray(positions) && positions.map(item=>{
            return <>
             <div className='row'>
            <div className="input-field col s6">
                 <input value={item.title} id="position-title"  type="text" className="validate" />
                
             </div>
             <div className="input-field col s6">
                 <input value={item.year} id="position-year"  type="text" className="validate" />
                
             </div>
            
            </div>
       <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
       {
    item.description.map(item1=>{
     return <div className="input-field col s12" >
     <textarea value={item1}  
               
               id="item_description"
               className="materialize-textarea" style={{ width: "100% !important" }} />
    
 </div>
    })
   }
       </div>
            
            </>
        })
    }
     
   <div className='row'>
   <div className="input-field col s6">
        <input value={position.title} id="position-title" onChange={(e)=>setPosition(prev=>{
            return {
                ...prev,
                title:e.target.value
            }
        })} type="text" className="validate" />
        <label htmlFor="position-title">Title</label>
    </div>
    <div className="input-field col s6">
        <input value={position.year} id="position-year" onChange={(e)=>setPosition(prev=>{
            return {
                ...prev,
                year:e.target.value
            }
        })} type="text" className="validate" />
        <label htmlFor="position-year">Year</label>
    </div>
   
   </div>
   <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>

  
   {
    position.description.map(item=>{
     return <div className="input-field col s12" >
     <textarea value={item}  
               
               id="position_description"
               className="materialize-textarea" style={{ width: "100% !important" }} />
    
 </div>
    })
   }
   
   <div className="input-field col s12">
        <textarea value={position_desc}  
                  onChange={(e) => set_position_desc(e.target.value)}
                  id="project_description"
                  className="materialize-textarea" style={{ width: "100% !important" }}
                  />
        <label className="active" htmlFor="position_description">Description </label>
    </div>

    <div className="row">
    <div className="col s12" style={{ display: 'flex', justifyContent: 'center' }}>
        <button className="Button"
                type="button"
                onClick={(e) => {
                   setPosition(prev=>({
                    ...prev,
                    description:[...prev.description,position_desc]
                   }))
                   set_position_desc("")
                }}
                name="action">
            ADD Desc
           
        </button>
    </div>
</div >

<div className="row">
    <div className="col s12" style={{ display: 'flex', justifyContent: 'center' }}>
        <button className="Button"
                type="button"
                onClick={(e) => {
                   setPositions(prev=>(
                    [...prev,position]
                   ))
                   setPosition({
                    title:"",
                    year:"",
                    description:[]
                   })
                   console.log(positions)
                }}
                name="action">
            ADD 
           
        </button>
    </div>
</div >
</div>

   
   <div>
   </div>  
    </div>

    <div className='heading' style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <h3 >Achievements</h3>
     </div>
  
  <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
    
  {
        fetchedAchievements && fetchedAchievements.map(item=>{
          return  <div className="input-field col s6" >
            <textarea value={item}  
                         id="achievement_description"
                         className="materialize-textarea" style={{ width: "100% !important" }}
                         />
            </div>
        })
    }
    {
        achievements && achievements.map(item=>{
          return  <div className="input-field col s6" >
            <textarea value={item}  
                         id="achievement_description"
                         className="materialize-textarea" style={{ width: "100% !important" }}
                         />
            </div>
        })
    }
  
     <div className="input-field col s6" >
     <textarea value={achievement}  
                  onChange={(e) => setAcheivement(e.target.value)}
                  id="achievement_description"
                  className="materialize-textarea" style={{ width: "100% !important" }}
                  />
     </div>

     <button 
    className="Button"
    type="button"
    onClick={(e) => {
        setAchievements(prev => {
            return [...prev, achievement];
        });
        setAcheivement(""); // Clear the hobby input after adding it
    }}
    name="action"
>
    ADD 
</button>

        
   
     </div>


    <div className='heading' style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <h3 >Hobbies and Interests</h3>
     </div>
  
  <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
    
  {
        fetchedHobbies && fetchedHobbies.map(item=>{
          return  <div className="input-field col s6" >
            <textarea value={item}  
                         id="hobby_description"
                         className="materialize-textarea" style={{ width: "100% !important" }}
                         />
            </div>
        })
    }

    {
        hobbies && hobbies.map(item=>{
          return  <div className="input-field col s6" >
            <textarea value={item}  
                         id="hobby_description"
                         className="materialize-textarea" style={{ width: "100% !important" }}
                         />
            </div>
        })
    }
  
     <div className="input-field col s6" >
     <textarea value={hobby}  
                  onChange={(e) => setHobby(e.target.value)}
                  id="hobby_description"
                  className="materialize-textarea" style={{ width: "100% !important" }}
                  />
     </div>

     <button 
    className="Button"
    type="button"
    onClick={(e) => {
        setHobbies(prev => {
            return [...prev, hobby];
        });
        setHobby(""); // Clear the hobby input after adding it
    }}
    name="action"
>
    ADD 
</button>

        
   
     </div>

     <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"50px"}}>
       <Link to={'/resume5'}><button onClick={()=>handleSubmit()} className="submit-button">Generate Resume</button></Link> 
       </div>

    </div>
  )
}
