import React,{useContext, useRef} from "react";
import AuthorizationContext from "../Store/AuthorizationContext";
import { useHistory } from "react-router-dom";



const Profile= ()=>{
    const ctx=useContext(AuthorizationContext)   ;
    const history=useHistory();

    const inputpassword=useRef();
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        const password=inputpassword.current.value;

        fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyD0an-iOy1im1Cjd3_OhzCjGooPUxdc7Es",
        {
            method:'POST',
            body:JSON.stringify({
                idToken:ctx.token,
                password:password,
                returnSecureToken:true

            }),
            headers:{
                'Content-Type':'application/json'
            }
       }).then(resp=>{
        if(resp.ok){
            alert("password changed successfully...")
            history.replace('/home')
        }
       })
    }
    return (

        <div  justifyContent="center">

            <h1 style={{fontSize:"17", fontStyle:"bold"}}> Your User Profile</h1>
      <form style={{
            width:"200px",
            height:"300px",
            marginTop:"100px",
            marginleft:"100px",
            marginRight:"50%",
            alignContent:"center",
            backgroundColor:"off-white",
            justifyContent:"center"
          
    }}     onSubmit={onSubmitHandler}>
        <label htmlFor="changepassword"> Enter New Password</label>
        <input type="password" id="changepassworda" minLength="7" ref={inputpassword}></input>
        <button>Change password</button>

        </form>
        </div>
       
        );
}
export default Profile;