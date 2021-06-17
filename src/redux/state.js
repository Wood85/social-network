import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";

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

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)

    }
}

export default store

window.store = store