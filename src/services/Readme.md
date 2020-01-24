# Get Services
## data = getBoardsByUserId("userc5c-44-bef") // done
```javascript
{
  "status": true,
  "data": {
    "board2b3-46-885": {
      "id": "board2b3-46-885",
      "title": "Board-1",
      "description": "",
      "createdAt": 1579804175558,
      "lastModified": 1579804175558,
      "createdBy": "userc5c-44-bef"
    },
    "board980-46-a21": {
      "id": "board980-46-a21",
      "title": "Board-2",
      "description": "",
      "createdAt": 1579804175558,
      "lastModified": 1579804175558,
      "createdBy": "userc5c-44-bef"
    }
  },
  "errMsg": false
}
```

## data = getBoardData("board980-46-a21")  // done
```javascript
	{
	"status": true,
	"data": {
		"id": "board980-46-a21",
		"title": "Board-2",
		"description": "",
		"createdAt": 1579804175558,
		"lastModified": 1579804175558,
		"createdBy": "userc5c-44-bef",
		"tasks": null
	},
	"errMsg": false
 }
```
## data = getBoardData("board2b3-46-885")  // done
```javascript
	{
  "status": true,
  "data": {
    "id": "board2b3-46-885",
    "title": "Board-1",
    "description": "",
    "createdAt": 1579804175558,
    "lastModified": 1579804175558,
    "createdBy": "userc5c-44-bef",
    "tasks": {
      "task51e-49-a61": {
        "id": "task51e-49-a61",
        "boardId": "board2b3-46-885",
        "createdBy": "userc5c-44-bef",
        "createdAt": 1579804175559,
        "lastModified": 1579804175559,
        "title": "Task 1",
        "description": "sample description 1",
        "status": 0,
        "commentCount": 2
      },
      "taske4a-4b-b21": {
        "id": "taske4a-4b-b21",
        "boardId": "board2b3-46-885",
        "createdBy": "userc5c-44-bef",
        "createdAt": 1579804175559,
        "lastModified": 1579804175559,
        "title": "Task 2",
        "description": "sample description 2",
        "status": 0,
        "commentCount": 0
      }
    }
  },
  "errMsg": false
}
```
## getCommentsDataByTaskId("taske4a-4b-b21"); // error 

```javascript
{
  "status": false,
  "data": null,
  "errMsg": "NOT FOUND"
}
```
## getCommentsDataByTaskId("task51e-49-a61"); // happy 

```javascript
{
  "status": true,
  "data": {
    "comment646-40-85c": {
      "id": "comment646-40-85c",
      "taskId": "task51e-49-a61",
      "createdBy": "userc5c-44-bef",
      "createdAt": 1579804175560,
      "lastModified": 1579804175560,
      "text": "sample comment 1",
      "userInfo": {
        "id": "userc5c-44-bef",
        "name": "binit",
        "email": "binit@email.com",
        "createdAt": 1579804175557,
        "lastModified": 1579804175557
      }
    },
    "comment795-47-ae1": {
      "id": "comment795-47-ae1",
      "taskId": "task51e-49-a61",
      "createdBy": "userc5c-44-bef",
      "createdAt": 1579804175560,
      "lastModified": 1579804175560,
      "text": "sample comment 2",
      "userInfo": {
        "id": "userc5c-44-bef",
        "name": "binit",
        "email": "binit@email.com",
        "createdAt": 1579804175557,
        "lastModified": 1579804175557
      }
    }
  },
  "errMsg": false
}
```