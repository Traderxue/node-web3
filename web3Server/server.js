const {Web3} = require("web3")

const web3 = new Web3("http://127.0.0.1:8545")

const getBalance = async (address)=>{
    const res = await web3.eth.getBalance(address)
    const balance = parseFloat(web3.utils.fromWei(res,'ether')).toFixed(3)
    return balance
}

const getCount = async ()=>{
    const res = await web3.eth.accounts.create()
    return res
}


const sendEth = async(senderAddress,receiverAddress,privateKey,mount)=>{

const amountToSend = web3.utils.toWei(mount, 'ether'); // 替换为你要发送的以太数量
const gasPrice = web3.utils.toWei('500000', 'gwei'); // 替换为Gas价格
const gasLimit = 21000; // 替换为Gas限制
const chainId = 1337; // 替换为你的本地测试链的chainId

// 构建交易对象
const transactionObject = {
  from: senderAddress,
  to: receiverAddress,
  value: amountToSend,
  gasPrice: gasPrice,
  gas: gasLimit,
  nonce: await web3.eth.getTransactionCount(senderAddress),
  chainId: chainId,
};

// 签名交易
const signedTransaction = await web3.eth.accounts.signTransaction(transactionObject, privateKey);

const res = ""
// 发送交易
web3.eth.sendSignedTransaction(signedTransaction.rawTransaction)
  .on('transactionHash', (hash) => {
    console.log('交易哈希:', hash);
  })
  .on('receipt', (receipt) => {
    console.log('交易收据:', receipt);
    res=receipt
  })
  .on('error', (error) => {
    console.error('交易错误:', error);
  });
}


module.exports = {
    getBalance,
    getCount,
    sendEth
}