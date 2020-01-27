import {
    returnData,
    getDataByFieldName,
    __setUpdate
} from "../util";
import i18 from "../i18.services";
import * as DBCONSTANTS from "../constants";
import createBoard from "./boardModal";
import createTask from "./taskModal";
import createComment from "./commentModal";
import {getUserById} from "../userService/loginService";

const getBoardByUserId = userId => {
    let boards = localStorage.getItem(DBCONSTANTS.BOARD_DATA);
    if (!boards) {
        return returnData(false, null, i18.NOT_FOUND);
    } else {
        return getBoardsMapByUserId(userId, JSON.parse(boards));
    }
}

const createNewBoard = (title, createdBy, description) =>  {
    let board = createBoard(title, createdBy, description);
    __setUpdate(DBCONSTANTS.BOARD_DATA, board);
    return returnData(true, board);
}

const getBoardsMapByUserId = (userId, data) => {
    let boards = getDataByFieldName("createdBy", userId, data);
    if (boards.length === 0) {
        return returnData(false, null, i18.NOT_FOUND);
    }
    let boardMap = {};
    boards.forEach(item => {
        boardMap[item.id] = item;
    })
    return returnData(true, boardMap);
}

const createNewTask = (title, description, boardId, userId) => {
    let task = createTask(title, description, boardId, userId);
    __setUpdate(DBCONSTANTS.TASK_DATA, task);
    return returnData(true, task);
}


const getTaskList = (boardId, data) => {
    const tasks = getDataByFieldName("boardId", boardId, data);
    if (tasks.length === 0) {
        return returnData(false, null, i18.NOT_FOUND);
    }
    const comments = localStorage.getItem(DBCONSTANTS.COMMENT_DATA);
    let callAPI = false;
    if (comments) {
        callAPI =  true
    }
    let ret = {};
    tasks.forEach((item, i) => {
        item.commentCount = callAPI ? getDataByFieldName("taskId", item.id, JSON.parse(comments)).length : 0;
        ret[item.id] = item;
    });
    return returnData(true, ret);
}

const getTasksByBoardId = (boardId) => {
    let tasks = localStorage.getItem(DBCONSTANTS.TASK_DATA);
    if (!tasks) {
        return returnData(false, null, i18.NOT_FOUND);
    } else {
        return getTaskList(boardId, JSON.parse(tasks));
    }
}

const getTaskContent = (taskId) => {
    let tasks = localStorage.getItem(DBCONSTANTS.TASK_DATA);
    if (!tasks) {
        return returnData(false, null, i18.NOT_FOUND);
    } else {
        return getTaskByTaskId(taskId, JSON.parse(tasks));
    }
}

const getTaskByTaskId = (taskId, data) => {
    const tasks = getDataByFieldName("id", taskId, data);
    if (tasks.length === 0) {
        return returnData(false, null, i18.NOT_FOUND);
    }
    const comments = localStorage.getItem(DBCONSTANTS.COMMENT_DATA);
    let callAPI = false;
    if (comments) {
        callAPI =  true
    }
    let task = tasks[0];
    task.comment =  callAPI ? getCommentsByTaskId(task.id, JSON.parse(comments)) : null;
    return returnData(true, task);
}

const getCommentsByTaskId = (taskId, data) => {
    const comments = getDataByFieldName("taskId", taskId, data);
    if (comments.length) {
        comments.map(item => {
            item.userInfo = getUserById(item.createdBy).name;
            return item;
        })
        return comments;
    }
    return null;
}

const createNewComment = (taskId, createdBy, text) => {
    let comment = createComment(taskId, createdBy, text);
    __setUpdate(DBCONSTANTS.COMMENT_DATA, comment);
    return returnData(true, comment);
}

const updateTaskStatusService = (status, taskId) => {
    let tasks = localStorage.getItem(DBCONSTANTS.TASK_DATA);
    tasks = JSON.parse(tasks);
    tasks.forEach((task, i) => {
        if (task.id === taskId) {
            tasks[i].status = status;
        }
    });
    localStorage.setItem(DBCONSTANTS.TASK_DATA, JSON.stringify(tasks));
    return status;
}


export {
    getBoardByUserId,
    createNewBoard,
    getTasksByBoardId,
    createNewTask,
    getTaskContent,
    createNewComment,
    updateTaskStatusService
}