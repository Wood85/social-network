const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
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
}

const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage = {
                message: state.newMessageText,
            }
            return {
                ...state,messageData: [...state.messageData, newMessage],newMessageText: ''
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state, newMessageText: action.newText
            }
        default:
            return state
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText:text})

export default dialogsReducer