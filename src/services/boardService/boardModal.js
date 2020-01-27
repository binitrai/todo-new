import {
    getUUID,
    getCreatedAt
} from "../util";

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

 export default createBoard;