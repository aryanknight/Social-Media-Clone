export default (currentPostID=null,action) => {
    switch(action.type){
        case 'EDIT':
            console.log(action.postId);
            return action.postId;
        case 'NULL':
            return null;    
        default:
            return currentPostID;
    }
};