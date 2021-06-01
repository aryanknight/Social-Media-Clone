
export default (posts=[],action) => {
    switch (action.type){
        case 'FETCH_ALL':
            return action.post;
        case 'CREATE':
            return [...posts,action.post];    
        case 'UPDATE':
            return posts.map((posted) => (posted._id == action.post._id ? action.post : posted));    
        case 'DELETE':
            return posts.filter((posted) => (posted._id !== action.postId));    
        default :
            return posts;    
    }

};