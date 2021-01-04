const Web3 = require('web3');
let web3 = new Web3('http://localhost:9545');


const networkId = await web3.eth.net.getId();
const chainId = await web3.eth.getChainId();

