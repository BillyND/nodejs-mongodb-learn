const UserModel = require("../models/User")

const getAllUsersServices = async (data) => {
    const resAllUser = await UserModel.find(data)
    return resAllUser
}

const createUserServices = async (data) => {
    const resCreate = await UserModel.create(data)
    console.log(">>>check data update", resCreate)

    return resCreate
}

const putUpdateUserServices = async (data) => {
    let id = data.id
    let options = {
        email: data.email,
        name: data.name,
        city: data.city
    }
    const resUpdate = await UserModel.updateOne({ _id: id }, options)
    return resUpdate
}

const deleteUserServices = async (data) => {
    const resDelete = await UserModel.deleteOne({ _id: data })
    return resDelete
}


const postSingleFile = (data) => {
    let sampleFile;
    let uploadPath;
    console.log(">>>check path", __dirname)
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    sampleFile = req.files.sampleFile;
    uploadPath = __dirname + '/fileUpLoad';

    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv(uploadPath, function (err) {
        if (err)
            return res.status(500).send(err);
        res.send('File uploaded!');
    });
}



module.exports = {
    getAllUsersServices,
    createUserServices,
    putUpdateUserServices,
    deleteUserServices,
    postSingleFile,
}
