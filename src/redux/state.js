let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 12},
            {id: 2, message: "It's my first post!", likesCount: 10},
            {id: 3, message: "bla bla bla", likesCount: 100},
            {id: 4, message: "More messages", likesCount: 33}
          ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Nika"},
            {id: 2, name: "Olya"},
            {id: 3, name: "Mariya"},
            {id: 4, name: "Vitaliy"},
            {id: 5, name: "Andrey"}
        ],
        messages: [
            {id: 1, message: "HI"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "Great"}
        ]
    }
}

export default state;