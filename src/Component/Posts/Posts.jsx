import React,{useEffect,useState} from 'react'
import {Grid} from '@material-ui/core';
import Post from './Post';
import { useSelector, useDispatch } from "react-redux";
import {getPosts} from '../../API/api';
import {getPost} from '../../Actions/postActions';

export default function Posts() {
    
    const posts=useSelector((state)=>state.postReducer);    

    const dispatch=useDispatch();
    useEffect(()=>{
        const fetchingData = async ()=>{
            const {data} =await getPosts();
            dispatch(getPost(data));
        };
        fetchingData();
    },[]);

    return (
        <Grid container spacing={3}>

            {posts.map((post)=>(
                <Grid item key={post._id} xs={12} md={6}>
                    <Post post={post}/>
                </Grid>
            ))}
            
        </Grid>
    );
}
