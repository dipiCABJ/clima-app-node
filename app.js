const axios = require('./Geo Locations/geoLocations');
const clima = require('./Climas/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Descripcion de la ciudad para obtemer el Clima',
        demand: true
    }
}).argv;

//axios.GetGeoLocation(argv.direccion)
//    .then(console.log);
//clima.GetClima(-34.59424, -58.43733)
//    .then(console.log)
//    .catch(console.log);

const GetInfo = async(direccion) => {

    try {
        const resLoc = await axios.GetGeoLocation(direccion);
        const temp = await clima.GetClima(resLoc.lat, resLoc.lng);
        return `El Clima de ${direccion} es de ${temp}.`
    } catch (err) {
        return `No se pudo obtener el Clima de ${direccion}.`
    }
}

GetInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);