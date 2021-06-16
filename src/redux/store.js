const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

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
    _callSubscriber() {
        console.log('State changed')
    },

    getState(){
        return  this._state
    },
    subscribe (observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if(action.type==='ADD-POST') {
            const newPost = {
                id:5,
                message: this._state.profilePage.newPostText,
                likesCount:0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        }else if (action.type==='UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }else if(action.type==='ADD-MESSAGE') {
            const newMessage = {
                message: this._state.dialogsPage.newMessageText,
            }
            this._state.dialogsPage.messageData.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this._state)
        }else if (action.type==='UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newText
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT,newText:text})
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText:text})

export default store

window.store = store