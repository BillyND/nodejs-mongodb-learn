const express = require('express')
const router = express.Router()
const { getHomepage, postCreateUser, getCreateUserPage, getUpdateUserPage, putUpdateUser, getDeletePage, deleteUser } = require('../controllers/homeController')



//router.Method("./route",handler)
router.get('/', getHomepage)

router.post('/create', postCreateUser)

router.get('/update/:id', getUpdateUserPage)

router.post('/update-user', putUpdateUser)

router.get('/delete/:id', getDeletePage)

router.post('/delete-user', deleteUser)

module.exports = router //export default
