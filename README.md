New begining

User should be able to create a board.
User should be able to view all boards.
User should be able to create a task under a board.
Each task can have 3 statuses (Pending, In-progress, Done). 
User should be able to filter tasks based on status.
In each task, the user should be able to add comments in it. 
In view board, the user should be able to view all tasks in it (and comments count on each 
task).
In view task, the user should be able to see all previous comments. 

```
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
```
