type FriendType = {
    ava: string
    name: string
}

const initialState = {
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
        ] as Array<FriendType>
}

type InitialStateType = typeof initialState

const sidebarReducer = (state: InitialStateType = initialState, action: any) => {
    return state
}
export default sidebarReducer