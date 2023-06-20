const express = require('express')
const router = express.Router()
const { getApiAllUsers, getApiUserById, updateUser, createUser, deleteUser, uploadFileApi } = require('../controllers/apiController')
const { postSingleFile } = require('../services/CRUDService')



//router.Method("./route",handler)
router.get('/users', getApiAllUsers)

router.get('/users/:id', getApiUserById)

router.post('/create-user', createUser)

router.put('/update-user/:id', updateUser)

router.delete('/delete-user/:id', deleteUser)

router.post('/files', uploadFileApi)


module.exports = router //export default
