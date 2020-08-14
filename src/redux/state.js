import { rerendertree } from "../render";

let state = {
    //profile -> myposts.jsx
    
    profilepage:{
        postData: [
            { id:1, message: 'Hi, how are you?', likesCount: 13},
            { id:2, message: 'Its my first post', likesCount: 15},
            { id:3, message: 'Its my first post', likesCount: 15},
            { id:4, message: 'Its my first post', likesCount: 15},
        ]
    },
    
//dialogs.jsx
    messagespage:{
        dialogsData: [
            { id:1, name: 'dymych', ava: 'https://sun1-95.userapi.com/impg/c858232/v858232662/20d681/hEXagdm28Ok.jpg?size=100x0&quality=90&crop=0,0,1225,1225&sign=f15a33728c9aecb59662a32c088b1d92&ava=1'},
            { id:2, name: 'sasha', ava: 'https://sun1-91.userapi.com/impg/c206624/v206624083/468a5/yJ2ZQA69TnU.jpg?size=100x0&quality=90&crop=52,52,418,418&sign=ed14956eae61fe19dc1bf2c8babf172f&ava=1'},
            { id:3, name: 'sveta', ava: 'https://sun1-95.userapi.com/c834304/v834304762/14a072/Ry6IBqtBFEo.jpg?ava=1'},
            { id:4, name: 'victor', ava: 'https://sun1-86.userapi.com/impg/c858528/v858528047/1c3094/ZWH7OVZTA_A.jpg?size=100x0&quality=90&crop=0,0,540,540&sign=8e5c09da1cd968dcc6b1c85cd6291d0a&ava=1'},
            { id:5, name: 'anna', ava: 'https://sun1-21.userapi.com/c850620/v850620890/dcdfb/fEpkltplsGQ.jpg?ava=1'}
        ],
        dymych:[
            { id:1, message: 'Hi, i am a dymych'},
            { id:2, message: 'what is yuo name?'}
           
        ],
        sveta:[
            { id:1, message: 'Hi, i am a sveta'},
            { id:2, message: 'what is yuo name? do you like react?'},
            { id:2, message: 'what is yuo name? do you like react?'},
            { id:2, message: 'what is yuo name? do you like react?'},
            { id:2, message: 'what is yuo name? do you like react?'},
            { id:2, message: 'what is yuo name? do you like react?'},
    
        ],
        sasha:[
            { id:1, message: 'Hi, i am a sasha'},
            { id:2, message: 'what is yuo name? do you like react?'}
           
        ],
        victor:[
            { id:1, message: 'Hi, i am a victor'},
            { id:2, message: 'what is yuo name? do you like react?'}
           
        ],
        
        
        postD: [
            { id:1, message: 'Hi, how are you?'},
            { id:2, message: 'Its my first post'},
            { id:3, message: 'yo'},
            { id:4, message: 'yoyo'}],

    }


}
export const addPost = (postMessage)=>{
    let newPost={
        id:5,
        message:postMessage,
        likesCount:0
    };
    state.profilepage.postData.push(newPost);
    rerendertree()
}
export default state

