import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
import './Firstpage.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Secondpage from './Secondpage'
import axios from 'axios'

function Firstpage() {
  const navigate = useNavigate();

  const initialValues = { Email: "", passwordd: "", cpassword: "" }
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIssubmit] = useState(false);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues)
    setIssubmit(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
  

  }
  useEffect(() => {
    if (Object.keys(formErrors).length == 0 && isSubmit) {
      navigate('/Secondpage')
      // data()
    }

  }, [formErrors])


  const validate = (values) => {
    const errors = {};
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


    // email 
    if (!values.Email) {
      errors.Email = " Email is required"
    }
    else if (!regex.test(values.Email)) {
      errors.Email = " Not a valid email "
    }

    // password

    if (!values.passwordd) {
      errors.passwordd = " Password  is required"
    }
    else if (values.passwordd.length < 4) {
      errors.passwordd = " Must be more than 4 character"
    }
    else if (values.passwordd.length >12) {
      errors.passwordd = " Not more  than 12  character"
    }

// confirm password

  if (values.cpassword !== values.passwordd) {
      errors.cpassword = " Confirm Password not matched with password "
    }
    
    return errors;
  }

  localStorage.setItem('loginDetails', JSON.stringify(formValues));


  return (
    <>
      <div className="container"> 
        <form onSubmit={handleSubmit}>
        <h2 class="fw-bold mb-2 text-uppercase">Login Page</h2>
        <p class="text-white-50 mb-5">Please enter your login and password!</p>

        <div class="form-outline form-white mb-4">
        <label class="form-label" for="typeEmailX">Email</label>
                <input type="email" name="Email" id="typeEmailX" class="form-control form-control-lg" onChange={handleChange}
                  value={formValues.Email} />
              </div>
              <p className='red'>{formErrors.Email}</p>


              <div class="form-outline form-white mb-4">
              <label class="form-label"  for="typePasswordX">Password</label>
                <input type="password" name="passwordd" id="typePasswordX" class="form-control form-control-lg"  onChange={handleChange}
                  value={formValues.passwordd}/>
              </div>
              <p className='red'>{formErrors.passwordd}</p>


              <div class="form-outline form-white mb-4">
              <label class="form-label" for="typePasswordX">Confirm Password</label>
                <input type="password"  name="cpassword" id="typePasswordX" class="form-control form-control-lg"   onChange={handleChange}
                  value={formValues.cpassword}/>
              </div>
              <p className='red'>{formErrors.cpassword}</p>

              <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>

              <button class="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

        </form>
      </div>
    </>
  )
}
export default Firstpage;