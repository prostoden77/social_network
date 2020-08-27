export const profileReducer = (state, action) => {
    const update_new_message_body = 'update_new_message_body'
    const send_message = 'send_message'
    if (action.type === 'add-post') {
        let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0
        };
        state.push(newPost);
        state.newPostText = ""
    } else if (action.type === 'update-new-post-text') {
        state.newPostText = newPost

    } else if (action.type === update_new_message_body) {
        state.newMessageBody = action.body

    }
    return state;
}