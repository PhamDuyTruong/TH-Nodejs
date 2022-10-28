const { Op } = require("sequelize")
const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

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

    if(user){
        const isAuth = bcrypt.compareSync(password, user.password);
        if(isAuth){
            const token = jwt.sign({email: user.email, type: user.type}, "truong-1234", {expiresIn: 30 * 60}) 
            res.status(200).send({message: "Đăng nhập thành công", token: token});
        }else{
            res.status(500).send({message: "Tài khoản hoặc mật khẩu không đúng"});
        }
    }else {
        res.status(404).send({message: "Không tìm thấy email phù hợp !!!"});
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

const uploadAvatar = async (req, res) => {
   
    const {file} = req;
    const urlImage = `http://localhost:8080/${file.path}`;
    const {user} = req;
    try{
    const userFound = await User.findOne({
            email: user.email
    });
    userFound.avatar = urlImage;
    await userFound.save();
    res.send(userFound);
     }catch(error){
        res.status(500).send(error);
     }
}

module.exports = {
    createUser,
    login,
    getAllUser,
    getDetailUser,
    updateUser,
    deleteUser,
    uploadAvatar,
}