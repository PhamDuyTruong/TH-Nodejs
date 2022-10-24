// import yargs from 'yargs' // es6
const yargs = require('yargs');
const fs = require("fs"); // file system
const {readAllTask, createTask, readDetailTask, updateTask, removeTaskFromId} = require("./model/task");

yargs.command({
    command: "test",
    handler: () => {
        console.log("test")
    }
});

// Create
yargs.command({
    command: "create",
    builder: {
     title: {
        type: "string"
     },
    description: {
        type: "string"
     },
    },  
    handler: (args) => {
        const {title, description} = args;
        const newTask = createTask(title, description);
        console.log("Da tao moi cong viec thanh cong !!! ", newTask)
    }
});

// read all
yargs.command({
    command: "read-all",
    handler: () => {
        const res = readAllTask();
        console.log("read all: ", res)
    }
});

//read details
yargs.command({
    command: "read-detail",
    builder: {
        id: {
            type: "string"
        }
    },
    handler: (args) => {
        const {id} = args
        const task = readDetailTask(id);
        if(task){
         console.log("Detail task: ", task);
        }else {
          console.log("Not Found !!!")
        }
    }
});

// update
yargs.command({
    command: "update",
    builder: {
        id: {
            type: "string"
        },
        title: {
            type: "string"
         },
        description: {
            type: "string"
         },
    },
    handler: (args) => {
        const {id, title, description} = args;
        const task = updateTask(id, title, description);
        if(task){
            console.log("Update Task: ", task)
        }else {
            console.log("Not Found !!!");
        }
    }
});

// delete
yargs.command({
    command: "delete",
    builder: {
       id: {
        type: "string"
       }
    },
    handler: (args) => {
        const {id} = args;
        const task = removeTaskFromId(id);
        if(task){
            console.log("Delete Task: ", task)
        }else {
            console.log("Not Found !!!");
        }
    }
})

// Luu lai cac lenh 
yargs.parse();