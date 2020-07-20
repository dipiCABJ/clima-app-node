const axios = require('axios');

const GetClima = async(lat, lng) => {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=74baf721a6feb62731cff060d1d537ee&units=metric`);
    return res.data.main.temp;
}

module.exports = {
    GetClima
}