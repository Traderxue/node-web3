const express = require("express")
const cors = require("cors")


const app = express()

app.use(express.json())		//处理json数据
app.use(cors())		//处理跨域请求

const router = require("./router/index.js")
app.use('/api',router)

app.listen(3000,()=>{
	console.log("server is running ar http://127.0.0.1:3000")
})