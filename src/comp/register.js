import React , {useState} from 'react'
import {Link} from "react-router-dom"
// import {Navigate} from 'react-router-dom';
// import { redirect } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
// import Logn from './logn';
import Axios from "axios";


import './register.css';





function Register() {
  
  const [fname,setFname] = useState("");
  const [lname,setLname] = useState("");
  const [uname,setUname] = useState("");
  const [pass,setPass] = useState("");

  const navigate = useNavigate();
  
 
  
  const Regsub = () => {
    Axios.post("http://localhost:3001/register", 
    {FIRST_NAME:fname,LAST_NAME:lname,EMAIL: uname, PASSWORD: pass}).then((response) => {
      navigate('/');
  });
  };

  
  
 

  return (
    <div className="out">
        
        <div className='register' name="regi" id="uue">
            <h2>Registration Form</h2>

            <label  id="fn">First Name :</label>
            <input type="text" name="fname" id="r1" 
              onChange={(e) => {
              setFname(e.target.value);
            }}/><br/>

            <label  id="ln">Last Name :</label>
            <input type="text" name="lname" id="r2"
             onChange={(e) => {
              setLname(e.target.value);
            }}
            /><br/>

            <label  id="un"> Email-id :</label>
            <input type="text" name="uname" id="r3"
            onChange={(e) => {
              setUname(e.target.value);
            }}
            /><br/>

            <label  id="pwd">Password :</label>
            <input type="password" name="pass" id="r4"onChange={(e) => {
              setPass(e.target.value);
            }}/><br/>
            
             <button type="submit" value="Submit" id="button"
            onClick={Regsub}
            >Register</button> 
            <br/><Link style={{ textDecoration: 'none', color: 'white' }} to ="/" id="yes"> back to login </Link>

            <br/>
            </div>
        </div>
  )
}

export default Register