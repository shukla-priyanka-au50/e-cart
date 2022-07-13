export const registerNewUserReducer = (state = {}, action) => {

    switch (action.type) 
    {
        case 'USER_REGISTER_REQUEST': return {
            ...state,
            loading: true
        }
        case 'USER_REGISTER_SUCCESS': return {
            ...state,
            loading: false,
            success: true
        }
        case 'USER_REGISTER_FAILED': return {
            ...state,
            loading: true,
            error: 'User Already Registred'
        }

        default:return state
    }
}

export const loginReducer = (state = {}, action) => {

    switch (action.type) 
    {
        case 'USER_LOGIN_REQUEST': return {
            ...state,
            loading: true
        }
        case 'USER_LOGIN_SUCCESS': return {
            ...state,
            loading: false,
            success: true
        }
        case 'USER_LOGIN_FAILED': return {
            ...state,
            loading: false,
            error: 'invalid credintial'
        }

        case 'USER_LOGOUT':return{
            ...state
        }

        default:return state
    }
}


// export const getAllUsersReducer = (state = {users:[]}, action) => {

//     switch (action.type) 
//     {
//         case 'GET_ALLUSERS_REQUEST': return {
//             ...state,
//             loading: true
//         }
//         case 'GET_ALLUSERS_SUCCESS': return {
//             ...state,
//             loading: false,
//             users:action.payload
//         }
//         case 'GET_ALLUSERS_FAILED': return {
//             ...state,
//             loading: false,
//             error: action.payload
//         }

//         default:return state
//     }
// }