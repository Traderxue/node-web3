const express = require("express")
const routerHandler = require("../routerHandler/index.js")
const router = express.Router()

router.get('/balance',routerHandler.getBalance)

router.get('/getcount',routerHandler.getAccount)

router.post('/send',routerHandler.sendEth)

router.get('/gas',routerHandler.getGas)

router.get('/getblock',routerHandler.getBlock)


module.exports = router