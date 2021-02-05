let initialState = {
    name:'',
    email:'',
    password:''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'setUserData':
            return {
                name:action.name,
                email:action.email,
                password:action.password
            }
        default:
            return state;
    }
}

export default reducer;