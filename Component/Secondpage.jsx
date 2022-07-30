import React from 'react'
import { NavLink } from 'react-router-dom'
import './Firstpage.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import Thirdpage from './Thirdpage'
// import { Female } from '@mui/icons-material'

import { MultiSelect } from "react-multi-select-component";


function Secondpage() {
  const navigate = useNavigate();

  const initialValues = { FirstName: "", LastName: "", Number: "", Hobbies: " ", Gender: "" }
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIssubmit] = useState(false);
  const [selected, setSelected] = useState([]);

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

  useEffect(() => {
    if (Object.keys(formErrors).length == 0 && isSubmit) {
      navigate('/Thirdpage')
    }

  }, [formErrors])
  const validate = (values) => {
    const errors = {};
    const fval = "^([a-zA-Z]{2,}\\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\\s?([a-zA-Z]{1,})?)";

    // first name 
    if (!values.FirstName) {
      errors.FirstName = " First  name is req"
    } else if (values.FirstName.length < 3) {
      errors.FirstName = " Must be more than three character"
    }
    else if (values.FirstName.length > 10) {
      errors.FirstName = " First name not  more than  ten alphabet"
    }
    else if (!isNaN(values.FirstName)) {
      errors.FirstName = " Name not contain number"
    }

    // last  name 
    if (!values.LastName) {
      errors.LastName = " Last  name is req"
    } else if (values.LastName.length < 3) {
      errors.LastName = " Must be more than three character"
    }
    else if (values.LastName.length > 10) {
      errors.LastName = " Last name not  more than  ten alphabet"
    }
    else if (!isNaN(values.LastName)) {
      errors.LastName = " Name  not contain number"
    }

    // mobile no
    if (!values.Number) {
      errors.Number = "Mobile no is req"
    }

    else if (isNaN(values.Number)) {
      errors.Number = " Please enter only number "
    }

    // hobbies

    if (!values.Hobbies) {
      errors.Hobbies = " Select atleast two "
    }

    return errors;
  }


  const options = [
    { label: "Cricket", value: "cricket" },
    { label: "Football ", value: "football" },
    { label: " Reading", value: "Reading" },
    { label: " Cooking", value: "Cooking" },
    { label: "Swiming", value: "Swiming" },
  ];

  localStorage.setItem('basicDetails', JSON.stringify(formValues));

  // function start 

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
        <h2 class="fw-bold mb-2 text-uppercase">BASICS DETAILS</h2>

          <div className="uidivider">
            <div className="uiform">

              <div  >
                <label > <h5 className='downcc '>FIRST NAME </h5> </label>
                <input className=' inp' type="text" name="FirstName" placeholder=' Enter first name ' onChange={handleChange}
                  value={formValues.FirstName} />
              </div>
              <p className='red'>{formErrors.FirstName}</p>



              <div className="feild">
                <label ><h5 className='downcc '>LAST NAME </h5> </label>
                <input className=' inp' type="text" name="LastName" placeholder=' Enter last name ' onChange={handleChange}
                  value={formValues.LastName} />
              </div>
              <p className='red'>{formErrors.LastName}</p>



              <div className='downcc' className="feild">
                <label ><h5 className='downcc '>MOBILE NUMBER </h5>  </label>
                <input className=' inp' type="text" name="Number" placeholder=' Enter mobile number '
                  onChange={handleChange}
                  value={formValues.Number} />
              </div>
              <p className='red'>{formErrors.Number}</p>

              {/* gender */}

              <div className='downcc' onChange={handleChange}>
                <div className="d-flex">


                </div>
                <div>
                  <h5 className='down'>GENDER</h5>
                  <p>
                    <input type="radio" value="MALE" name="Gender" required />{" "}
                    <label>MALE</label>

                  </p>
                  <p>

                    <input type="radio" value="FEMALE" name="Gender" required />{" "}
                    <label> FEMALE</label>{" "}
                  </p>
                </div>

              </div>


              <p className='red'>{formErrors.Gender}</p>

              {/* HOBBIES */}


              <div className='downcc'>

                <div className='hobb'>
                  <p>Hobbies</p>
                  <MultiSelect
                    options={options}
                    value={selected}
                    onChange={setSelected}
                    labelledBy="Select"
                  />
                </div>

              </div>

              <p className='red'>{formErrors.Hobbies}</p>

              <NavLink to="/"> <button className='button'>Previous </button> </NavLink>
              <button className='button'>  Next</button>


            </div>
          </div>


        </form>
      </div >
    </>
  )
}
export default Secondpage;

