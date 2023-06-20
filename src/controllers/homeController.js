const UserModel = require("../models/User")


const getHomepage = async (req, res) => {
    const results = await UserModel.find({})
    results.reverse()
    return res.render('homePage.ejs', { listUsers: results })
}

const getCreateUserPage = (req, res) => {
    return res.render('createUser.ejs')
}

const postCreateUser = async (req, res) => {
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city
    if (email.trim().length > 0 && name.trim().length > 0 && city.trim().length > 0) {
        const results = await UserModel.create({
            email: email.trim(),
            name: name.trim(),
            city: city.trim()
        })
    }
    res.redirect("/")
}

const getUpdateUserPage = async (req, res) => {
    let userId = req.params.id
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city
    const listUser = await UserModel.find({})
    listUser.reverse()
    const userUpdate = await UserModel.findOne({ _id: userId })
    res.render("updateUser.ejs", { listUsers: listUser, userUpdate: userUpdate })
}

const putUpdateUser = async (req, res) => {
    let userId = req.body.id
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city
    if (email.trim().length > 0 && name.trim().length > 0 && city.trim().length > 0) {
        const options = {
            email: email.trim(),
            name: name.trim(),
            city: city.trim()
        }
        const userUpdate = await UserModel.updateOne({ _id: userId }, options)
        res.redirect("/")
    } else {
        res.redirect(`/update/${userId}`)
    }
}

const getDeletePage = async (req, res) => {
    let userId = req.params.id
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city
    const listUser = await UserModel.find({})
    listUser.reverse()
    const userDelete = await UserModel.findOne({ _id: userId })
    res.render("deleteUser.ejs", { listUsers: listUser, userDelete: userDelete })
}

const deleteUser = async (req, res) => {
    let userId = req.body.id
    let resDelete = await UserModel.deleteOne({
        _id: userId
    })
    res.redirect("/")
}




module.exports = {
    getHomepage, postCreateUser, getCreateUserPage
    , getDeletePage, getUpdateUserPage, putUpdateUser
    , deleteUser
}
