
export const getPost=(postData) => {
    return {type:'FETCH_ALL' , post:postData};
};

export const createPost= (postData) => {
    return {type:'CREATE',post:postData};
}

export const editPost = (id) => {
    return {type:'EDIT',postId:id};
};

export const updatePost = (postData) => {
    return {type:'UPDATE' , post:postData};
};

export const deleteId = () => {
    return {type:'NULL'};
};

export const deletePost = (id) => {
    return {type:'DELETE',postId:id};
};