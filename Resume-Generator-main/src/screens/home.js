import React, { useEffect, useState } from 'react';
import '../App.css'
import M from 'materialize-css';
import './home.css'
import { Link } from 'react-router-dom';

export default function Home() {

  
    const [record,setRecord]=useState([])
    const [name,setName]=useState("")
    const [role,setRole]=useState("")
    const [phone,setPhone]=useState("")
    let [email,setEmail]=useState("")
    const [adress,setAdress]=useState("")
    const [achievements,setAchievements]=useState([])
    const [skills,setSkills]=useState([])
    const [techskills,setTechskills]=useState('')  
    const [language,setlanguage]=useState("")
    const [addLanguage,setAddLanguage]=useState([])
    const [keyskills,setKeyskills]=useState([])
    const [about,setAbout]=useState("")
    const [education,setEducation]=useState([])
    const [experience,setExperience]=useState([])
    const [References,setReferences]=useState([])
    const [image,setImage]=useState("")

 

  const [url,setUrl]=useState(undefined)

  const [fetchedSkills,setFetchedSkills]=useState([]) 
  const [fetchedLanguage,setfetchedLanguage]=useState([])
  const [fetchedEducation,setFetchedEducation]=useState([])
  const [fetchedExperience,setFetchedExperience]=useState([])
  const [fetchedReferences,setFetchedReferences]=useState([])


    const [ref_data,set_ref_data]=useState({
        name:"",
        phone:"",
        email:"",
        job_position:"",
        comp_name:""
    })

    const [company,setCompany]=useState({
        name:"",
        date:"",
        title:"",
        description:""
    })

    const [school,setSchool]=useState({
        name:"",
        degree:"",
        year:""

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
         setAdress(user.user.address)
         setFetchedSkills(user.user.skills)
         setfetchedLanguage(user.user.languages)
         setFetchedEducation(user.user.educations)
         setFetchedExperience(user.user.experiences)
         setFetchedReferences(user.user.references)
         setPhone(user.user.phone)
         setAbout(user.user.about)
         setRole(user.user.role)
        console.log(email)
        console.log(user)
     })
     .catch(err=>console.log(err))
    },[email])

    const handleSubmit=()=>{
        localStorage.setItem("name",name)
        localStorage.setItem("phone",phone)
        localStorage.setItem("email",email)
        localStorage.setItem("address",adress)
        localStorage.setItem("skills",JSON.stringify(skills))
        localStorage.setItem("fetchedSkills",JSON.stringify(fetchedSkills))
        localStorage.setItem("languages",JSON.stringify(addLanguage))
        localStorage.setItem("fetchedLanguages",JSON.stringify(fetchedLanguage))
        localStorage.setItem("education",JSON.stringify(education))
        localStorage.setItem("fetchedEducations",JSON.stringify(fetchedEducation))
        localStorage.setItem("about",about)
        localStorage.setItem("experiences",JSON.stringify(experience)) 
        localStorage.setItem("fetchedExperiences",JSON.stringify(fetchedExperience))
        localStorage.setItem("references",JSON.stringify(References))
        localStorage.setItem("fetchedReferences",JSON.stringify(fetchedReferences))
        localStorage.setItem("role",role)
      if(record){
        fetch('http://localhost:4000/updateUser',{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:name,
                email:email,
                phone:phone,
                address:adress,
                about:about,
                role:role,
                references:References,
              educations:education,
                languages:addLanguage,
                experiences:experience,
                skills:skills
            })

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data.updatedUser)
            alert("Updated Successfully")
        })
      }
      else{

      
      fetch('http://localhost:4000/postUser',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
          },
        body:JSON.stringify({
            name:name,
            email:email,
            phone:phone,
            address:adress,
            about:about,
            role:role,
            references:References,
          educations:education,
            languages:addLanguage,
            experiences:experience,
            skills:skills
        })
      })
      .then(res=>{
        return res.json()
      })
      .then(data=>alert(data))
      .catch(err=>{
        console.log(err)
        alert('An error occurred while processing your request. Please try again later.');
      })
    }

        console.log(References)
    }

    useEffect(()=>{
    M.updateTextFields()
    },[])

    const updatePic = (file) => {
        setImage(file)
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "insta_clone");
        data.append('cloud_name', 'den8dfm4y');

        fetch('https://api.cloudinary.com/v1_1/den8dfm4y/image/upload', {
        method: "POST",
        body: data
    }).then(res => res.json())
      .then(data => {
          setUrl(data.url); // Update url state
          console.log(data.url); // Log the updated url
         localStorage.setItem("image",url)
    })
    .catch(err=>console.log(err))
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
      <input value={adress} id="adress" onChange={(e)=>setAdress(e.target.value)} type="text" class="validate" />
      <label class="active" for="adress">Address</label>
  </div>
  <div class="input-field col s6">
      <input value={phone} id="phone" onChange={(e)=>setPhone(e.target.value)} type="text" class="validate" />
      <label class="active" for="phone">Phone</label>
  </div>
    </div>
        </div>
        
      
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
     <div class="input-field col s6">
      <input value={role} id="role" onChange={(e)=>setRole(e.target.value)} type="text" class="validate" />
      <label class="active" for="role">Role</label>
    </div>
     </div>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    
    
   
    <div className="file-field input-field">
      <div className="btn #1976d2 blue darken-2">
        <span>Upload Image</span>
        <input type="file" onChange={(e)=>updatePic(e.target.files[0])}/>
      </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text" />
      </div>
    </div>
    </div>

    <div className="row">
                <div className="col s6">
                    <div className="Language">
                    {fetchedSkills.map((skill, index) => (
                            <div key={index} className="input-field col s12">
                                <input  value={skill} readOnly />
                               
                            </div>
                        ))}

                        {skills.map((skill, index) => (
                            <div key={index} className="input-field col s12">
                                <input  value={skill} readOnly />
                               
                            </div>
                        ))}
                        <div className="input-field col s12">
                            <input  value={techskills} id="tech-skills" onChange={(e) => setTechskills(e.target.value)} type="text" className="validate" />
                            <label className="active" htmlFor="tech-skills">Tech Skills</label>
                            <button className="Button" type="button" onClick={() => {
                                setSkills(prev => [...prev, techskills]);
                                setTechskills("");
                            }} name="action">
                                ADD
                                
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col s6">
                    <div className="Language">
                    {fetchedLanguage.map((lang, index) => (
                            <div key={index} className="input-field col s12">
                                <input value={lang} readOnly />
                                
                            </div>
                        ))}
                        {addLanguage.map((lang, index) => (
                            <div key={index} className="input-field col s12">
                                <input value={lang} readOnly />
                                
                            </div>
                        ))}
                        <div className="input-field col s12">
                            <input value={language} id="language" onChange={(e) => setlanguage(e.target.value)} type="text" className="validate" />
                            <label className="active" htmlFor="language">Language</label>
                            <button className="Button" type="button" onClick={() => {
                                setAddLanguage(prev => [...prev, language]);
                                setlanguage("");
                            }} name="action">
                                ADD
                                
                            </button>
                        </div>
                    </div>
                </div>
            </div >
            <div className='heading' style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"20px"}}>
            <h3 >Educational Details</h3>
            </div>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"20px"}}>

        {
          
          fetchedEducation && (fetchedEducation.map(item=>{
              
            return <div className='row'>
            <div className="input-field col s4">
            <input value={item.name} 
             type="text"  />
             
             </div>
             <div className="input-field col s4">
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

        {
          
          education && (education.map(item=>{
              
            return <div className='row'>
            <div className="input-field col s4">
            <input value={item.name} 
             type="text"  />
             
             </div>
             <div className="input-field col s4">
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
      
      
    
        <div className="row">
    <div className="input-field col s4">
        <input value={school.name} id="school-name" onChange={(e)=>setSchool(prev=>{
            return {
                ...prev,
                name:e.target.value
            }
        })} type="text" className="validate" />
        <label htmlFor="school-name">Name of Institute</label>
    </div>
    <div className="input-field col s4">
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
<button className="Button" type="button" onClick={(e) => {
                setEducation(prev => [...prev, school]);
                setSchool({name:"",degree:"",year:""});
            }} name="action">
                ADD
               
            </button>
        </div>
        <div className='heading' style={{display:"flex",justifyContent:"center",marginTop:"50px"}}>
        <h3>Work Experiences</h3>
        </div>

  <div style={{display:"flex",flexDirection:"column",justifyContent:"center",marginTop:"20px",marginTop:"30px"}}>
    
  {
    fetchedExperience && fetchedExperience.map((item, index) => (
        <div key={index}>
            <div style={{display:"flex",flexDirection:"column",alignItems:'center',justifyContent:"center"}}>
            <div className='row'>
                <div className="input-field col s4">
                    <input value={item.name}  
                           type="text"
                           className="validate"
                           readOnly />
                    <label className="active" htmlFor={`company-name-${index}`}>Company Name</label>
                </div>
                <div className="input-field col s4">
                    <input value={item.date}  
                           type="text"
                           className="validate"
                           readOnly />
                    <label className="active" htmlFor={`company-date-${index}`}>Date</label>
                </div>
                <div className="input-field col s4">
                    <input value={item.title} 
                           type="text"
                           className="validate"
                           readOnly />
                    <label className="active" htmlFor={`job-title-${index}`}>Job Title</label>
                </div>
            </div>

          
                <div className="input-field col s12">
                    <textarea value={item.description}
                              className="materialize-textarea"
                              readOnly></textarea>
                    <label className="active" htmlFor={`description-${index}`}>Description</label>
                </div>
            </div>
        </div>
    ))
}


{
    experience && experience.map((item, index) => (
        <div key={index}>
            <div style={{display:"flex",flexDirection:"column",alignItems:'center',justifyContent:"center"}}>
            <div className='row'>
                <div className="input-field col s4">
                    <input value={item.name}  
                           type="text"
                           className="validate"
                           readOnly />
                    <label className="active" htmlFor={`company-name-${index}`}>Company Name</label>
                </div>
                <div className="input-field col s4">
                    <input value={item.date}  
                           type="text"
                           className="validate"
                           readOnly />
                    <label className="active" htmlFor={`company-date-${index}`}>Date</label>
                </div>
                <div className="input-field col s4">
                    <input value={item.title} 
                           type="text"
                           className="validate"
                           readOnly />
                    <label className="active" htmlFor={`job-title-${index}`}>Job Title</label>
                </div>
            </div>

          
                <div className="input-field col s12">
                    <textarea value={item.description}
                              className="materialize-textarea"
                              readOnly></textarea>
                    <label className="active" htmlFor={`description-${index}`}>Description</label>
                </div>
            </div>
        </div>
    ))
}
<div style={{display:"flex",flexDirection:"column",alignItems:'center',justifyContent:"center"}}>


<div className='row'>
    <div className="input-field col s4">
        <input value={company.name} 
               id="comp_name"
               onChange={(e) => setCompany(prev => ({ ...prev, name: e.target.value }))}
               type="text"
               className="validate" />
        <label className="active" htmlFor="comp_name">Company Name</label>
    </div>

    <div className="input-field col s4">
        <input value={company.date} 
               id="comp_date"
               onChange={(e) => setCompany(prev => ({ ...prev, date: e.target.value }))}
               type="text"
               className="validate" />
        <label className="active" htmlFor="comp_date">Date</label>
    </div>

    <div className="input-field col s4">
        <input value={company.title} 
               id="job_title"
               onChange={(e) => setCompany(prev => ({ ...prev, title: e.target.value }))}
               type="text"
               className="validate" />
        <label className="active" htmlFor="job_title">Job Title</label>
    </div>
    
</div>






<div className="input-field col s12">
        <textarea value={company.description}  
                  onChange={(e) => setCompany(prev => ({ ...prev, description: e.target.value }))}
                  id="job_description"
                  className="materialize-textarea" style={{ width: "100% !important" }}
                  />
        <label className="active" htmlFor="job_description">Description of the Job</label>
    </div>
    </div>

<div className="row">
    <div className="col s12" style={{ display: 'flex', justifyContent: 'center' }}>
        <button className="Button"
                type="button"
                onClick={(e) => {
                    setExperience(prev => [...prev, company]);
                    setCompany({ name: "", title: "", description: "" ,date:""});
                }}
                name="action">
            ADD Experience
           
        </button>
    </div>
</div >
    </div>     

 <div className='heading' style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"20px"}}>
     <h3>Career Objective</h3>
 </div >

       <div style={{display:"flex",justifyContent:"space-around"}}>
       <div class="input-field col s12">
            <textarea value={about} onChange={(e)=>setAbout(e.target.value)} id="about" class="materialize-textarea" data-length="120"></textarea>
            <label for="about">About</label>
          </div>
       </div>
<div className='heading' style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"20px"}}>
     <h3>References</h3>
 </div >

 {
    fetchedReferences && fetchedReferences.map(item=>{
        return <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>

    
        <div className='row'>
             <div className="input-field col s4">
                 <input value={item.name}   type="text" className="validate" readOnly />
                 
             </div>
             <div className="input-field col s4">
                 <input value={item.job_position}   type="text" className="validate" readOnly />
                 
             </div>
             <div className="input-field col s4">
                 <input value={item.comp_name}   type="text" className="validate" readOnly  />
                
             </div>
        </div>
        <div className='row'>
        <div className="input-field col s4">
                 <input value={item.phone}  type="text" className="validate" readOnly />
                 
             </div>
             <div className="input-field col s4">
                 <input value={item.email}  type="text" className="validate" readOnly />
                
             </div>
        </div>
        
           
        </div>
    })
}

{
    References && References.map(item=>{
        return <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>

    
        <div className='row'>
             <div className="input-field col s4">
                 <input value={item.name}   type="text" className="validate" readOnly />
                 
             </div>
             <div className="input-field col s4">
                 <input value={item.job_position}   type="text" className="validate" readOnly />
                 
             </div>
             <div className="input-field col s4">
                 <input value={item.comp_name}   type="text" className="validate" readOnly  />
                
             </div>
        </div>
        <div className='row'>
        <div className="input-field col s4">
                 <input value={item.phone}  type="text" className="validate" readOnly />
                 
             </div>
             <div className="input-field col s4">
                 <input value={item.email}  type="text" className="validate" readOnly />
                
             </div>
        </div>
        
           
        </div>
    })
}
  {
   References.length!=2 &&  <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>

    
   <div className='row'>
        <div className="input-field col s4">
            <input value={ref_data.name} id="ref-name" onChange={(e)=>set_ref_data(prev=>{
                return {
                    ...prev,
                    name:e.target.value
                }
            })} type="text" className="validate" />
            <label htmlFor="ref-name">Name</label>
        </div>
        <div className="input-field col s4">
            <input value={ref_data.job_position} id="ref-job-position" onChange={(e)=>set_ref_data(prev=>{
                return {
                    ...prev,
                    job_position:e.target.value
                }
            })} type="text" className="validate" />
            <label htmlFor="ref-job-position">Job Position</label>
        </div>
        <div className="input-field col s4">
            <input value={ref_data.comp_name} id="ref-company" onChange={(e)=>set_ref_data(prev=>{
                return {
                    ...prev,
                    comp_name:e.target.value
                }
            })} type="text" className="validate" />
            <label htmlFor="ref-company">Company</label>
        </div>
   </div>
   <div className='row'>
   <div className="input-field col s4">
            <input value={ref_data.phone} id="ref-phone" onChange={(e)=>set_ref_data(prev=>{
                return {
                    ...prev,
                    phone:e.target.value
                }
            })} type="text" className="validate" />
            <label htmlFor="ref-phone">Phone</label>
        </div>
        <div className="input-field col s4">
            <input value={ref_data.email} id="ref-email" onChange={(e)=>set_ref_data(prev=>{
                return {
                    ...prev,
                    email:e.target.value
                }
            })} type="text" className="validate" />
            <label htmlFor="ref-email">Email</label>
        </div>
   </div>
   <div className="row">
    {
       References.length!=2 &&      <div className="col s12" style={{ display: 'flex', justifyContent: 'center' }}>
             <button className="Button"
                     type="button"
                     onClick={(e) => {
                         setReferences(prev => [...prev, ref_data]);
                         set_ref_data({ name: "", phone: "", email: "" ,comp_name:"",job_position:""});
                     }}
                     name="action">
                 ADD Reference
                
             </button>
         </div>
    }

</div >
      
   </div>

  }

    
       <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"50px"}}>
       <Link to={'/resume'}><button onClick={()=>handleSubmit()} className="submit-button">Generate Resume</button></Link> 
       </div>


    

  

    </div>
  )
} 