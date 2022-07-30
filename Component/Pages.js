
import React from 'react'
import { NavLink } from 'react-router-dom'
import './Firstpage.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import Fourthpage from './Fourthpage'
import { Female } from '@mui/icons-material'


function Pages() {
  const navigate = useNavigate();

  const initialValues = { Tenthper:"", Twelvthper:"",   Twelvthstream:"",Gradper:"",Gradstream:""}
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

useEffect(() => {
  if (Object.keys(formErrors).length == 0 && isSubmit) {
    navigate('/Fourthpage')
  }

}, [formErrors])

const validate = (values) => {
  const errors = {};
  const fval = "^([a-zA-Z]{2,}\\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\\s?([a-zA-Z]{1,})?)";


  // class tenth validiation 
  if (!values.Tenthper) {
    errors.Tenthper = " Percentage is required "
  }
 
  else if (isNaN(values.Tenthper)) {
    errors.Tenthper = " Please enter only number "
  }
  else if (values.Tenthper >=100 || values.Tenthper <0)
  {
    errors.Tenthper= "Please  enter your valid percentage "
  }

 // class 12  validiation 
 if (!values.Twelvthper) {
  errors.Twelvthper = "Percentage is required"
}

else if (isNaN(values.Twelvthper)) {
  errors.Twelvthper = " Please enter only number "
}
else if (values.Twelvthper >=100 || values.Twelvthper <0)
{
  errors.Twelvthper= "Please enter your valid percentage "
}

// GRADUATION 
if (!values.Gradper) {
  errors.Gradper = "Percentage is required"
}

else if (isNaN(values.Gradper)) {
  errors.Gradper = " Please enter only number "
}
else if (values.Gradper >=100 || values.Gradper <0)
{
  errors.Gradper= "Please  enter your valid percentage "
}








  return errors;
}
localStorage.setItem('educationDetails', JSON.stringify(formValues));

// function start 

return (
  <>
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>
        Education Details
        </h1> <br></br>
        <div className="uidivider">
          <div className="uiform">


{/* class tenth */}

            <div className='downcc' className="feild">
              <label ><h5 className='downcc '><h5 className='downcc '>CLASS 10TH PERCENTAGE  </h5>  </h5>  </label>
              <input className=' inp' type="text" name="Tenthper" placeholder=' Enter your 10 Percentage'
                onChange={handleChange}
                value={formValues.Tenthper} />
            </div>
            <p className='red'>{formErrors.Tenthper}</p>


{/* class 12th percentage */}

<div className='downcc' className="feild">
              <label ><h5 className='downcc '><h5 className='downcc '>CLASS 12TH PERCENTAGE</h5>  </h5>  </label>
              <input className=' inp' type="text" name="Twelvthper" placeholder=' Enter your 12 thPercentage'
                onChange={handleChange}
                value={formValues.Twelvthper} />
            </div>
            <p className='red'>{formErrors.Twelvthper}</p>



{/* class 12 stream  */}


<div className='downcc' onChange={handleChange}>

<h5 className='down'> Choose stream (12th)</h5>

<p className="d-flex">
  <input type="radio" value="Math"  name="Twelvthstream" required />{" "}
  <label>Math</label>{" "}
</p>
<p className="d-flex">
  <input type="radio"  value="Biology"  name="Twelvthstream" required />{" "}
  <label>Biology </label>
</p>
</div>

 {/* graduation perentage    */}

 <div className='downcc' className="feild">
              <label ><h5 className='downcc '>Graduation  Percentage </h5>  </label>
              <input className=' inp' type="text" name="Gradper" placeholder='Graduation Percentage'
                onChange={handleChange}
                value={formValues.Gradper} />
            </div>
            <p className='red'>{formErrors.Gradper}</p>

{/* graduation stream  */}

<div className='downcc' onChange={handleChange}>

<h5 className='down'> Choose stream (Graduation )</h5>
<p className="d-flex">
  <input type="radio"  value="B-TECH"  name="Gradstream" required />{" "}
  <label>B-TECH</label>
</p>

<p className="d-flex">
  <input type="radio" value="MEDICAL"  name="Gradstream" required />{" "}
  <label>MEDICAL</label>{" "}
</p>
</div>
          
<NavLink to="/Secondpage"> <button  className='button'>Previous </button></NavLink>
<button className='button'>  Next</button>

          </div>
        </div>


      </form>
    </div >
  </>
)
}
export default Pages;

