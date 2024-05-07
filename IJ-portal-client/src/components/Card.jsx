import React from 'react'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
import {FiCalendar, FiDollarSign, FiMapPin, FiClock} from "react-icons/fi"

const Card = ({data}) => {
  const {companyName, jobTitle, companyLogo, minPrice, maxPrice, salaryType, jobLocation, employmentType, postingDate, description} = data;

  const handleApply = () => {
    Swal.fire({
      input: "url",
      inputLabel: "URL address",
      inputPlaceholder: "Enter the URL for your resume"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(`Entered URL: ${result.value}`);
      }
    });
  };

  return (
    <section className='card'>
      <div className='flex gap-4 flex-col sm:flex-row items-start'>
        <img src={companyLogo} alt="" />
        <div>
          <h4 className='text -primary mb-1'>{companyName}</h4>
          <h3 className='text-lg font-semibold mb-2'>{jobTitle}</h3>
          <div className='text-primary/70 text-base flex flex-wrap gap-2 mb-2'>
            <span className='flex items-center gap-2'> <FiMapPin/>{jobLocation}</span>
            <span className='flex items-center gap-2'> <FiClock/>{employmentType}</span>
            <span className='flex items-center gap-2'> <FiDollarSign/>{minPrice}-{maxPrice}k</span>
            <span className='flex items-center gap-2'> <FiCalendar/>{postingDate}</span>
          </div>

          <p className='text-base text-primary/70'>{description}</p>
        </div>
        <button className="bg-blue text-white py-2 px-4 rounded hover:bg-blue-600" onClick={handleApply}>
          Apply
        </button>
      </div>
    </section>
  )
}

export default Card