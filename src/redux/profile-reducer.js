
const profileReducer = (state, action)=>{
    
    if (action.type === 'add-post') {
      
        let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0
        };
        state.postData.push(newPost);
        state.newPostText = ""
        state.getrerenderTree(state)
    } else if (action.type === 'update-new-post-text') {
        debugger
        state.newPostText(action.newPost)
    }
    return state;
}
export default profileReducer;