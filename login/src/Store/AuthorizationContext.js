import React,{useState} from "react";  


const AuthorizationContext=React.createContext({
    token:'',
    isLoggedin:false,
    login:(token)=>{},
    logout:()=>{}
})

export const AuthorizationProvider=(props)=>{
   const initial_state=localStorage.getItem('token')
   const [istoken,setToken]=useState(initial_state)

    const userIsLoggedin = !!istoken;//return true if token is string
                                  // and not empty

     const loginHandler=(token)=>{
        setToken(token)
        localStorage.setItem('token',token)
     }     
     const logoutHandler=()=>{
        setToken(null)
        localStorage.removeItem('token')
     }    
     
     const context={
        token:istoken,
        isLoggedin:userIsLoggedin,
        login:loginHandler,
        logout:logoutHandler
     }



  return(
    <AuthorizationContext.Provider value={context}>
    {props.children}
    </AuthorizationContext.Provider>

  ) 
}

export default AuthorizationContext;