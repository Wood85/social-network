let store = {
    _state: {
        dialogsPage: {
            dialogsData: [
                {name: "Dimych", id: 1},
                {name: "Andrey", id: 2},
                {name: "Sveta", id: 3},
                {name: "Sasha", id: 4},
                {name: "Victor", id: 5},
                {name: "Valera", id: 6}
            ],
            messageData: [
                {message: "Hi"},
                {message: "HelloMKPOKP[LKP[L []Oa-[-----------------------kjkkkkkkkkkkkkkkkkkkkkkkkkkkkjnholjjokAKPAkpALK"},
                {message: "Yo"}
            ],
            newMessageText:''
        },
        profilePage:{
            posts:[
                {id:0, message: "Hi", likesCount:0},
                {id:1,message: "Hello", likesCount:10},
                {id:2,message: "Aloha", likesCount:15}
            ],
            newPostText:''
        },
        sidebar: {
            friends:
                [
                    {
                        ava: "https://illustrators.ru/uploads/illustration/image/1232594/main_%D1%8B%D1%8B%D1%8B%D1%8B.png",
                        name: 'Andrew'
                    },
                    {
                        ava: "https://shutniki.club/wp-content/uploads/2019/12/ava_dlya_zhenschiny_3_22073642.jpg",
                        name: 'Sasha'
                    },
                    {ava: "https://www.blast.hk/attachments/74776/", name: 'Sveta'}
                ]
        }
    },
    getState(){
        return  this._state
    },
    _callSubscriber() {
        console.log('State changed')
    },
    addPost () {
        const newPost = {
            id:5,
            message: this._state.profilePage.newPostText,
            likesCount:0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
     updateNewPostText (newText){
        this._state.profilePage.newPostText = newText
         this._callSubscriber(this._state)
    },
    addMessage () {
        const newMessage = {
            message: this._state.dialogsPage.newMessageText,
        }
        this._state.dialogsPage.messageData.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._callSubscriber(this._state)
    },
    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText
        this._callSubscriber(this._state)
    },
    subscribe (observer) {
        this._callSubscriber = observer
    }
}


// let rerenderEntireTree = () => {
//     console.log('State changed')
// }
//
// const state = {
//     dialogsPage: {
//         dialogsData: [
//             {name: "Dimych", id: 1},
//             {name: "Andrey", id: 2},
//             {name: "Sveta", id: 3},
//             {name: "Sasha", id: 4},
//             {name: "Victor", id: 5},
//             {name: "Valera", id: 6}
//         ],
//         messageData: [
//             {message: "Hi"},
//             {message: "HelloMKPOKP[LKP[L []Oa-[-----------------------kjkkkkkkkkkkkkkkkkkkkkkkkkkkkjnholjjokAKPAkpALK"},
//             {message: "Yo"}
//         ],
//         newMessageText:''
//     },
//     profilePage:{
//         posts:[
//             {id:0, message: "Hi", likesCount:0},
//             {id:1,message: "Hello", likesCount:10},
//             {id:2,message: "Aloha", likesCount:15}
//         ],
//         newPostText:''
//     },
//     sidebar: {
//         friends:
//             [
//                 {
//                     ava: "https://illustrators.ru/uploads/illustration/image/1232594/main_%D1%8B%D1%8B%D1%8B%D1%8B.png",
//                     name: 'Andrew'
//                 },
//                 {
//                     ava: "https://shutniki.club/wp-content/uploads/2019/12/ava_dlya_zhenschiny_3_22073642.jpg",
//                     name: 'Sasha'
//                 },
//                 {ava: "https://www.blast.hk/attachments/74776/", name: 'Sveta'}
//             ]
//     }
// }
// window.state = state
// export const addPost = () => {
//     const newPost = {
//         id:5,
//         message: state.profilePage.newPostText,
//         likesCount:0
//     }
//     state.profilePage.posts.push(newPost)
//     state.profilePage.newPostText = ''
//     rerenderEntireTree(state)
// }
// export const updateNewPostText = (newText) => {
//     state.profilePage.newPostText = newText
//     rerenderEntireTree(state)
// }
// export const addMessage = () => {
//     const newMessage = {
//         message: state.dialogsPage.newMessageText,
//     }
//     state.dialogsPage.messageData.push(newMessage)
//     state.dialogsPage.newMessageText = ''
//     rerenderEntireTree(state)
// }
// export const updateNewMessageText = (newText) => {
//     state.dialogsPage.newMessageText = newText
//     rerenderEntireTree(state)
// }
//
// export const subscribe = (observer) => {
//     rerenderEntireTree = observer
// }

export default store

window.store = store