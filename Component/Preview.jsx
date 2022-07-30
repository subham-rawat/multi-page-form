import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
export default function Preview() {


    const items = JSON.parse(localStorage.getItem('loginDetails'));
    const items1 = JSON.parse(localStorage.getItem('basicDetails'));
    const items2 = JSON.parse(localStorage.getItem('educationDetails'));
    const items3 = JSON.parse(localStorage.getItem('educationDocuments'));


    // firstpage  data
  
    const data = async () => {
    await axios.post("http://localhost:3008/posts", items)
    }

    // second page data

    const seconddata = async () => {
        await axios.post("http://localhost:3008/posts", items1)
        }

    // third page page data

    const thirddata = async () => {
        await axios.post("http://localhost:3008/posts", items2)
    }


    // fourth page page data

    const fourthdata = async () => {
        await axios.post("http://localhost:3008/posts", items3)
    }





    const handle = (e) => {
        e.preventDefault();
        data();
        seconddata();
        thirddata();
        fourthdata()
        alert(" Data submited")
    }





    // console.log(items1, items2, items3);
    Object.entries(items, items1, items2, items3).map((ele, val) => {
        // console.log(ele)
    })

    return (
        <div className="container">
            <>
                <div className='page1' style={{ width: "70%", margin: " 0 auto", height: "125px", border: "solid" }}>
                    {
                        Object.entries(items).map((ele, val) => {
                            console.log(ele);
                            return (
                                <p>{`${ele[0]} : ${ele[1]}`}</p>
                            )
                        })
                    }
                </div>
                <div className='page2' style={{ width: "70%", margin: " 20px auto", height: "125px", border: "solid" }}>
                    {
                        Object.entries(items1).map((ele, val) => {
                            console.log(ele);
                            return (
                                <p>{`${ele[0]} : ${ele[1]}`}</p>
                            )
                        })
                    }
                </div>
                <div className='page3' style={{ width: "70%", margin: " 0 auto", height: "125px", border: "solid" }}>
                    {
                        Object.entries(items2).map((ele, val) => {
                            console.log(ele);
                            return (
                                <p>{`${ele[0]} : ${ele[1]}`}</p>
                            )
                        })
                    }
                </div>
                <div className='page4' style={{ width: "70%", margin: " 0 auto", height: "160px", border: "solid" }}>
                    {
                        Object.entries(items3).map((ele, val) => {
                            console.log(ele);
                            return (
                                <p>{`${ele[0]} : ${ele[1]}`}</p>
                            )
                        })
                    }
                </div>
                <NavLink to="/Fourthpage"> <button className='buttonfinal'>Previous </button></NavLink>
                <button className='buttonfinal' onClick={handle}> Final Submit</button>


            </>
        </div>
    )
}
