import HDWalletProvider from "@truffle/hdwallet-provider";
import yfethabi from './yfethAbi.json'
import Environment from './Environment';
import Web3 from "web3";   
import getWeb3 from "./Providers";
import { getaccount } from "./Providers"; 
const privatekey = "54acfcc23a101895cef5a04b42e4a27006ac62ca08d6b7500e8dbf2f988250ac"; // private key
let provider = new HDWalletProvider(privatekey, "https://data-seed-prebsc-1-s1.binance.org:8545/");
const getTruffleProvider=()=>{
    const web3 = new Web3(provider);
    return web3;
}

const getContractForTruffle=()=>{
    const web3=getTruffleProvider();
    return new web3.eth.Contract(
        yfethabi,
        Environment.YfethContractAddress,
    )
}
// console.log("getContractForTruffle",getContractForTruffle());
const getallvalue = async (Useraccount, txiContract) =>  {
    const useraccount=getaccount();
    console.log("useraccount",useraccount);
    const contract=getContractForTruffle();
    contract.methods
    .balanceOf(useraccount)
    .call()
    .then((balance)=>{
      console.log("balance",balance);   
        return balance;
    }).error((err)=>{
        console.log("error",err)
        return 0;
    })
    contract.methods
    .calculateBNBReward(useraccount)
    .call()
    .then((reward)=>{
         console.log("reward",reward);   
    return reward;
    })
}
const MaxtransactionAmount= async()=>{
   const maxtran= getContractForTruffle().methods._maxTxAmount().call();
   return maxtran
  }
// console.log("Maxtransactionx",MaxtransactionAmount());
const getContractBalance= async()=>{
    const webs3=getWeb3();
    const getBalance=webs3.eth.getBalance(Environment.YfethContractAddress);
    return getBalance;
   
   }
// console.log("getContractBalance",getContractBalance());
 


export default getTruffleProvider;
export {getContractForTruffle,getallvalue,MaxtransactionAmount,getContractBalance};