import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import Getweb3 from './Getweb3';
import { getBep20Contract } from './contractHelper'
import Environment from './Environment';
export const ClaimTokens = () => {
    const { account } = useWeb3React();
    const web3 = Getweb3();
    const tokenAddress= Environment.YfethContractAddress
    const contract = getBep20Contract(tokenAddress, web3)
    const ClaimToken = useCallback(async () => {
     const claimTokens = contract.methods.claim().send({ from: account })
        .on('transactionHash', (tx) => { return tx.transactionHash });
        return claimTokens;
       
    }, [account, contract])
   
    return {claimToken:ClaimToken}
    
}

export const WithdrawabaleDividendOf  = () => {
    const { account } = useWeb3React();
    const web3 = Getweb3();
    const tokenAddress= Environment.YfethContractAddress
    const contract = getBep20Contract(tokenAddress, web3)
    const DividendOf = useCallback(async () => {
     const dividendOf = contract.methods.withdrawabaleDividendOf().call()
        return dividendOf;
       
    }, [account, contract])
   
    return {dividendOf:DividendOf}
    
}
export default ClaimTokens;