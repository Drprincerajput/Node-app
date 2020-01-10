const geocode = require('./utils/geocode')
const weather = require('./utils/weather')

const address = process.argv[2]
if(!address){
    console.log('Please Provide An Address')
}
else{
geocode(address, (error, {latitude, longitude, location}) => {
    if (error){
        return console.log(error)
    }
    weather(latitude, longitude, (error, Wdata) =>{
        if (error){
            return console.log(error)
        }
        console.log(location)
        console.log(Wdata)
    })
})}