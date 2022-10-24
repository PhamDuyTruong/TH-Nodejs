const checkEmpty = (req, res, next) => {
    const {fullName, age, numberClass} = req.body;
    if(age && fullName && numberClass){
        next();
    }else{
        res.status(500).send("Không được để trống");
    }
};

const checkNumberClass = (req, res, next) => {
    const {numberClass} = req.body;
    if (numberClass >= 1 && numberClass <= 12) {
        next();
    } else {
        res.status(500).send("numberClass phải từ 1 đến 12");
    }
}

module.exports = {
    checkEmpty,
    checkNumberClass,
}