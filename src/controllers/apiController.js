const { getAllUsersServices, putUpdateUserServices, createUserServices, deleteUserServices } = require("../services/CRUDService")
const UserModel = require("../models/User")
const { uploadSingleFile, uploadMultipleFile } = require("../services/filesServices")

const getApiAllUsers = async (req, res) => {
    const resAllUser = await getAllUsersServices({})
    return res.status(200).json({
        errCode: 0,
        message: "Get all users success!",
        data: resAllUser
    })
}

const getApiUserById = async (req, res) => {
    let userId = req.params.id
    const resUserById = await getAllUsersServices({ _id: userId })
    return res.status(200).json({
        errCode: 0,
        message: "Get user by id success!",
        data: resUserById
    })
}

const createUser = async (req, res) => {
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city
    const resCreate = await createUserServices({ email, name, city })
    return res.status(201).json({
        errCode: 0,
        message: "Create user success!",
        data: resCreate
    })
}

const updateUser = async (req, res) => {
    let userId = req.params.id
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city
    let options = {
        id: userId,
        email: email,
        name: name,
        city: city
    }
    const resUpdate = await putUpdateUserServices(options)
    return res.status(201).json({
        errCode: 0,
        message: "Update user success!",
        data: resUpdate
    })
}

const deleteUser = async (req, res) => {
    let userId = req.params.id
    const resDelete = await deleteUserServices(userId)
    return res.status(201).json({
        errCode: 0,
        message: "Delete user success!",
        data: resDelete
    })
}


const uploadFileApi = async (req, res) => {
    let uploadFile


    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    if (req.files.image.length > 1) {
        uploadFile = await uploadMultipleFile(req.files.image)

    } else {
        uploadFile = await uploadSingleFile(req.files.image)
        console.log(">>>.check upp", uploadFile)
    }

    res.status(200).json({
        errCode: 0,
        message: "Upload file success!",
        data: uploadFile
    })
}



module.exports = {
    getApiAllUsers,
    getApiUserById,
    createUser,
    updateUser,
    deleteUser,
    uploadFileApi
}