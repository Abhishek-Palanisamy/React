import React, { useState } from 'react'

function Login() {
    const [userName,setuserName]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState(false);  //creating error state
    const formHandler=(event)=>{          //event
        event.preventDefault();      // prevents form from auto submission 

        if(userName.length==0 && password.length==0)
        {
          setError(true);
        }
        
        if(userName && password)
        {
        const loginobj={                 //object creation
            name:userName,              //attributes
            pwd:password
        }
        console.log(loginobj);
        alert(JSON.stringify(loginobj));
      }
    }
  return (
    <>
    <h3>Login</h3>
    <form onSubmit={formHandler}>
    UserName : <input type="text" value={userName} onChange={(e)=>setuserName(e.target.value)} placeholder='Enter Name'></input>
    {error && userName.length==0?   //Using ternary operator
    <label style={{color:'red'}}>UserName is required.</label>:""}<br/>

    Password : <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password'></input>
    {error && password.length==0?   //Using ternary operator
    <label style={{color:'red'}}>Password is required.</label>:""}<br/>
    {error && password.length==0 && password.length<8?
    <label style={{color:'red'}}>Length should be greater than 8</label>:""}<br/>
    <button type='submit'>Login</button>
    </form>
    </>
  )
}

export default Login