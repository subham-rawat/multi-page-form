import React from 'react'
import { NavLink } from 'react-router-dom'
import './Firstpage.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Female } from '@mui/icons-material'


function Fourthpage() {

  const initialValues = { profile_picture: "", Tenth_marksheet: "", Twelve_marksheet: "", Graduation_marksheet: "" }
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIssubmit] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
    console.log(formValues)
    setIssubmit(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
  }
  const Navigate = useNavigate()
  useEffect(() => {
    if (Object.keys(formErrors).length == 0 && isSubmit) {
      Navigate('/preview')
    }

  }, [formErrors])

  // validiation
  const validate = (values) => {
    const errors = {};

    //  profile picture 
    if (!values.profile_picture) {
      errors.profile_picture = " Please  upload  profile_picture "
    }
    // tenth marksheet
    if (!values.Tenth_marksheet) {
      errors.Tenth_marksheet = " Please  upload 10th marksheet "
    }

    // 12th  marksheet
    if (!values.Twelve_marksheet) {
      errors.Twelve_marksheet = " Please  upload 12th marksheet "
    }

    //  Graduation  marksheet
    if (!values.Graduation_marksheet) {
      errors.Graduation_marksheet = "Please  upload  Graduation  marksheet "
    }



    return errors;
  }

  localStorage.setItem('educationDocuments', JSON.stringify(formValues));


  const [file, setFile] = useState();
  function imageChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
    console.log(formValues)
    setIssubmit(true);
  }

  // function start 

  return (

    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>
          UPLOAD DOCUMENTS
        </h1> <br></br>
        <div className="uidivider">

          <div className="uiform">
            <div className="document">

              <div className="main">
                <label for="img"><h4>Profile Picture </h4></label>



                <input className='middle' className='middleprofile' type="file" name="profile_picture" onChange={imageChange} 
                  accept="image/*" />

                <img width={"150px"} src={file} />
              </div>
            </div>
            <p className='red'>{formErrors.profile_picture}</p>


            <div className="document">
              <label ><h4>Class 10th Marksheet</h4></label>
              <input className='middle' onChange={handleChange}
                value={formValues.Tenth_marksheet} name="Tenth_marksheet" type="file" accept=".pdf" />
            </div>
            <p className='red'>{formErrors.Tenth_marksheet}</p>

            <div className="document">
              <label ><h4>Class 12th Marksheet</h4></label>
              <input className='middle' onChange={handleChange}
                value={formValues.Twelve_marksheet} name="Twelve_marksheet" type="file" accept=".pdf" />
            </div>
            <p className='red'>{formErrors.Twelve_marksheet}</p>


            <div className="document">
              <label ><h4>Graduation  Marksheet</h4></label>
              <input className='middle' onChange={handleChange}
                value={formValues.Graduation_marksheet} name="Graduation_marksheet" type="file" accept=".pdf" />
            </div>
            <p className='red'>{formErrors.Graduation_marksheet}</p>

          </div>
          <NavLink to="/Thirdpage"> <button className='button'>Previous </button></NavLink>
          <button className='button'>Next</button>

        </div>
      </form >
    </div>


  )
}
export default Fourthpage;

