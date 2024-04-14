import React,{ useRef } from 'react'
import './resume1.css'
import { json } from 'react-router-dom'
import { useReactToPrint } from 'react-to-print';
import html2canvas from 'html2canvas';

import jsPDF from 'jspdf';

export default function Resume() {

  const name=localStorage.getItem("name")
 const phone=localStorage.getItem("phone")
 const email=localStorage.getItem("email")
 const address=localStorage.getItem("address")
 const role=localStorage.getItem("role")

 const componentRef = useRef();

 let retrieved_skills1=localStorage.getItem("fetchedSkills")
    let skills1=JSON.parse(retrieved_skills1)
    const fetched_skills=skills1.filter(item=>{
      return item!=''
    })

    let retrieved_skills=localStorage.getItem("skills")
    let skills=JSON.parse(retrieved_skills)
    const Skills=skills.filter(item=>{
      return item!=''
    })


    
    let retrieved_education1=localStorage.getItem("fetchedEducations")
    let fetched_educations = retrieved_education1 ? JSON.parse(retrieved_education1) : [];


    let retrieved_education=localStorage.getItem("education")
    let education = retrieved_education ? JSON.parse(retrieved_education) : [];


    let retrieved_experiences1=localStorage.getItem("fetchedExperiences")
    let fetched_experiences = retrieved_experiences1 ? JSON.parse(retrieved_experiences1) : [];
    

    let retrieved_experiences=localStorage.getItem("experiences")
    let Experience = retrieved_experiences ? JSON.parse(retrieved_experiences) : [];
    

    let retrieved_languages1=localStorage.getItem("fetchedLanguages")
    let languages1=JSON.parse(retrieved_languages1)
    const fetched_languages=languages1.filter(item=>{
      return item!=''
    })

    let retrieved_languages=localStorage.getItem("languages")
    let languages=JSON.parse(retrieved_languages)
    const Languages=languages.filter(item=>{
      return item!=''
    })

    const about=localStorage.getItem("about")
    const image=localStorage.getItem("image")

    let retrieved_references1=localStorage.getItem("fetchedReferences")
    let fetched_references=JSON.parse(retrieved_references1)
    
    let retrieved_references=localStorage.getItem("references")
    let References=JSON.parse(retrieved_references)

    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
    

    const downloadPdf=()=>{
      const capture=document.querySelector('.container')

      html2canvas(capture).then(canvas=>{
        const imgData=canvas.toDataURL('image/png')
        const doc=new jsPDF('p','mm','a4')
        const componentWidth=doc.internal.pageSize.getWidth()
        const componentHeight=doc.internal.pageSize.getHeight()
        doc.addImage(imgData,'PNG',0,0,componentWidth,componentHeight)
        doc.save('Resume.pdf')
      })
      // html2canvas(capture, { scrollY: -window.scrollY }).then(canvas => {
      //   const imgData = canvas.toDataURL('image/png');
      //   const doc = new jsPDF('p', 'mm', 'a4');
      //   const pageWidth = doc.internal.pageSize.getWidth();
      //   const aspectRatio = canvas.width / canvas.height;
  
      //   // Set the width of the image to match the page width
      //   const imageWidth = pageWidth;
  
      //   // Calculate the height of the image based on the aspect ratio
      //   const imageHeight = imageWidth / aspectRatio;
  
      //   // Add the image to the PDF, positioning it at the top of the page
      //   doc.addImage(imgData, 'PNG', 0, 0, imageWidth, imageHeight);
  
      //   // Save the PDF
      //   doc.save('Resume.pdf');
      // });
    };
  
    

  return (
    <div style={{fontFamily:"Aerial",letterSpacing:"2px",fontSize:"large"}}>

   
    <div ref={componentRef} className='container'>
        <div className='left' style={{height:"380mm"}}>
          <div>
          <div className='Profile-pic'  style={{display:"flex",justifyContent:"center"}}>
            <img style={{ width: "160px", height: "160px", borderRadius: "80px",marginTop:"20px" }}
              src={image} />
          </div>
          </div>
      
         <div className='contact'>
            <h5>Contact</h5>
            {
              phone &&   <div className='phone'>
              <h6>Phone</h6>
              <span>{phone}</span> 
              </div>
            }

            {
              email &&  <div className='email'>
              <h6>Email</h6>
              <span> {email}</span> 
            </div>
            }
          
           {
            address && <div className='address'>
            <h6>Address</h6>
            <span>{address}</span> 
            </div>
           }
          
         </div>

         <div className='Education'>
         <h5>Education</h5>
         {
          fetched_educations && fetched_educations.map(item=>{
            return   <div style={{margin:"7px"}}>
            <h6 style={{marginLeft:"7px"}}>{item.year}</h6>
            <h6 style={{marginLeft:"7px"}}>{item.degree}</h6>
            <h6 style={{marginLeft:"7px"}}>{item.name}</h6>
            </div>
          })
         }
         {
          education && education.map(item=>{
            return   <div style={{margin:"7px"}}>
            <h6 style={{marginLeft:"7px"}}>{item.year}</h6>
            <h6 style={{marginLeft:"7px"}}>{item.degree}</h6>
            <h6 style={{marginLeft:"7px"}}>{item.name}</h6>
            </div>
          })
         }
       
         
         </div>
         {
          fetched_skills &&  <div className='Expertise'>
          <h5>Expertise</h5>
          {
            fetched_skills.map(item=>{
              return   <div>
                <li style={{margin:"7px"}}>{item}</li>
                </div>
            })
          }
          
          
       </div>
         }
         {
          skills &&  <div className='Expertise'>
          
          {
            skills.map(item=>{
              return   <div>
                <li style={{margin:"7px"}}>{item}</li>
                </div>
            })
          }
          
          
       </div>
         }

{
        fetched_languages && <div  className='Language' style={{width:"100%"}}>
        <h5 >Language</h5>
        {
         fetched_languages.map(item=>{
           return  <div>
           <li style={{margin:"7px"}}>{item}</li>
              
           </div>
         })
        }
       
           
        </div>
       }  
        
       {
        languages && <div  className='Language' style={{width:"100%"}}>
       
        {
         Languages.map(item=>{
           return  <div>
           <li style={{margin:"7px"}}>{item}</li>
              
           </div>
         })
        }
       
           
        </div>
       }  
        </div >
        <div className='right' >
          <div className='name'>
              <h2>{name}</h2> 
              <h5 >{role}</h5>
          </div>
          <div className='about'>
            <span>

            {about}
            </span>
          
          </div>

          <div className='Experience'>
          <h3 style={{fontWeight:"600"}}>Experience</h3>
          {fetched_experiences && fetched_experiences.map(item=>{
            return  <div className='Exp-div'>
           
            <h6>{item.date}</h6>
            <span >{item.name}</span>
            <h6 >{item.title}</h6>
            <div style={{marginBottom:"40px !important"}} className='description'>
              <span  >
              {item.description}
              </span>
          
            </div>
            </div>
           })
           }
           {Experience && Experience.map(item=>{
            return  <div className='Exp-div'>
           
            <h6>{item.date}</h6>
            <span >{item.name}</span>
            <h6 >{item.title}</h6>
            <div style={{marginBottom:"40px !important"}} className='description'>
              <span  >
              {item.description}
              </span>
          
            </div>
            </div>
           })
           }
          </div>
          <div className='Reference'>
            
            <h3 style={{fontWeight:"600"}}>Reference</h3>

            <div   style={{ display: 'flex', }}>
            {
            fetched_references && fetched_references.map(item=>{
              console.log(item)
              return  <div className='Reference-div' >
              <h6>{item.name}</h6>
              <span>{item.job_position},{item.comp_name}</span>
              <div className='Ref-div'>
              <span style={{display:"block",fontWeight:"600"}}>{item.phone}</span>
              <span style={{display:"block",fontWeight:"600"}}>{item.email}</span>
              </div>
                </div>
            })
           }
           {
            References && References.map(item=>{
              console.log(item)
              return  <div className='Reference-div' >
              <h6>{item.name}</h6>
              <span>{item.job_position},{item.comp_name}</span>
              <div className='Ref-div'>
              <span style={{display:"block",fontWeight:"600"}}>{item.phone}</span>
              <span style={{display:"block",fontWeight:"600"}}>{item.email}</span>
              </div>
                </div>
            })
           }

           
            </div>
           
          
          
          </div>
        </div>
       
    </div>
    <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"50px"}}>
    <button className='Button' onClick={downloadPdf}>Download</button>
    </div>
    
    </div>
  )
}
