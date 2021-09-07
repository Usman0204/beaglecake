// import Web3 from 'web3'
// import { HttpProviderOptions } from 'web3-core-helpers'
// import { AbiItem } from 'web3-utils'
// import { ContractOptions } from 'web3-eth-contract'
// import getRpcUrl from 'utils/getRpcUrl'
// const RPC_URL = getRpcUrl()
// const httpProvider = new Web3.providers.HttpProvider(RPC_URL, { timeout: 10000 } as HttpProviderOptions)
// const web3NoAccount = new Web3(httpProvider)
// /**
//  * Provides a web3 instance using our own private provider httpProver
//  */
// const getWeb3 = () => {
//   const web3 = new Web3(httpProvider)
//   return web3
// }
// const getContract = (abi: any, address: string, contractOptions?: ContractOptions) => {
//   const web3 = getWeb3()
//   return new web3.eth.Contract((abi as unknown) as AbiItem, address, contractOptions)
// }
// const getWeb3NoAccount = () => {
//   return web3NoAccount
// }
// export { getWeb3, getContract, httpProvider }
// export default web3NoAccount

import Web3 from "web3";
import yfethabi from './yfethAbi.json'
import Environment from './Environment';

const getWeb3=()=>{
    const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
    return web3;
}
const getContract=()=>{
    const web3=getWeb3();
    return new web3.eth.Contract(
        yfethabi,
        Environment.YfethContractAddress
    )
}
// console.log("getContract",getContract());

//In getaccount we receive a promise and resolve it.
const getaccount= ()=>{
    if(window.web3){
        let web3 = new Web3(window.web3.currentProvider);
        window.ethereum.enable();
        return web3.eth.getAccounts();
      }
      return false;
    }
// console.log("getaccount",getaccount());

  export default getWeb3;


export{getaccount,getContract};