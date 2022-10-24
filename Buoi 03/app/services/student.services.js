const {Student} = require("../model")
let studentList = [
    {
        id: 1,
        fullname: "Phạm Duy Trường",
        age: 20,
        numberClass: 12
    },
    {
        id: 2,
        fullname: "Bùi Hồng Dương",
        age: 20,
        numberClass: 12
    },
    {
        id: 3,
        fullname: "Trần Quang Trí",
        age: 18,
        numberClass: 12
    },
    {
        id: 4,
        fullname: "Phạm Bảo Nghi",
        age: 14,
        numberClass: 8
    },
];

const getList = async () => {
    const studentList = await Student.findAll();
    if(studentList){
     return studentList;
    }else{
        return false;
    }
};

const getDetail = async (id) => {
    const student = await Student.findOne({
        where: {
            id
        }
    })
    if(student){
       return student;
    }else{
        return false;
    }
};

const create = async (student) => {
    const newStudent = await Student.create(student);
    return newStudent;
};

const update = async (id, student) => {
   const studentUpdate = await getDetail(id);

    if(studentUpdate){
        studentUpdate.fullName = student.fullName;
        studentUpdate.age = student.age;
        studentUpdate.numberClass = student.numberClass;
        const updateStudent = await studentUpdate.save();
       return updateStudent;
  }else {
    return false;
  }
};

const deleteById = async (id) => {
    const studentDelete = await getDetail(id);
    if(studentDelete){
       await Student.destroy({
        where: {
            id
        }
       });
       return true;
    }else {
       return false;
    }
}

module.exports = {
    getList,
    getDetail,
    create,
    update,
    deleteById
}