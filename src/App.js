import React, { useState } from 'react'
import  './App.css'
import bgimage from './bgimage.jpg'
import logo from './logo.png'
import { useNavigate } from 'react-router-dom'
 
  const App=()=> {
    
    const navigation = useNavigate();
  
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');
    
    const handleInputUserName = e => {
      setUserName(e.target.value);
    }
      const handleInputPassword = e => {
        setPassword(e.target.value);  

      }
     
    
    const submitHandler = e  => {
       e.preventDefault();
      
    }
    const submitLogin = ()=>{
      if(userName.length>2 && password.length >2){
        navigation('/welcomepage',{state:userName})
      }
      else{
        alert('Please enter a valid credentials')
      }

      
    }
    
    return (
      <div>
        {console.log(userName,"user",password,"pwd")}
      <img src={bgimage} height="564px" width="450px" alt="bgimg" />
      
      <form className="box" onSubmit={submitHandler}>
        <center>
         <br/><br/><br/><br/><br/>  
        <img src={logo} height="10%" width="10%" alt="logo" />
          <h3>Please sign in</h3>
          <p>Please complete to create your account</p><br /><br/>
          <div className="inputbox">
            <input type="text"  value={userName} onChange={handleInputUserName} size="31" placeholder="Username, email, or employee number" /><br /><br /><br /><br />
           
            <input type="password"  value={password} onChange={handleInputPassword} size="31" placeholder="Password" /><br />
            <div className="terms">
              <input type="checkbox"  /> <label className="log0">I agree with terms and conditions </label><br /><br />
            </div>
          </div>
          <button type="submit" className="log" onClick={submitLogin }>Sign in </button><br /><br /><br /><br />
          <a href="www.google.com"><span className="log2">Having trouble? Get in touch</span></a><br /><br /><br />
          <p className="log1">Terms of use. Privacy policy</p>
        </center>
      </form>
      
    </div>
    )
  }
 export default App;
