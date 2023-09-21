const express = require("express")
const cors = require("cors")


const app = express()

app.use(express.json())		//处理json数据
app.use(cors())		//处理跨域请求

// 自定义JSON序列化方法，将BigInt转换为字符串
app.set('json replacer', (key, value) => {
    if (typeof value === 'bigint') {
        return value.toString();
    }
    return value;
});

const router = require("./router/index.js")
app.use('/api',router)

app.listen(3000,()=>{
	console.log("server is running ar http://127.0.0.1:3000")
})