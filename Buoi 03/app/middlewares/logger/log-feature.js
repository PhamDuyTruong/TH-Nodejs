const logFeature = (req, res, next) => {
    console.log('Đây là danh sách khóa học');
    next(); // CHạy xuống middleware tiếp theo
};

module.exports = {logFeature};