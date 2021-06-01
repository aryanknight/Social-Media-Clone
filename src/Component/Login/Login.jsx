import React,{useEffect,useState} from 'react';
import {Container,Typography,Grid,Paper,Button} from '@material-ui/core';
import './Login.css'
import Icon from '../../Images/icon_1.png';
import Icon2 from '../../Images/icon_2.png';
import {GoogleLogin} from 'react-google-login'; 
import {Redirect,useHistory} from 'react-router-dom';

export default function Login({setAuth}) {
    var [icon ,setIcon]=useState(null);
    const history =useHistory();
    useEffect(() => {
        var avtar=Math.random();
        avtar=Math.round(avtar);
        if (avtar%2===0){
            setIcon(Icon);
        }else{
            setIcon(Icon2);
        }    
    },[icon]);

    const googleSuccess= async (res)=>{
        localStorage.setItem("User",JSON.stringify(res.profileObj));
        setAuth(true);
        history.push('/home');
    };

    const googleError=()=>{

    };
    
    return (
    <Grid container justify='center'>
        <Paper id='form' >
            <Typography align="center" variant='h4' color='primary' id='title'>
                Social Media App
            </Typography>
            <div id="avtar">
                <img src={icon}/>
            </div>
            <GoogleLogin
            clientId="514619959932-r5hf6lj8r3v6mcuiih8l940pmc8e89d1.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled}  variant="contained">
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />
        </Paper>
    </Grid>
    )
}
