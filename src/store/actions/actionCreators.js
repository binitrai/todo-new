import * as actionTypes from "./actionTypes";

import {
    login, 
    setLoginInfoInLocalStorage, 
    removeSessionStorage
} from "../../services/userService/loginService";

import {
    getBoardByUserId,
    createNewBoard,
    getTasksByBoardId,
    createNewTask,
    getTaskContent,
    createNewComment,
    updateTaskStatusService
} from "../../services/boardService/boardService"


export const getBoards= (userId) => {
    return dispatch => {
        // call api to get dashboard
        let response = getBoardByUserId(userId);
        dispatch(setDashboard(response.data));
    };
}

export const setDashboard = (data) => {
    return {
        type : actionTypes.SET_DASHBOARD,
        data : data
    }
}

export const createBoard = (title, createdBy, description) => {
    return dispatch => {
        // call api to create new dashboard
        createNewBoard(title, createdBy, description);
        dispatch(getBoards(createdBy));
    };
}

// tasks reducer
export const getTasks= (boardId) => {
    return dispatch => {
        // call api to get dashboard
        let response = getTasksByBoardId(boardId);
        dispatch(setTasks(boardId, response.data));
    };
}

export const setTasks = (boardId, data) => {
    return {
        type : actionTypes.SET_TASKS,
        data : data,
        boardId: boardId
    }
}

export const createTask = (title, description, boardId, userId) => {
    return dispatch => {
        // call api to create new dashboard
        createNewTask(title, description, boardId, userId);
        dispatch(getTasks(boardId));
    };
}

// task content reducers
export const getTaskWithComments = (taskId) => {
    return dispatch => {
        // call api to get dashboard
        let response = getTaskContent(taskId);
        dispatch(setTaskContent(response.data));
    };
}

export const setTaskContent = (data) => {
    return {
        type : actionTypes.SET_TASKCONTENT,
        data : data
    }
}

export const createComment = (taskId, createdBy, text, boardId) => {
    return dispatch => {
        // call api to create new dashboard
        createNewComment(taskId, createdBy, text);
        dispatch(getTaskWithComments(taskId));
        dispatch(getTasks(boardId));
    };
}

export const updateTaskStatus = (val, taskId, boardId) => {
    return dispatch => {
        // call api to create new dashboard
        updateTaskStatusService(val, taskId);
        dispatch(getTaskWithComments(taskId));
        dispatch(getTasks(boardId));
    };
}
// Login Action Creators
export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (userId, userName) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        userId: userId,
        userName : userName
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = (cb) => {
    removeSessionStorage();
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

export const auth = (name) => {
    return dispatch => {
        const loginResponse = login(name);
        setLoginInfoInLocalStorage(loginResponse);
        dispatch(authSuccess(loginResponse.data.id, loginResponse.data.name));
        dispatch(checkAuthTimeout(loginResponse.expiresIn));
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
                const userName = localStorage.getItem('userName');
                dispatch(authSuccess(userId, userName));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
            }   
        }
    };
};