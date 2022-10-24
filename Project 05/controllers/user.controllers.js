const { Op } = require("sequelize")
const { User } = require("../models");
const bcrypt = require("bcryptjs");

const createUser = async (req, res) => {
    const {name, email, password, numberPhone} = req.body;
    try {
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);
        const newUser= await User.create({name, email, password: hashPassword, numberPhone});
        res.status(201).send(newUser);
    } catch (error) {
       res.status(500).send(error)
    }
   
};

const login = async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({
        where: {
            email,
        }
    });

    const isAuth = bcrypt.compareSync(password, user.password);
    if(isAuth){
        res.status(200).send({message: "Đăng nhập thành công"});
    }else{
        res.status(500).send({message: "Tài khoản hoặc mật khẩu không đúng"});
    }
}

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
    login,
    getAllUser,
    getDetailUser,
    updateUser,
    deleteUser,
}