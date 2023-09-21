# nodejs开发以太坊

nodejs,web3.js开发以太坊<br>
本案例实现主要实现以下功能，并提供接口给前端访问<br>
获取地址余额   获取一个新的钱包   转账   获取gas   获取当前区块信息等功能

## 依赖

web3   ganache  cors   express <br>

## 注意点
```sh
安装ganache 
npm install -g ganache  
启动 ganache 
启动后不要关闭cmd

//需要自定义JSON序列化方法，将BigInt转换为字符串，写在路由前面
app.set('json replacer', (key, value) => {
    if (typeof value === 'bigint') {
        return value.toString();
    }
    return value;
});

```

### 运行

```sh
node app.js
```
