export const SignInReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_SIGNIN':
            return{
                userToken: action.payload.userToken
            }
        default:
            return state;
    }
}