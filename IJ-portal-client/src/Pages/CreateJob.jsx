import { useState } from "react"
import { useForm } from "react-hook-form"
import CreatetableSelect from "react-select/creatable"

const CreateJob = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const {
    register,
    handleSubmit,reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    data.skills = selectedOption;
    // console.log(data);
    fetch("http://localhost:3005/post-job", {
      method: "POST",
      headers: {"content-Type" : "application/json"},
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then((result) => {
      console.log(result)
      if(result.acknowledged === true){
        alert("Job Posted Successfully!")
      }
      reset()
    })
  };

  const options = [
    {value: "JavaScript", label: "JavaScript"},
    {value: "Python", label: "Python"},
    {value: "Java", label: "Java"},
    {value: "C", label: "C"},
    {value: "C++", label: "C++"},
    {value: "MongoDB",label: "MongoDB"},
    {value: "HTML", label: "HTML"},
    {value: "CSS", label: "CSS"},
    {value: "Golang", label: "Golang"},
  ]
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
      {/* form */}
      <div className='bg-[#FAFAFA] py-10 px-4 lg:px-16'>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* 1st row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Title</label>
              <input type="text" defaultValue={"Web Developer"}
               {...register("jobTitle")} className="create-job-input"/>
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Name</label>
              <input type="text" placeholder="Eg: Microsoft"
               {...register("companyName")} className="create-job-input"/>
            </div>
          </div>

          {/* 2nd row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Minimum Salary</label>
              <input type="text" placeholder="Eg: 10K"
               {...register("minPrice")} className="create-job-input"/>
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Maximum Salary</label>
              <input type="text" placeholder="Eg: 100K"
               {...register("maxPrice")} className="create-job-input"/>
            </div>
          </div>

          {/* 3rd row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Salary Type</label>
                <select {...register("salaryType")} className="create-job-input">
                  <option value="">Choose your salary</option>
                  <option value="Hourly">Hourly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Yearly">Yearly</option>
                </select>
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Location</label>
              <input type="text" placeholder="Eg: Kochi"
               {...register("jobLocation")} className="create-job-input"/>
            </div>
          </div>

          {/* 4th row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Posting Date</label>
              <input type="date" placeholder="yyyy-mm-dd"
               {...register("postingDate")} className="create-job-input"/>
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Experience Level</label>
                <select {...register("experienceLevel")} className="create-job-input">
                  <option value="">Choose your Experience</option>
                  <option value="No Experience">No Experience</option>
                  <option value="Internship">Internship</option>
                  <option value="Work Remotely">Work Remotely</option>
                </select>
            </div>
          </div>

          {/* 5th row */}
          <div>
          <label className="block mb-2 text-lg">Required Skills:</label>
            <CreatetableSelect defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            isMulti
            className="create-job-input py-4"/>
          </div>

          {/* 6th row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Logo</label>
              <input type="url" placeholder="Paste your logo URL Eg: https://logo.com/"
               {...register("companyLogo")} className="create-job-input"/>
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Employment Type</label>
                <select {...register("employmentType")} className="create-job-input">
                  <option value="">Choose your Experience</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Temporary">Temporary</option>
                </select>
            </div>
          </div>
          {/* 7th row */}
          <div className="w-full">
          <label className="block mb-2 text-lg">Job Description</label>
          <textarea className="w-full pl-3 py-1.5 focus:outline-none"
          rows={6}
          placeholder="Eg: Requires experience in Frontend Web Development and creating sophisticated UI."
          {...register("description")}/>

          {/* Last row */}
          <div>
            <label className="block mb-2 text-lg">Job Posted By:</label>
            <input type="email" placeholder="Company email"
               {...register("postedBy")} className="create-job-input"/>
          </div>
          </div>

      <input type="submit" className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"/>
    </form>
      </div>
    </div>
  )
}

export default CreateJob