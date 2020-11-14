const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=cd4901247992db16e1214f7f6ea23da6&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' and it feels like ' + body.current.feelslike + '. Humidity is ' + body.current.humidity + ', wind speed is ' + body.current.wind_speed + ', visibility is ' + body.current.visibility + '.')
        }
    })
} 

module.exports = forecast