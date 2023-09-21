const {getBalance,getCount,sendEth,getGasPrice,getBlock} = require("../web3Server/server.js")

exports.getBalance = async (req,res)=>{
    const address = req.body.address
    const balance = await getBalance(address)
    return res.json({
        code:200,
        mag:"请求成功",
        data:balance
    })
}

exports.getAccount = async(req,res)=>{
    const data = await getCount()
    console.log(data)
    return res.json({
        code:200,
        msg:"请求成功",
        data:data
    })
}

exports.sendEth = async (req,res)=>{
    const senderAddress = req.body.senderAddress
    const receiverAddress = req.body.receiverAddress
    const privateKey = req.body.privateKey
    const count = req.body.count
    const result = await sendEth(senderAddress,receiverAddress,privateKey,count)
   if(result ==''){
    return res.json({
        code:400,
        msg:"请求失败"
    })
   }
   return res.json({
    code:200,
    msg:"请求成功",
    data:{
        "hash":result
    }
   })
}

exports.getGas = async (req,res)=>{
    const price = await getGasPrice()
    if(!price){
        return res.json({
            code:"400",
            msg:"请求失败"
        })
    }
    return res.json({
        code:"200",
        msg:"请求成功",
        data:`${price}ETH`

    })
}

//需要再router前面定义JSON序列化方法，将BigInt转换为字符串
exports.getBlock = async (req,res)=>{
    const result =await getBlock()
    if(!result){
        return res.json({
            code:400,
            msg:"请求失败"
        })
    }
    return res.json({
        code:200,
        msg:"请求成功",
        data:result
    })
}