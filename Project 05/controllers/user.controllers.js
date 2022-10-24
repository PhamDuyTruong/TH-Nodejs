const { Op } = require("sequelize")
const { User } = require("../models")

const createUser = async (req, res) => {
    const {name, email, password, numberPhone} = req.body;
    try {
        const newUser= await User.create({name, email, password, numberPhone, type: "client"});
        res.status(201).send(newUser);
    } catch (error) {
       res.status(500).send(error)
    }
   
};

const getAllUser = async (req, res) => {
    const {name} = req.query;

    try {
      if(name){
        const userList =  await User.findAll({
            where:{
                name: {
                    [Op.like]: `%${name}%`
                }
            }
        });
        res.status(200).send(userList);
      }else {
        const userList =  await User.findAll();
        res.status(200).send(userList);
      }
    } catch (error) {
        res.status(500).send(error);
    }
};

const getDetailUser = async (req, res) => {
    const {id} = req.params;
    try {
        const detailUser= await User.findOne({
            where: {
                id,
            }
        });
        res.status(200).send(detailUser);
    } catch (error) {
        res.status(500).send(error);
    };
};

const updateUser = async (req, res) => {
    const {id} = req.params;
    const {name, email, password, numberPhone} = req.body;
    try {
        const detailUser = await User.findOne({
            where: {
                id,
            }
        });
        detailUser.name = name;
        detailUser.email= email;
        detailUser.password = password;
        detailUser.numberPhone = numberPhone;
        await detailUser.save();
        res.status(200).send(detailUser);
    } catch (error) {
        res.status(500).send(error);
    };
}

const deleteUser = async (req, res) => {
    const {id} = req.params;
    try {
       await User.destroy({
            where: {
                id,
            }
        });
        res.status(200).send("Xóa thành công");
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    createUser,
    getAllUser,
    getDetailUser,
    updateUser,
    deleteUser,
}