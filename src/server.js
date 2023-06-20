require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine')
const port = process.env.PORT || 3000;
const hostname = process.env.HOST_NAME;
const webRoutes = require('./routes/web')
const apiRoutes = require('./routes/api')
const { connection } = require('./config/database')
const fileUpload = require('express-fileupload');
const app = express()

// config file upload
app.use(fileUpload());

app.post('/upload', function (req, res) {

});

//config req.body
app.use(express.json()) //for json
app.use(express.urlencoded({ extended: true })); //for form data


//config template engine 
configViewEngine(app)

//declare routes
app.use('/', webRoutes)
app.use('/v1/api', apiRoutes)

//test connection
let testConnect = async () => {
    try {
        await connection()
        app.listen(port, hostname, () => {
            console.log(`Example app listening on http://${hostname}:${port}`)
        })
    } catch (error) {
        console.log(">>>>error", error)
    }
}
testConnect()




