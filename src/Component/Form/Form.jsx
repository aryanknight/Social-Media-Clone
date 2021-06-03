import React,{useState,useEffect} from 'react';
import {Typography,Button,TextField,Paper,CircularProgress} from '@material-ui/core';
import FileBase64 from 'react-file-base64';
import { useSelector, useDispatch } from "react-redux";
import {createPost,updatePost,deleteId} from '../../Actions/postActions';
import {createPosts,updatePosts }from '../../API/api';
import {useHistory} from 'react-router-dom';
import './Form.css';

export default function Form() {

    const history = useHistory();
    const [postData,setPostData]=useState({creator:'',title:'',caption:'',tags:[], selectedFile:''});
    const dispatch = useDispatch();
    const posts=useSelector((state)=>state.postReducer);
    const editPostId=useSelector((state)=>state.postEdit);
    const [Title,setTitle]=useState('Creating');
    const [buttonTitle,setButtonTitle]=useState('POST');
    const [progress,setProgress] = useState(false);
    
    useEffect(()=>{
        if(editPostId){
            setButtonTitle('UPDATE');
            setTitle('Editing');
            const a=posts.find((post)=>post._id===editPostId);
            setPostData(a);
        }
    },[editPostId]);
    

    const handelSubmit= async (e) => {
        e.preventDefault();    
        if(editPostId){
            setProgress(true);
            const {data}=await updatePosts(postData);
            setPostData({...postData});
            dispatch(updatePost(postData));
            setProgress(false);
            dispatch(deleteId());
        }else{
            setProgress(true);
            const {data}=await createPosts(postData);
            const newPostId=data._id;
            let Tags=postData.tags.split(' ');
            Tags=Tags.map(tag => ('#'+tag+' '));
            console.log(Tags);
            setPostData({...postData,_id:newPostId,tags:Tags});
            dispatch(createPost(postData));
            setProgress(false);
        }   
        clear();
    };

    const clear = () => {
        setPostData({creator:'',title:'',caption:'',tags:'', selectedFile:''});
        dispatch(deleteId());
        setTitle('Creating');
        setButtonTitle('POST');
    };

    const logout = () => {
        localStorage.clear();
        history.push('/');
    };

    return (
        <Paper id='create-form'>
            <Typography align='center' variant='h5'>{Title} Post</Typography>
            <form onSubmit={handelSubmit}>
                <div className='text-fields'><TextField name='title' label='Title' variant='outlined' fullWidth value={postData.title} onChange={(e)=>setPostData({...postData,title:e.target.value})}/></div>  
                <div className='text-fields'>< TextField name='creator' label='Creator Name' variant='outlined' fullWidth value={postData.creator} onChange={(e)=>setPostData({...postData,creator:e.target.value})}/></div>
                <div className='text-fields'>< TextField name='caption' label='Caption' variant='outlined' fullWidth value={postData.caption} onChange={(e)=>setPostData({...postData,caption:e.target.value})}/></div>
                <div className='text-fields'><TextField name='tags' label='Tags seprated by space' variant='outlined' fullWidth value={postData.tags} onChange={(e)=>setPostData({...postData,tags:e.target.value})}/></div>
                <div className='text-fields'><FileBase64 multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile:base64 })} /></div>
                <Button type='submit' variant='outlined'color='primary' fullWidth>{buttonTitle} &nbsp; {progress ? <CircularProgress color="primary" size={20}/> : null}</Button>
                <div className='text-fields'><Button variant='outlined'color='secondary' fullWidth onClick={clear}>Clear</Button></div>
                <div className='text-fields'><Button variant='contained'color='secondary' fullWidth onClick={logout}>Logout</Button></div>
            </form>
        </Paper>
    )
}
