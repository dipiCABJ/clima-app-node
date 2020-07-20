const axios = require('axios');

const GetGeoLocation = async(place) => {
    const urlEncoded = encodeURI(place);
    const instance = axios.create({
        baseURL: `https://geocode.xyz/${urlEncoded}?json=1`
    });

    const res = await instance.get();
    //console.log(res.data);
    if (res.data.error) {
        throw new Error(res.data.error.description)
    }

    const city = `${res.data.alt.loc.city}, ${res.data.alt.loc.countryname}`;
    const lat = res.data.alt.loc.latt;
    const lng = res.data.alt.loc.longt;

    return {
        city,
        lat,
        lng
    }
}

module.exports = {
    GetGeoLocation
}