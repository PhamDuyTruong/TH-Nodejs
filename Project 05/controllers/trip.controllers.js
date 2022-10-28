const {Trip, Station} = require("../models") 

const createTrip = async (req, res) => {
    try{
    const {fromStation, toStation, startTime, price} = req.body;
    const newTrip = await Trip.create({fromStation, toStation, startTime, price});
    res.status(201).send(newTrip);
    } catch (error) {
        res.status(500).send(error)
    }
};

const getAllTrip = async (req, res) => {
    try{
    const tripList = await Trip.findAll({
        include: [
            {
                model: Station, 
                as: "from"
            },
            {
                model: Station, 
                as: "to"
            }
        ]
    });
    res.status(200).send(tripList)
    }catch(error){
        res.status(500).send(error);
    }
}

module.exports= {
    createTrip,
    getAllTrip,
}