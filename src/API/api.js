import axios from 'axios';

//add your server URL here

const URL = process.env.URL;

//const URL ='http://localhost:8080/posts';

export const createPosts= (postData)=>{
    return axios.post(URL,postData);
}

export const getPosts =()=>{
    return axios.get(URL);
};

export const updatePosts = (postData) => {
    return axios.patch(URL,postData);
};

export const deletePosts = (id , public_id) => {
    return axios.delete(URL,{data:{_id:id , public_id:public_id}});
};
