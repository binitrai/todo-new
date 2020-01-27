import * as actionTypes from "./actions/actionTypes";

const initialState = {
    boardData : null,
    tasks : null,
    loading : true,
    error : false,
    auth : false,
    userId : "",
    userName : "",
    authError : false,
    taskContent : null
}

const reducer = (state= initialState, action) => {
        switch(action.type) {

            case actionTypes.AUTH_FAIL : 
                return {
                    ...state,
                    auth : false,
                    authError : true
                }
            case actionTypes.AUTH_SUCCESS : 
                return {
                    ...state,
                    auth : true,
                    userId : action.userId,
                    userName : action.userName
                }

            case actionTypes.SET_DASHBOARD : 
                return {
                    ...state,
                    boardData : action.data,
                    loading : false
                }

            case actionTypes.SET_TASKS : 
                return {
                    ...state,
                    tasks : action.data,
                    loading : false
                }

            case actionTypes.SET_TASKCONTENT : 
                return {
                    ...state,
                    taskContent : action.data,
                    loading : false
                }
            
            default :
                return state; 
        }
}

export default reducer;