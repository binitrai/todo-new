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

const getUUID = preStr => preStr + new Date().getTime();

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


const createBoard = (title, description = "") => {
    const board = Object.create(null);
    board.id = getUUID("board");
    board.title = title || board.id;
    board.description = description;
    board.createdAt =  getCreatedAt();
    board.lastModified = board.createdAt;
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


 // modal.js


