const setUserData = (name,email,password) => {
    return {
        type: 'setUserData',
        name:name,
        email: email,
        password:password,
    }
}

export default setUserData;