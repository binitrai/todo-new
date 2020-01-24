/* 
data = {
	user :
	board :
	task :
	comments :
}

user : {
	id
	name,
	email,
	createdAt
}

board : {
	id,
	createdBy,
	createdAt,
	lastModified,
	title,
	description
}

task : {
	id,
	boardId,
	createdBy,
	createdAt,
	lastModified,
	title,
	description,
	status,
}

comment : {
	id,
	taskId,
	createdBy,
	createdAt,
	lastModified,
	text
}
*/

const getUUID = preStr => {
	let dt = new Date().getTime();
    let uuid = 'xxx-4x-yxx'.replace(/[xy]/g, function(c) {
        let r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return preStr+ uuid;
}

const getCreatedAt = () => new Date().getTime();

const createUser = (name, email) => {
   const user = Object.create(null);
   user.id = getUUID("user");
   user.name = name;
   user.email = email;
   user.createdAt = getCreatedAt();
   user.lastModified = user.createdAt;
   return user;
}


const createBoard = (title, createdBy, description = "") => {
    const board = Object.create(null);
    board.id = getUUID("board");
	board.title = title || board.id;
    board.description = description;
    board.createdAt =  getCreatedAt();
	board.lastModified = board.createdAt;
	board.createdBy = createdBy;
    return board;
 }

 const createTask = (boardId, createdBy, title, description, status = 0) => {
    const task = Object.create(null);
    task.id = getUUID("task");
	task.boardId = boardId;
	task.createdBy = createdBy;
	task.createdAt =  getCreatedAt();
    task.lastModified = task.createdAt;
	task.title = title || task.id;
	task.description = description;
    task.status =  status;
    return task;
 }

 const createCommnet = (taskId, createdBy, text) => {
    const comment = Object.create(null);
    comment.id = getUUID("comment");
	comment.taskId = taskId;
	comment.createdBy = createdBy;
	comment.createdAt =  getCreatedAt();
    comment.lastModified = comment.createdAt;
	comment.text = text;
    return comment;
 }


// Operational Data 
const createUsers = () => {
    const data = [];
    data.push(createUser("binit", "binit@email.com"));
    data.push(createUser("alok", "alok@email.com"));
    return data;
}

const createBoards = () => {
    const data = [];
    data.push(createBoard("Board-1", "binit@email.com"));
    data.push(createBoard("Board-2", "binit@email.com"))
    return data;
}
const createTasks= () => {
    const data = [];
    data.push(createTask("board-1", "binit.rai@email.com", "Task 1", "sample description 1"));
    data.push(createTask("board-1", "binit.rai@email.com", "Task 2", "sample description 2"))
    return data;
}
const createComments = () => {
    const data = [];
    data.push(createCommnet("task-1", "binit.rai@email.com", "sample comment 1"));
    data.push(createCommnet("task-2", "binit.rai@email.com", "sample comment 2"))
    return data;
}

export {
	 createUsers, 
	 createBoards, 
	 createTasks, 
	 createComments,
	 createUser,
	 createBoard,
	 createTask,
	 createCommnet
} 



