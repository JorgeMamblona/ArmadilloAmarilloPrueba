const fetch = require('node-fetch')

const baseUrl = `https://api.themoviedb.org/3/`
const APIKEY = process.env.APIKEY

const getPopular = (req, res, next) => {

    const url = `${baseUrl}/movie/popular?language=en-US&page=1`

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${APIKEY}`
        }
    };

    fetch(url, options)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error('error:' + err));
}

module.exports = {
    getPopular
}