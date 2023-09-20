import express from "express"

const app = express()

app.use(express.json())		//处理json数据
app.use(cors())		//处理跨域请求

app.listen(3000,()=>{
	console.log("server is running ar http://127.0.0.1:3000")
})