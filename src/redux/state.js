const state = {
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
        ]
    },
    profilePage:{
        posts:[
            {id:0, message: "Hi", likesCount:0},
            {id:1,message: "Hello", likesCount:10},
            {id:2,message: "Aloha", likesCount:15}
        ]
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
}
export default state