
require('dotenv').config();
const mongoose = require('mongoose');

var dbState = [{
    value: 0,
    label: "disconnected"
},
{
    value: 1,
    label: "connected"
},
{
    value: 2,
    label: "connecting"
},
{
    value: 3,
    label: "disconnecting"
}];



const connection = async () => {
    const options = {
        user: "adminndl",
        pass: "mmmmmm",
        dbName: "be-trello"
    }
    try {
        await mongoose.connect(
            // "mongodb+srv://adminndl:mmmmmm@cluster0.zinjqyy.mongodb.net"
            "mongodb+srv://adminndl:mmmmmm@be-trello-dev.dtwkkkw.mongodb.net"

            , options);

        const state = Number(mongoose.connection.readyState);
        console.log(dbState.find(f => f.value == state).label, "to db");
        // connected to db
    } catch (error) {
        console.log(">>>error connection", error)
    }
}



module.exports = { connection }