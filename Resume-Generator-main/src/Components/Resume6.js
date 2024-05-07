import React from 'react';
import './Resume6.css';

const resumeData = {
  name: 'Jin Wang',
  email: 'email@gmail.com',
  phone: '(555) 555-5555',
  education: [
    {
      school: 'Harvard University, Extension School',
      degree: 'Master of Liberal Arts, Information Management Systems',
      gpa: '4.0',
      awards: ['Class Marshall Award', "Dean's List Academic Achievement Award"],
      projects: ['Data Science Project: Financial Market Analysis Using Machine Learning', 'Capstone Project: Enterprise Data Lake'],
      date: 'May 2018',
    },
    {
      school: 'University of Malaya',
      degree: 'Bachelor of Computer Science',
      date: 'June 2009',
    },
  ],
  skills: [
    'Machine Learning',
    'Python/Scikit-learn',
    'Spark',
    'Data Visualization',
    'Quantitative Analysis',
    'Cloud Computing',
    'Hadoop',
    'Java/C#',
    // Add all other skills here...
  ],
  experience: [
    {
        title:"Rand Experience and Training",
        date:"Sept 2023",
        role:"Associate-IT",
        details:[
            "Lead a team of 6 people to manage and operate low latency",
            "Improved the performance of straight-through processing",
        ]
    },
    {
        title:"Rand Experience and Training",
        date:"Sept 2023",
        role:"Associate-IT",
        details:[
            "Lead a team of 6 people to manage and operate low latency",
            "Improved the performance of straight-through processing",
        ]
    }
  ],
};

const Resume = ({ data }) => (
  <div className='wrapper'>
    <header>
      <h1>Sample Resume</h1>
      <div>{data.name}</div>
      <div>{data.email} • {data.phone}</div>
    </header>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <h5 style={{fontWeight:"bold"}}>Education</h5>
    </div>
   
    <section>
      
      {data.education.map((edu, index) => (
        <div key={index}>
          <div style={{fontWeight:"bold"}}>{edu.school}</div>
          <div>{edu.degree}</div>
          {/* Include other education details */}
        </div>
      ))}
    </section>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <h5 style={{fontWeight:"bold"}}>Technical Skills</h5>
    </div>
    
    <section >
      
      <ul className='technical'>
        {data.skills.map((skill, index) => (
          <li key={index} style={{listStyleType:"disc"}}>{skill}</li>
        ))}
      </ul>
    </section>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <h5 style={{fontWeight:"bold"}}>Professional Experience</h5>
    </div>
    <section>
       {
        data.experience.map((item,index)=>{
         return <div>
            <h5 style={{fontWeight:"600"}} >{item.title}</h5>
            <div style={{display:"flex",justifyContent:"space-between"}}>
            <h6>{item.role}</h6>
            <h6>{item.date}</h6>
            </div>
            <div>
                {
                    item.details.map((detail,index)=>{
                      return  <li>{detail}</li>
                    }
                )
                }
            </div>
           
         </div>
        }
    )
       }
    </section>
  </div>
);

function Resume6() {
  return <Resume data={resumeData} />;
}

export default Resume6;