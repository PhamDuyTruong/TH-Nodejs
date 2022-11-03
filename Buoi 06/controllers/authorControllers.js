const {Author, Book} = require("../model/model");

const authorController = {
    addAuthor: async (req, res) => {
      try {
            const newAuthor = new Author(req.body);
            const savedAuthor = await newAuthor.save();
            res.status(200).json(savedAuthor);
      } catch (error) { 
        res.status(500).json(error);
      }
      // res.status(200).json(req.body);
    },
    getAllAuthors: async (req, res) =>{
        try {
            const authors = await Author.find();
            res.status(200).json(authors);
        } catch (error) {
            res.status(500).json(error);
        }
    }
};

module.exports = authorController