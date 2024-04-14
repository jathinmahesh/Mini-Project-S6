import React,{ useRef } from 'react'
import './Resume2.css'
import { json } from 'react-router-dom'
import { useReactToPrint } from 'react-to-print';
import html2canvas from 'html2canvas';

import jsPDF from 'jspdf';

export default function Resume2() {

  const name=localStorage.getItem("name")
 const phone=localStorage.getItem("phone")
 const email=localStorage.getItem("email")
 const address=localStorage.getItem("address")
 const role=localStorage.getItem("role")

 const componentRef = useRef();

    let retrieved_skills=localStorage.getItem("skills")
    let skills=JSON.parse(retrieved_skills)
    const Skills=skills.filter(item=>{
      return item!=''
    })

    let retrieved_education=localStorage.getItem("education")
    let education = retrieved_education ? JSON.parse(retrieved_education) : [];

    let retrieved_experiences=localStorage.getItem("experiences")
    let Experience = retrieved_experiences ? JSON.parse(retrieved_experiences) : [];
    


    let retrieved_languages=localStorage.getItem("languages")
    let languages=JSON.parse(retrieved_languages)
    const Languages=languages.filter(item=>{
      return item!=''
    })

    const about=localStorage.getItem("about")
    const image=localStorage.getItem("image")
    
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
    <div className='Wrapper'>
     <div className='Left-Wrap'>
            <div className='Profile' style={{fontSize:"medium"}}>
                <div className='Phone' style={{marginTop:"20px"}}>
                <i  class="material-icons">phone</i>
                <span >7342893712</span>
                </div>
                <div className='Email' style={{marginTop:"20px"}}>
                <i  class="material-icons">email</i>
                <span >karthik@gmail.com</span>
                </div>
                <div className='Location'  style={{marginTop:"20px"}}>
                <i  class="material-icons">location_on</i>
                <span >keerthanam,Kollam</span>
                </div>
            </div>
            <div className='Education-Details' style={{display:"flex",flexDirection:"column",marginLeft:"50px",marginTop:"40px"}}>
              <h4 style={{fontWeight:"500",marginTop:"50px",color:"rgb(72, 66, 66)"}}>EDUCATION</h4>
              <div>
                <h5>Bachelor Of Design</h5>
               <div><span style={{fontWeight:"500",fontSize:'medium'}}>Wardeire University</span></div> 
               <div><span style={{fontSize:'medium'}} >2006-2008</span></div> 
              </div>
            </div>

            <div className='Expertise-Details' style={{marginLeft:"50px",marginTop:"40px"}}>
              <h4 style={{color:"rgb(72, 66, 66)",fontWeight:"500"}}>EXPERTISE</h4>
              <div style={{color:"rgb(72, 66, 66)",fontSize:"large",marginTop:"10px"}}><span>Web Design</span></div>
              <div style={{color:"rgb(72, 66, 66)",fontSize:"large",marginTop:"10px"}}><span>Marketting</span></div>
              <div style={{color:"rgb(72, 66, 66)",fontSize:"large",marginTop:"10px"}}><span>Graphic Design</span></div>
            </div>

            <div className='Language-Details' style={{marginLeft:"50px",marginTop:"40px"}}>
              <h4 style={{color:"rgb(72, 66, 66)",fontWeight:"500"}}>LANGUAGE</h4>
              <div style={{display:"flex",flexDirection:"column",marginTop:"30px"}}>
              <div style={{color:"rgb(72, 66, 66)",fontSize:"large",marginTop:"10px"}}><span>English</span></div>
              <div style={{color:"rgb(72, 66, 66)",fontSize:"large",marginTop:"10px"}}><span>Malayalam</span></div>
              <div style={{color:"rgb(72, 66, 66)",fontSize:"large",marginTop:"10px"}}><span>Hindi</span></div>
              </div>
             
            </div>
     </ div>
     <div className='Right-Wrap'>

     </div>
    </div>
  )
}
