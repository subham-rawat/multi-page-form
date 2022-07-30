// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import './Firstpage.css'
// import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router'
// import Fourthpage from './Fourthpage'
// import { Female } from '@mui/icons-material'



// function Thirdpage() {
//   const navigate = useNavigate();

//   const initialValues = { Tenthper: "", Twelveper: ""}
//   const [formValues, setFormValues] = useState(initialValues);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIssubmit] = useState(false);


//   const handleChange = (e) => {
//     const { name, value } = e.target;


//   setFormValues({ ...formValues, [name]: value });
//   console.log(formValues)
//   setIssubmit(true);
//   }
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormErrors(validate(formValues));
//   }

// useEffect(() => {
//   if (Object.keys(formErrors).length == 0 && isSubmit) {
//     navigate('/Fourthpage')
//   }

// }, [formErrors])

// const validate = (values) => {
//   const errors = {};


//   if (!values.Number) {
//     errors.Number = "Mobile no is req"
//   }
//   else if (isNaN(values.Number.length >= 10 || values.Number.length <= 10)) {
//     errors.Number = " Must be equal to 10 digit  "
//   }
//   else if (isNaN(values.Number)) {
//     errors.Number = " Please enter only number "
//   }









//   return errors;
// }



//     return (<>
//          <div className="container">
//       <form  onSubmit={handleSubmit}/>
//          <h1>Third page</h1> <br></br> 
//            <div className="inputmarks">

      


//             <div className='downcc' className="feild">
//               <label ><h5 className='downcc '>MOBILE NUMBER </h5>  </label>
//               <input className=' inp' type="text" name="Number" placeholder=' Enter mobile number '
//                 onChange={handleChange}
//                 value={formValues.Number} />
//             </div>
//             <p className='red'>{formErrors.Number}</p>

         
         
//         <div className='SUB'>
          
// <label >  Choose  Subjects:  </label>  
// <input type="checkbox"  name="math" name="subject"  />
//  <label for="math"> MATH </label>
 
 
// <input type="checkbox"  name="physics " name="subject"  />
//  <label for="chemistphysicsry">PHYSICS </label>

// <input type="checkbox"  name="hindi" name="subject"  />
//  <label for="hindi"> HINDI  </label>

//   <input type="checkbox"  name="social" name="subject"  />
//  <label for="social ">SOCIAL SCIENCE  </label>
 



//  </div> 

//              </div> 



// {/* class 12 marks  */}

// <div  >
//               <label > <h4> Class 12th Percent </h4> </label><br></br>
//               <input className=' inp' type="text" name="Twelveper" placeholder=' Enter your percentage  '  />
//             </div>


// <div className=' mtop' >
//   <select>
//     <option >Select  Stream :</option>
     
//     <option >MEDICAL </option>
//     <option >NON - MEDICAL </option>
//     <option >ARTS </option>
//     <option >COMMERCE  </option>
//   </select>
// </div>


// {/* graduation */}
 
//  <div className="inputmarks"  className="down" >

// <label >  <h4> Graduation  </h4>   </label><br/>
// <input   className=' inp' type="text" placeholder='Enter  graduation  %  ' />


// <div className=' mtop' >
//   <select>
//     <option >Select  Stream :</option>
     
//     <option >B-SC</option>
//     <option >BA - MEDICAL </option>
//     <option >BBA </option>
//     <option >B-TECH </option> 
//   </select> </div> 
//     </div>

// <button className='button'>  Next</button>

//       <form/>
//     <div/>
//    </div>  


//     </>
//     )
// }
// export default Thirdpage;






































// // function Thirdpage() {
// //   return (<>
// //        <div className="container">
// //     <form >
// //        <h1>
// //         Third page
// //       </h1> <br></br> 
//       {/* <div className="uidivider">
//         <div className="uiform">

//           <div className="feild">
            
//             <label > class 10th marks   </label><br></br>
//             <input   className=' inp' type="text" placeholder=' class 10th marks  ' />
//           </div>


//           <div className="feild">
//             <label > class 12 marks  </label><br></br>
//             <input    className=' inp' type="password" placeholder='classs 12th marks ' />
//           </div>
          

//           <div className="feild">
//             <label > Graduation marks </label><br></br>
//             <input     className=' inp' type="password" placeholder='  Graduation marks ' />
//           </div>
          
// <button  className='button'>  Next</button>

            
//         </div>
//       </div> */}
// {/* 
//     </form>
//   </div>


//   </>
//   // )
// // }
// export default Thirdpage;