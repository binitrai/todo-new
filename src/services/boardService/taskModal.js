import {
    getUUID,
    getCreatedAt
} from "../util";

const createTask = (title, description, boardId, createdBy, status = 0) => {
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

 export default createTask;
