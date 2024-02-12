const fetch = require('node-fetch')

const baseUrl = `https://api.themoviedb.org/3/movie`
const APIKEY = process.env.APIKEY

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${APIKEY}`
    }
}

const getPopular = (req, res, next) => {

    const url = `${baseUrl}/popular?language=en-US&page=1`

    fetch(url, options)
        .then(res => res.json())
        .then(json => res.json(json))
        .catch(err => console.error('error:' + err))
}

const getDetails = (req, res, next) => {

    const { id } = req.params

    const url = `${baseUrl}/${id}/credits?language=en-US`;

    fetch(url, options)
        .then(res => res.json())
        .then(json => res.json(json))
        .catch(err => console.error('error:' + err))
}

const getNowPlaying = (req, res, next) => {
    const fetch = require('node-fetch');

    const url = `${baseUrl}/now_playing?language=en-US&page=1`

    fetch(url, options)
        .then(res => res.json())
        .then(json => res.json(json))
        .catch(err => console.error('error:' + err))
}

module.exports = {
    getPopular,
    getDetails,
    getNowPlaying
}