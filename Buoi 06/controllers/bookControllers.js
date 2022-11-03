const {Author, Book} = require("../model/model");

const bookController = {
    addBook: async (req, res) => {
        try {
            const newBook = new Book(req.body);
            const saveBook = await newBook.save();
            if(req.body.author){
                const author = Author.findById(req.body.author);
                await author.updateOne({$push: {books:  saveBook._id}});
            }
            res.status(200).json(saveBook);
        } catch (error) {
            res.status(500).json(error);
        }
    }
};

module.exports = bookController;