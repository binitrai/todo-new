import * as actionTypes from "./actions/actionTypes";
const initialState = {
    role : "manager",
    showHideModal : false,
    editInput : 0,
    editData : {
        key : "",
        id : ""
    },
    gridData : {},
    loading : true,
    error : false,
    auth : false,
    name : "Manager",
    authError : false
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
                    role : action.role,
                    name : action.name
                }
            case actionTypes.CHANGE_ROLE : 
                return {
                    ...state,
                    role : action.role
                }

            case actionTypes.SHOW_HIDE_MODAL : 
                return {
                    ...state,
                    showHideModal : action.val
                }
            
            case actionTypes.EDIT_DATA_STATE : 
                return {
                    ...state,
                    showHideModal : true,
                    editData : {
                        key : action.key,
                        id : action.id
                    },
                    editInput : state.gridData.data[action.id][action.key].qty
                }

            case actionTypes.SET_INVENTORY : 
            return {
                ...state,
                gridData : action.inventory,
                loading : false
            }
            default :
            return state;
            
        }
}

export default reducer;