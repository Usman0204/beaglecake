import React,{useCallback} from 'react';
import { useSelector } from 'react-redux'
import { getContractBalance,ClaimTokens } from '../utils/TruffleProvider';
import useAuth from '../hooks/useAuth'
import { useWeb3React } from '@web3-react/core'
const RewardPool = () => {
    const [balance,setbalance]=React.useState();
    const { login } = useAuth();
    const { account } = useWeb3React();
    const { claimToken } = ClaimTokens()
    const FirstClaimToken = useCallback(async (e) => {
        e.preventDefault();
        if (account) {
            try {
                await claimToken();
            }
            catch (err) {
                return false;
            }
        }
        else {
            login("injected")
        }
    }, [claimToken])
    // const getBalance= async()=>{
    //     const ContractBalance= await getContractBalance();
    //     setbalance(ContractBalance)
    // //  console.log("ContractBalance",ContractBalance);
    // }
    // getBalance();
    // console.log("ContractBalance",getBalance());    
     
    // const ClaimsToken=async()=>{
    //     const c =await Claims()
    //     console.log("c",c)
    // }
    const { reward } = useSelector((state) => state.UserReducer);

  
    return (
        <>
    <section className="secondlast">
        {/* <div className="container-fluid">
            <div className="row"> */}
                <div className="col-sm-12 p_00">
                    <div className="inner-tile-11">
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="inner-content2 text-center">
                                    {/* <h4>Reward Pool</h4> */}
                                    <img src="assets/img/yfeth-assets/reward-pool-image.svg" alt="" className="img-fluid"/>
                                    <h4>{balance}</h4>
                                </div>
                            </div> 
                             <div className="col-sm-9">
                                <div className=" text-center">
                                    <h4>My Reward: <strong>{reward} BNB</strong> </h4>
                                    {/* <h6 className="common-g ptb20">*pool is always changing based on buys, sell, and collects by others, learn more here<span className="br">?</span></h6> */}
                                    <h5 className="ptb20">You will be received {reward} BNB (ather tax)</h5>
                                    <button className="btn-commonclaim" style={{marginTop:'10px'}} onClick={FirstClaimToken}>
                                        <img src="assets/img/yfeth-assets/claim-reward-icon.svg" alt="" className="img-fluid"/>
                                        <span className=""> Claim My Reward</span> 
                                       
                                    </button>
                                  
                                </div>
                            </div>                
                        </div>
                    </div>
                </div>
            {/* </div>
            
        </div> */}
    </section>
            
        </>
    )
}

export default RewardPool
