import {
    createUsers, 
	createBoards, 
	createTasks, 
	createComments,
} from "./dataModal";
import persistData from "./sampleData.js/index.js";

const data = {
    user : createUsers(),
    board : createBoards(),
    task : createTasks(),
    comment : createComments()
}




// APIS :
// getBoardsByUserId
// getTasksByBoardId
// getCommentsByTaskId
// getUserById

//setUpdateBoard
//setUpdateTask
//setUpdateComment
//setUpdateUser
const NOT_FOUND = "NOT FOUND";

const getData = (field = false)  => {
    if (field === false) {
        return persistData
    }
    return persistData[field];
}

const getDataByFieldName = (fieldName, fieldValue, data) => {
    let ret = data.filter(item => item[fieldName] === fieldValue);
    return ret;
}

const getUserById = (id, data) => {
    let ret = getDataByFieldName("id", id, data);
    return ret[0];
}

const getBoardsByUserId = (userId) => {
    let data = getData().board;
    let boards = getDataByFieldName("createdBy", userId, data);
    if (boards.length === 0) {
        return returnData(false, null, NOT_FOUND);
    }
    let boardMap = {};
    boards.forEach(item => {
        boardMap[item.id] = item;
    })
    return returnData(true, boardMap);
}

const getTasksByBoardId = (boardId, data, withCommentCount = false) => {
    const tasks = getDataByFieldName("boardId", boardId, data);
    if (withCommentCount === false) {
        return tasks;
    }
    tasks.forEach((item, i) => {
        tasks[i].commentCount = getCommentsByTaskId(item.id).length;
    });
    return tasks;
}

const getCommentsByTaskId = (taskId, data = false) => {
    if (data ===  false) {
        data = getData("comment");
    }
    let ret = getDataByFieldName("taskId", taskId, data);
    return ret;
}

const getBoardData = (boardId) => {
    let data = getData();
    let board = getDataByFieldName('id', boardId, data.board);
    if (board.length === 0) {
        return returnData(false, null, NOT_FOUND);
    }
    board = board[0];
    let tasks = getTasksByBoardId(boardId, data.task, true);
    if (tasks.length) {
        board.tasks = {};
        tasks.forEach(task => {
            board.tasks[task.id] = task;
        })
    } else  {
        board.tasks = null;
    }
    return returnData(true, board);
}

const getTaskData = (taskId) => {
    let data = getData();
    let task = getDataByFieldName('id', taskId, data.task);
    if (task.length === "0") {
        return returnData(false, null, NOT_FOUND);
    }
    task = task[0];
    task.comments = [];
    let comments = getCommentsByTaskId(taskId, data.comment);
    if (comments.length) {
        comments.forEach((item, i) => {
            comments[i].userInfo = getUserById(item.createdBy, data.user)
        });
        task.comments =  comments;
    }
    return returnData(true, task);
}

const getCommentsDataByTaskId = (taskId) => {
    let data = getData();
    let comments = getCommentsByTaskId(taskId, data.comment);
    if (comments.length) {
        let ret = {};
        comments.forEach((item, i) => {
            ret[item.id] = item;
            ret[item.id].userInfo = getUserById(item.createdBy, data.user)
        });
        return returnData(true, ret);
       
    } else  {
        return returnData(false, null, NOT_FOUND);
    }
} 
const returnData = (status, data, errMsg = false) => {
    const ret = {
        status : status,
        data : data,
        errMsg : errMsg
    }
    return ret;
}

export default getCommentsDataByTaskId("task51e-49-a61");