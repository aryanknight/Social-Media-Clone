import React,{useEffect} from 'react'
import {Route,Redirect} from 'react-router-dom';

export default function ProtectedRoutes({component:Component,isAuth,...rest}) {

    const user=JSON.parse(localStorage.getItem('User'));
    let userGoogleId=user?.googleId;
    useEffect(()=>{
        console.log(user);
        if(user){
            userGoogleId=user?.googleId;
        }
    },[user]);
    
    return (
        <Route
            {...rest}
            render={(props) => {
                if(isAuth){
                    return <Component/>
                }else{
                    return <Redirect to="/" />
                }
            }}  
        />      
    );
};
