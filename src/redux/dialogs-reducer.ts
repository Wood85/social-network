const SEND_MESSAGE = 'SEND-MESSAGE'

type DialogsDataType = {
    name: string
    id: number
}

type MessageDataType = {
    message: string
}

const initialState = {
    dialogsData: [
        {name: "Dimych", id: 1},
        {name: "Andrey", id: 2},
        {name: "Sveta", id: 3},
        {name: "Sasha", id: 4},
        {name: "Victor", id: 5},
        {name: "Valera", id: 6}
    ] as Array<DialogsDataType>,
    messageData: [
        {message: "Hi"},
        {message: "Hellolp[]l[]l"},
        {message: "Yo"}
    ] as Array<MessageDataType>
}
export type InitialStateType = typeof initialState

const dialogsReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
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

type  SendMessageActionType = {
    type: typeof SEND_MESSAGE,
    newMessageBody: string
}

export const sendMessage = (newMessageBody: string): SendMessageActionType => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer