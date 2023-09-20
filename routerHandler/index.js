const {getBalance,getCount,sendEth} = require("../web3Server/server.js")

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
    return res.json({
        code:200,
        msg:"请求成功",
        data:result
    })
}
