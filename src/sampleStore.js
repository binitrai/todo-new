// initial store

store = {
    userInfo : {},
    boardInfo : {}
}


// user logged In and dont have any board
store = {
    userInfo : {
        loogedIn : true,
        name : "User 1",
        email : "user@email.com",
        id : "user_is"
    },
    boardInfo : {}
}

// user logged In and have board

store = {
    userInfo : {
        loogedIn : true,
        name : "User 1",
        email : "user@email.com",
        id : "user_is"
    },
    boardInfo : {
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
      }
}

// user logged In and open the board  "board980-46-a21" and it have not any tasks
store = {
    userInfo : {
        loogedIn : true,
        name : "User 1",
        email : "user@email.com",
        id : "user_is"
    },
    boardInfo : {
        "board2b3-46-885": {
          "id": "board2b3-46-885",
          "title": "Board-1",
          "description": "",
          "createdAt": 1579804175558,
          "lastModified": 1579804175558,
          "createdBy": "userc5c-44-bef",

        },
        "board980-46-a21": {
          "id": "board980-46-a21",
          "title": "Board-2",
          "description": "",
          "createdAt": 1579804175558,
          "lastModified": 1579804175558,
          "createdBy": "userc5c-44-bef",
          "tasks" : null
        }
      }
}

// user logged In and open the board board980-46-a21 and board has some tasks

store = {
    userInfo : {
        loogedIn : true,
        name : "User 1",
        email : "user@email.com",
        id : "user_is"
    },
    boardInfo : {
        "board2b3-46-885": {
          "id": "board2b3-46-885",
          "title": "Board-1",
          "description": "",
          "createdAt": 1579804175558,
          "lastModified": 1579804175558,
          "createdBy": "userc5c-44-bef",
          "tasks" : {
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
        "board980-46-a21": {
          "id": "board980-46-a21",
          "title": "Board-2",
          "description": "",
          "createdAt": 1579804175558,
          "lastModified": 1579804175558,
          "createdBy": "userc5c-44-bef",
          "tasks" : null
        }
      }
}


// user logged In and open the task task51e-49-a61

store = {
    userInfo : {
        loogedIn : true,
        name : "User 1",
        email : "user@email.com",
        id : "user_is"
    },
    boardInfo : {
        "board2b3-46-885": {
          "id": "board2b3-46-885",
          "title": "Board-1",
          "description": "",
          "createdAt": 1579804175558,
          "lastModified": 1579804175558,
          "createdBy": "userc5c-44-bef",
          "tasks" : {
            "task51e-49-a61": {
              "id": "task51e-49-a61",
              "boardId": "board2b3-46-885",
              "createdBy": "userc5c-44-bef",
              "createdAt": 1579804175559,
              "lastModified": 1579804175559,
              "title": "Task 1",
              "description": "sample description 1",
              "status": 0,
              "commentCount": 2,
              "comments" : {
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
              }
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
        "board980-46-a21": {
          "id": "board980-46-a21",
          "title": "Board-2",
          "description": "",
          "createdAt": 1579804175558,
          "lastModified": 1579804175558,
          "createdBy": "userc5c-44-bef",
          "tasks" : null
        }
      }
}


