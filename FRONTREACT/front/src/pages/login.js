import React from "react";
import * as Components from '../components/Components';
import {useEffect, useState } from 'react'
import {Modal,ModalBody,ModalFooter,Input,Button, ModalHeader} from 'reactstrap'
import axios from "axios"

   
function Login(props) {
  
    const [signIn, toggle] = useState(true)
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [user, setuser] = useState('')
    const [users, setusers] = useState([])
    const [verif, setverif] = useState(false)
   

      const handleChangeName = (e) => {
      setname(e.target.value)
    }
    const handlePassword = (e) => {
      setpassword(e.target.value)
    }
    const handleEmail = (e) => {
      setemail(e.target.value)
    }

 const handleVerifUser = async () => {
  fetch("http://localhost:9000/api/user/loginUser", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.location.href = "./";
        }
      });
 }

  const handleAddUser = async () => {
    let data = {
        name,
        email,
        password,
        
    }
    let datasend = await axios.post("http://localhost:9000/api/user/create",data,{
        headers: {
            "Content-Type": "application/json"
        }
    })
    console.log(datasend.data)
  }
     return(
        <Components.Body>
         <Components.Container>
             <Components.SignUpContainer signinIn={signIn}>
                 <Components.Form>
                     <Components.Title>Create Account</Components.Title>
                     <Components.Input onChange={handleChangeName} value={name} type="text" placeholder='Name' />
                     <Components.Input onChange={handleEmail} value={email} type='email' placeholder='Email' />
                     <Components.Input onChange={handlePassword} value={password} type='password' placeholder='Password' />
                     <Components.Button onClick={handleAddUser} >Sign Up</Components.Button>
                 </Components.Form>
             </Components.SignUpContainer>

             <Components.SignInContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title>Sign in</Components.Title>
                      <Components.Input onChange={handleEmail} value={email} type='email' placeholder='Email' />
                      <Components.Input onChange={handlePassword} value={password} type='password' placeholder='Password' />
                      <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                      <Components.Button onClick={handleVerifUser} >Sigin In</Components.Button>
                  </Components.Form>
             </Components.SignInContainer>

             <Components.OverlayContainer signinIn={signIn}>
                 <Components.Overlay signinIn={signIn}>

                 <Components.LeftOverlayPanel signinIn={signIn}>
                     <Components.Title>Welcome Back!</Components.Title>
                     <Components.Paragraph>
                         To keep connected with us please login with your personal info
                     </Components.Paragraph>
                     <Components.GhostButton onClick={() => toggle(true)}>
                         Sign In
                     </Components.GhostButton>
                     </Components.LeftOverlayPanel>

                     <Components.RightOverlayPanel signinIn={signIn}>
                       <Components.Title>Hello, Friend!</Components.Title>
                       <Components.Paragraph>
                           Enter Your personal details and start journey with us
                       </Components.Paragraph>
                           <Components.GhostButton onClick={() => toggle(false)}>
                               Sigin Up
                           </Components.GhostButton> 
                     </Components.RightOverlayPanel>
 
                 </Components.Overlay>
             </Components.OverlayContainer>

         </Components.Container>
         </Components.Body>
     )
}

export default Login;