import React from 'react'
import './Resume3.css'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
export default function Resume3() {

    const name=localStorage.getItem("name")
   const email= localStorage.getItem("email")
   const phone= localStorage.getItem("phone")
   const address= localStorage.getItem("address")
   const rank= localStorage.getItem("rank")
  const dob=  localStorage.getItem("dob")

   const retrieved_education= localStorage.getItem("educations")
   const educations = retrieved_education ? JSON.parse(retrieved_education) : [];

  const fetched_educations1= localStorage.getItem("fetchedEducations")
  const fetched_educations = fetched_educations1 ? JSON.parse(fetched_educations1) : [];


   const retrieved_internships= localStorage.getItem("internships")
   const internships = retrieved_internships ? JSON.parse(retrieved_internships) : [];

   const fetched_internships1= localStorage.getItem("fetchedInternships")
  const fetched_internships = fetched_internships1 ? JSON.parse(fetched_internships1) : [];



   const retrieved_projects= localStorage.getItem("projects")
   const projects = retrieved_projects ? JSON.parse(retrieved_projects) : [];

   const fetched_projects1= localStorage.getItem("fetchedProjects")
  const fetched_projects = fetched_projects1 ? JSON.parse(fetched_projects1) : [];

  
  const retrieved_positions= localStorage.getItem("positions")
  const positions = retrieved_positions ? JSON.parse(retrieved_positions) : [];

  const fetched_positions1= localStorage.getItem("fetchedPositions")
  const fetched_positions = fetched_positions1 ? JSON.parse(fetched_positions1) : [];


   const retrieved_hobbies=  localStorage.getItem("hobbies")
   const hobbies = retrieved_hobbies ? JSON.parse(retrieved_hobbies) : [];

   const fetched_hobbies1= localStorage.getItem("fetchedHobbies")
  const fetched_hobbies = fetched_hobbies1 ? JSON.parse(fetched_hobbies1) : [];
   
   const retrieved_achievements=localStorage.getItem("achievements")
   const achievements = retrieved_achievements ? JSON.parse(retrieved_achievements) : [];

   const fetched_achievements1= localStorage.getItem("fetchedAchievements")
   const fetched_achievements = fetched_achievements1 ? JSON.parse(fetched_achievements1) : [];


   const downloadPdf=()=>{
    const capture=document.querySelector('.wrapper')

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
    <div style={{display:"flex",flexDirection:"column"}}>

    
    <div className='wrapper' style={{height:"430mm",letterSpacing:"2px",fontSize:"25px"}}>
        <div  style={{margin:"30px"}}>

       
        <div style={{display:'flex',justifyContent:"space-between",alignItems:"center"}}>
        <div>
        <div className='Name'>
       <h4>{name}</h4> 
      </div>
      <div className='DOB'>
       <span style={{fontWeight:"600"}}>Date of Birth: {dob}</span> 
      </div>
      <div className='JEE'>
      <span style={{fontWeight:"600"}}>JEE 2006 rank: 2678</span>
      </div>
        </div>

        <div style={{display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"start"}}>
            <div className='Address'>
            <span style={{fontWeight:"600"}}>Address: </span><span style={{fontWeight:500}}>{address}</span>
            </div>
            <div className='Email'>
            <span style={{fontWeight:"600"}}>Email: </span><span style={{marginLeft:"5px",fontWeight:500}}>{email}</span>
            </div>
            <div className='Phone'>
            <span style={{fontWeight:"600"}}>Phone: </span ><span style={{marginLeft:"5px",fontWeight:500}}>{phone}</span>
            </div>
           
        </div>
     
    </div>

    <div className='educations'>
    <div style={{backgroundColor:"lightgrey",marginTop:"20px"}}>
            <span style={{fontWeight:"bold",fontSize:"25px"}}>EDUCATION</span>
        </div>
    <table style={{border:"1px solid black",marginTop:"20px"}}>
        <tr style={{border:"1px solid black"}}>
        <th style={{border:"1px solid black"}}>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            Year
            </div>
            
            </th>
        <th style={{border:"1px solid black"}}>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            Degree/Certificate
            </div>
           </th>
        <th style={{border:"1px solid black"}}>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        Institute/School,City
            </div>
            </th>
        <th style={{border:"1px solid black"}}>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            CPI
            </div>
           
            </th>
        </tr>

       
        {
            fetched_educations && fetched_educations.map(item=>{
                return  <tr style={{border:"1px solid black"}}>
                <td style={{border:"1px solid black"}}>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <span style={{fontWeight:"500"}}> {item.year}</span>
           
                </div>
                    </td>
                <td style={{border:"1px solid black"}}> 
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
               <span style={{fontWeight:"500"}}>{item.degree}</span>
                </div></td>
                <td style={{border:"1px solid black"}}>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
               <span style={{fontWeight:"500"}}>{item.name}</span>
                </div>
                    
                    </td>
                <td style={{border:"1px solid black"}}>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <span style={{fontWeight:"500"}}>{item.cpi}</span>
               
                </div>
                   
                    </td>
            </tr>
            })
        }
       

        {
            educations && educations.map(item=>{
                return  <tr style={{border:"1px solid black"}}>
                <td style={{border:"1px solid black"}}>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <span style={{fontWeight:"500"}}> {item.year}</span>
           
                </div>
                    </td>
                <td style={{border:"1px solid black"}}> 
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
               <span style={{fontWeight:"500"}}>{item.degree}</span>
                </div></td>
                <td style={{border:"1px solid black"}}>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
               <span style={{fontWeight:"500"}}>{item.name}</span>
                </div>
                    
                    </td>
                <td style={{border:"1px solid black"}}>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <span style={{fontWeight:"500"}}>{item.cpi}</span>
               
                </div>
                   
                    </td>
            </tr>
            })
        }
       
       
    </table>
    </div>

    <div className='achievements'>
        <div style={{backgroundColor:"lightgrey",marginTop:"20px",marginBottom:"10px"}}>
            <span style={{fontWeight:"bold",fontSize:"25px"}}>ACHIEVEMENTS</span>
        </div>
        {
            fetched_achievements && fetched_achievements.map(item=>{
                return  <li style={{fontWeight:500}}>{item}</li>
            })
        }
        {
            achievements && achievements.map(item=>{
                return  <li style={{fontWeight:500}}>{item}</li>
            })
        }
       
   
    

    </div>
    <div className='internships'>
    <div style={{backgroundColor:"lightgrey",marginTop:"20px"}}>
         <span style={{fontWeight:"bold",fontSize:"25px"}}>INTERNSHIPS</span>
    </div>

    {
        fetched_internships && fetched_internships .map(item=>{
            return  <div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <h6 style={{fontSize:"25px",fontWeight:"bold"}}>{item.title}</h6>
              <span style={{marginRight:"20px",fontWeight:500}}>{item.year}</span>
            </div>
            {
                item.description && item.description.map(item1=>{
                    return  <li style={{fontWeight:"500"}}>{item1}</li>
                })
            }
           
            </div>
        })
    }


    {
        internships && internships.map(item=>{
            return  <div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <h6 style={{fontSize:"25px",fontWeight:"bold"}}>{item.title}</h6>
              <span style={{marginRight:"20px",fontWeight:500}}>{item.year}</span>
            </div>
            {
                item.description && item.description.map(item1=>{
                    return  <li style={{fontWeight:"500"}}>{item1}</li>
                })
            }
           
            </div>
        })
    }

    
   
    </div>

    <div className='projects'>
    <div style={{backgroundColor:"lightgrey",marginTop:"20px"}}>
         <span style={{fontWeight:"bold",fontSize:"25px"}}>KEY ACADEMIC PROJECTS AND COURSES</span>
    </div>

    {
        fetched_projects && fetched_projects.map(item=>{
            return  <div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <h6 style={{fontSize:"25px",fontWeight:"bold"}}>{item.title}</h6>
              <span style={{marginRight:"20px",fontWeight:500}}>{item.year}</span>
            </div>
            {
                item.description && item.description.map(item1=>{
                    return  <li style={{fontWeight:"500"}}>{item1} </li>
                })
            }
           
            </div>
        })
    }

    {
        projects && projects.map(item=>{
            return  <div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <h6 style={{fontSize:"25px",fontWeight:"bold"}}>{item.title}</h6>
              <span style={{marginRight:"20px",fontWeight:500}}>{item.year}</span>
            </div>
            {
                item.description && item.description.map(item1=>{
                    return  <li style={{fontWeight:"500"}}>{item1} </li>
                })
            }
           
            </div>
        })
    }

   

    </div>

    <div className='responsibility'>
    <div style={{backgroundColor:"lightgrey",marginTop:"20px"}}>
         <span style={{fontWeight:"bold",fontSize:"25px"}}>POSITIONS OF RESPONSIBILITY</span>
    </div>

    {
        fetched_positions && fetched_positions.map(item=>{
            return   <div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <h6 style={{fontSize:"25px",fontWeight:"bold"}}>{item.title}</h6>
              <span style={{marginRight:"20px",fontWeight:500}}>{item.year}</span>
            </div>
            {
                item.description && item.description.map(item1=>{
                    return <li style={{fontWeight:"500"}}>{item1}</li>
                })
            }
            
            </div>
        })
    }
  

    {
        positions && positions.map(item=>{
            return   <div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <h6 style={{fontSize:"25px",fontWeight:"bold"}}>{item.title}</h6>
              <span style={{marginRight:"20px",fontWeight:500}}>{item.year}</span>
            </div>
            {
                item.description && item.description.map(item1=>{
                    return <li style={{fontWeight:"500"}}>{item1}</li>
                })
            }
            
            </div>
        })
    }
  
 
    </div>

    <div className='hobbies'>
    <div style={{backgroundColor:"lightgrey",marginTop:"20px"}}>
         <span style={{fontWeight:"bold",fontSize:"25px"}}>HOBBIES AND INTERESTS</span>
    </div>
    {
       fetched_hobbies &&   fetched_hobbies.map(item=>{
            return <li style={{fontWeight:"500"}}>{item}</li>
        })
    }
    
    {
       hobbies &&  hobbies.map(item=>{
            return <li style={{fontWeight:"500"}}>{item}</li>
        })
    }
    
  
    </div>

    
    </div>

   

    </div>
    <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"50px"}}>
    <button className='Button' onClick={downloadPdf}>Download</button>
    </div>
    </div>
  )
}
