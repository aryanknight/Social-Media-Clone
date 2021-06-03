import React , {useState} from 'react'
import {Grid,Card,CardMedia,CardContent,CardActions,IconButton,Typography,Button,Avatar,CardHeader} from '@material-ui/core';
import MoreIcon from '@material-ui/icons/More';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {makeStyles} from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { useSelector, useDispatch } from "react-redux";
import {editPost , deletePost} from '../../Actions/postActions';
import {deletePosts,updatePosts} from '../../API/api';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './Posts.css';

const useStyles = makeStyles({
    media: {
        height: 0,
        paddingTop: '56.25%',
    }
  });

export default function Post({post}) {
      
      let [likeCount,setLikeCount]=useState(post.likeCount);
      const classes=useStyles();
      const dispatch=useDispatch();
      
      const editing=()=>{
        dispatch(editPost(post._id));
      };
      
      const deleting = async () => {
        const msg = await deletePosts(post._id,post.public_id);
        dispatch(deletePost(post._id));
      };

      const like = async () => {
        await updatePosts({_id:post._id ,likeCount:likeCount});
        setLikeCount(likeCount+1);
      };

      return (
        <Card  className='card'>
                    <CardHeader 
                    avatar={
                        <Avatar src='https://source.unsplash.com/random' />
                    }
                    action={<IconButton title="Edit Post" onClick={editing}><EditIcon className='edit-icon' /></IconButton>}
                    title={<h2 className='font_1'>{post.creator}</h2>} 
                    >                 
                    </CardHeader>
                    <CardMedia className={classes.media} image={post.selectedFile}/> 
                    
                    <CardContent>
                        <h2 className='font '>{post.title}</h2>
                        <h3 className='font_1 margin'>{post.caption}</h3>
                        <h3 className='margin font_1 tags'><i>{post.tags}</i></h3>
                    </CardContent>

                    <CardActions>
                        <IconButton onClick={like} >
                            <FavoriteIcon className='card-icons' />
                            <div className='like-count'>{likeCount}</div>
                        </IconButton>
                        <IconButton onClick={deleting}>
                            <DeleteIcon color='primary'/>
                        </IconButton>
                    </CardActions>
                </Card>
    )
}
