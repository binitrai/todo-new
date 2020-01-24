import * as actionTypes from "./actionTypes";
import axios from "axios";
import {getRole} from "./userData";

export const changeRole = (role) => {
    return {
        type : actionTypes.CHANGE_ROLE,
        role : role
    }
} 

export const edit = (id, key) => {
    return {
        type : actionTypes.EDIT_DATA_STATE,
        id : id,
        key : key
    }
}

export const savQuantity = (qty) => {
     return (dispatch, getState) => {
        let temp = getState();
        let data = {...temp.gridData}
        data.data[temp.editData.id][temp.editData.key].qty = qty;
        axios.put('https://inventory-2cd3e.firebaseio.com/GridData.json', data)
            .then( response => {
                dispatch(setInventory(response.data));
            } )
            .catch( error => {
                //console.warn(error);
            } );
    };
}

export const modalAction = (val) => {
    return {
        type : actionTypes.SHOW_HIDE_MODAL,
        val : val
    }
}

export const setInventory = ( inventory ) => {
    return {
        type: actionTypes.SET_INVENTORY,
        inventory: inventory
    };
};

export const fetchDataFailed = () => {
    return {
        type: actionTypes.FETCH_INVENTORY_FAILED
    };
};

export const fetchData = () => {
    return dispatch => {
        axios.get('https://inventory-2cd3e.firebaseio.com/GridData.json')
            .then( response => {
               dispatch(setInventory(response.data));
            } )
            .catch( error => {
                console.warn(error);
                dispatch(fetchDataFailed());
            } );
    };
}


// Login Action Creators
export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId, name, role) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId,
        role : role,
        name : name
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = (cb) => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    localStorage.removeItem("userName");
    localStorage.removeItem("userRole");
    if (typeof cb === "function") {
        cb();
    }
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const auth = (email, password) => {
    return dispatch => {
        //dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD4tFGRmVD9m4HknrOvTxOVnyVxE0cR3tE'

        axios.post(url, authData)
            .then(response => {
                const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
                localStorage.setItem('token', response.data.idToken);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userId', response.data.localId);
                const userData = getRole(email);
                localStorage.setItem("userName", userData.name);
                localStorage.setItem("userRole", userData.role);
                dispatch(authSuccess(response.data.idToken, response.data.localId, userData.name, userData.role));
                dispatch(checkAuthTimeout(response.data.expiresIn));
            })
            .catch(err => {
                dispatch(authFail(err.response.data.error));
            });
    };
};

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId, localStorage.getItem("userName"), localStorage.getItem("userRole")));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
            }   
        }
    };
};