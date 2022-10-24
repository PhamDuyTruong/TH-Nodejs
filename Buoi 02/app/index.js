const asyncRequest = require("async-request");

const getWeather = async (location) => {
    const accessKey = "0d7b067b142564145effb1cc5776f3f4";
    const url = `http://api.weatherstack.com/current?access_key=${accessKey}&query=${location}`;
    try {
        const res = await asyncRequest(url);
        const data = JSON.parse(res.body);
        const weather = {
            isSuccess: true,
            region: data.location.region,
            country: data.location.country,
            temperature: data.current.temperature,
            wind_speed: data.current.wind_speed,
            precip: data.current.precip,
            cloudcover: data.current.cloudcover
        };
        return weather;
    } catch (error) {
        return {
            isSuccess: false,
            error: error 
        }
    }
  
};

const express = require("express");
const app = express();
const path = require("path");

const pathPublic = path.join(__dirname, "../public");

app.use(express.static(pathPublic));
app.set("view engine", "hbs")

app.get("/", async (req, res) => {
    const {address} = req.query;
    
  if (address) {
    const {
      isSuccess,
      temperature,
      wind_speed,
      precip,
      cloudcover,
      country,
      region,
    } = await getWeather(address);
    res.render("weather", {
      isSearch: true,
      isSuccess,
      temperature: temperature,
      wind_speed,
      precip,
      cloudcover,
      country,
      region,
    });
  } else {
    res.render("weather", {
      isSearch: false,
    });
  }
});

const port = 8800
app.listen(port, () => {
   console.log('Localhost 7000')
})