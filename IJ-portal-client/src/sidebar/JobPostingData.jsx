import React from 'react'
import InputField from '../components/InputField'

const JobPostingData = ({handleChange}) => {
  const now = new Date();
  const twentyfourhrsago = new Date(now - 24 * 60 * 60 * 1000);
  const sevendaysago = new Date(now - 7 * 24 * 60 * 60 * 1000);
  const thirtydaysago = new Date(now - 30 * 24 * 60 * 60 * 1000);

  //Convert date to string
  const twentyfourhrsagodate = twentyfourhrsago.toISOString().slice(0,10)
  const sevendaysagodate = sevendaysago.toISOString().slice(0,10)
  const thirtydaysagodate = thirtydaysago.toISOString().slice(0,10)
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Date of posting</h4>
        <div>
            <label className='sidebar-label-container'>
                <input type="radio" name="test" id="test" value="" onChange={handleChange}/>
                <span className='checkmark'></span>All time
            </label>

            <InputField handleChange={handleChange} value={twentyfourhrsagodate} title="Last 24 Hours" name="test"/>
            <InputField handleChange={handleChange} value={sevendaysagodate} title="Last Week" name="test"/>
            <InputField handleChange={handleChange} value={thirtydaysagodate} title="Last Month" name="test"/>
        </div>
    </div>
  )
}

export default JobPostingData