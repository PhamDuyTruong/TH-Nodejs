const {Sequelize, DataTypes} = require("sequelize");

const sequelize = new Sequelize("task_management", "root", "truong5437", {
    host: "localhost",
    dialect: "mysql"
});

// Tạo model
const Task = sequelize.define(
    "Task",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false

        },
        status: {
            type: DataTypes.STRING
        }
    }
);

const createTask = async (name, status) => {
    const newTask = await Task.create({
        name,
        status
    });
};
createTask("Học Reactjs", "FINISH");

const getAllTask = async () => {
    const taskList = await Task.findAll();
    console.log("Task list: ", JSON.stringify(taskList, null, 2));
};

// getAllTask();

const getTaskById = async (id) => {
   const task = await Task.findOne({
        where: {
            id,
        }
   });
   console.log("Task: ", JSON.stringify(task, null, 2));
};

//getTaskById(1);

const updateTaskById = async (data, id) => {
   await Task.update(data, {
        where: {
            id
        }
    })
};

// Update task by id
updateTaskById({
    name: "Học lập trình",
    status: "OPEN"
}, 1);

const deleteTaskById = async (id) => {
    await Task.destroy({
        where: {
            id
        }
    })
};

deleteTaskById(8);

// Đồng bộ model
const syncModel = async () => {
    await Task.sync({force: true});
    console.log("Đã đồng bộ task model");
};

// syncModel();

const checkConnect = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection successfully !!!");
    } catch (error) {
        console.log("Kết nối thất bại");
        console.log(error)
    }
}

checkConnect();