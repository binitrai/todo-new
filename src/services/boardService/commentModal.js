import {
    getUUID,
    getCreatedAt
} from "../util";

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

 export default createCommnet;