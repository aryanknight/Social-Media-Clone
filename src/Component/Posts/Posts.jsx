import React,{useEffect,useState} from 'react'
import {Grid,LinearProgress , CircularProgress} from '@material-ui/core';
import Post from './Post';
import { useSelector, useDispatch } from "react-redux";
import {getPosts} from '../../API/api';
import {getPost} from '../../Actions/postActions';
import { makeStyles } from '@material-ui/core/styles';


export default function Posts() {
    
    const posts=useSelector((state)=>state.postReducer);   
    const [progress,setProgress]=useState(true); 

    const dispatch=useDispatch();
    useEffect(()=>{
        const fetchingData = async ()=>{
            const {data} =await getPosts();
            setProgress(false);
            dispatch(getPost(data));
        };
        fetchingData();
    },[]);

    return (
        <Grid container spacing={3}>
            {progress ?
            <Grid item xs={12} md={12} lg={12}>
                 <LinearProgress color='secondary' />   
            </Grid>  : null 
            }
            {posts.map((post)=>(
                <Grid item key={post._id} xs={12} md={6}>
                    <Post post={post}/>
                </Grid>
            ))}
            
            
        </Grid>
    );
}
