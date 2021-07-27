const SEND_MESSAGE = 'SEND-MESSAGE'

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
    {message: "Hellolp[]l[]l"},
    {message: "Yo"}
]
}

const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage = {
                message: action.newMessageBody,
            }
            return {
                ...state,messageData: [...state.messageData, newMessage]
            }
        default:
            return state
    }
}

export const sendMessage = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer