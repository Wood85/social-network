import profileReducer, {addPost, deletePost} from "./profile-reducer"

let state = {
    posts:[
        {id:0, message: "Hi", likesCount:0},
        {id:1,message: "Hello", likesCount:10},
        {id:2,message: "Aloha", likesCount:15}
    ]
}

test('length of posts should be incremented', () => {
    let action = addPost( "social network" )
    const newState = profileReducer(state,action)
    expect(newState.posts.length).toBe(4)
})

test('message of new post should be correct', () => {
    let action = addPost( "social network" )
    const newState = profileReducer(state,action)
    expect(newState.posts[3].message).toBe("social network")
})

test('after deleting length of messages should be decrement', () => {
    let action = deletePost(1)
    const newState = profileReducer(state,action)
    expect(newState.posts.length).toBe(2)
})

test(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    let action = deletePost(99999)
    const newState = profileReducer(state,action)
    expect(newState.posts.length).toBe(3)
})