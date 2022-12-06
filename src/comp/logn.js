import {React,useState} from 'react'
import './logn.css'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';



function Logn() {

  const navigate = useNavigate();

  const [user,setUser] = useState("");
  const [pass,setPass] = useState("");

  const [loginStatus,setLoginStatus] = useState("");

// const history = useHistory()
  const Loginn = () => {
    Axios.post("http://localhost:3001/login", 
    {EMAIL: user, PASSWORD: pass}).then((response) => {
      // alert("welcome " + user);
      // console.log(response);
      
      if(response.data.Message){
        setLoginStatus(response.data.Message)
      }else{
        // setLoginStatus("wellcome") 
        navigate('./dataRep');
      }

  });
  };

  return (
    
    <div className='out'>
      <h1 className='yelo'>  {loginStatus} </h1>
        <div id="container">
            {/* <form action="login" method="post" id="flogin"> */}
            <div className='login' id="flogin">

                <div className="border-box">
                    <label className='oye'  id="un"></label>
                    <input type="text" name="user" placeholder="Email" id="uname"
                    onChange={(e) => {
                      setUser(e.target.value);
                    }}
                    /><br/>

                    <label  id="ps"></label>
                    <input type="password" name="pass" placeholder="Password" id="upass"
                    onChange={(e) => {
                      setPass(e.target.value);
                    }}
                    /><br/>

                    <button type="submit" value="Login" id="submit" onClick={Loginn}>Login</button>

                    <br/>

                    {/* <a link="text-decoration:none" href="register.html" > </a> */}
                   <div id="heyi"> <Link style={{ textDecoration: 'none', color: 'white'}} to="/register" > New User?</Link> </div>
                </div>
              </div>
              

            {/* </form> */}
        </div>
    </div>
  )
}

export default Logn;