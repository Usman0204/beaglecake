import React,{useEffect} from 'react';
import './disruptive.css';
import getWeb3 from '../utils/Providers';
import {getContract} from '../utils/Providers';
import  {getaccount} from '../utils/Providers'
import { ContarctAction } from '../redux/action';
import { useDispatch } from "react-redux";

const DisruptiveTransfer = () => {
    
    const dispatch = useDispatch();
    const [Useraccount, setAccount] = React.useState();
    const [txcontract, settxContract] = React.useState();
    const [checkuser, setcheckuser] = React.useState(false);
    const [amount,setamount]=React.useState();
   
    const onchangeHandlerAmount=(e)=>{
        setamount(e.target.value);
       
    }
    const onchangeHandlerAddress=(e)=>{
        setrecipientAddress(e.target.value)
    }
    console.log("amount",amount);
    const [recipientAddress,setrecipientAddress]=React.useState();
    console.log("recipientAddress",recipientAddress);
    const submit=(e)=>{
        e.preventDefault();
        if(amount===''){
            alert("enter amount")
        }
    }
    const Contract=getContract();

  const ConnectToWallet =async  () => {
    if (checkuser && Useraccount!==undefined) {
      setcheckuser(false);
      console.log("disconnect");
      setAccount(undefined);
    } else {
        const accounts= await getaccount()
      
          console.log("here are the accounts====>", accounts);
          if (accounts) {
            setAccount(accounts[0]);
            const Contract=getContract()
            // console.log("Contract",Contract);
            settxContract(Contract);
          }
          setcheckuser(true);
        }
      
      }
    //   ConnectToWallet();
    //disruptive transfer
    const DisruptiveTransfer=()=>{
        if(amount>=0){
            alert("enter amount")
        }
        const web3=getWeb3()
        if(Useraccount!==undefined && txcontract !==undefined) {
            Contract.methods.disruptiveTransfer(amount,recipientAddress).send(
            {
              from: Useraccount,
              recipientAddress,
              amount,
            }
          ).on("error", (err) => {
            console.log("Error",err);
        
          });
        }
        else{
            ConnectToWallet();
        }
      }



  useEffect(() => {
    if (Useraccount !== undefined && txcontract !== undefined) {
      dispatch(ContarctAction(Useraccount,txcontract))
    }

  }, [Useraccount, txcontract])
 
    return (
        <>
         <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12 text-center">
                    <div class="disrpt-content">

                        <div class="inner-tile">
                            <h4>Disuptive Transfer between 2 wallets <span class="circle">?</span> </h4>
                            <form onSubmit={submit}>
                            <div class="form-group">
                                <input type="text" class="form-control" name="amount" id="exampleInputEmail1" onChange={onchangeHandlerAmount} aria-describedby="emailHelp" placeholder="Recipient (address)"/>
                              </div>
                              <div class="form-group">
                                <input type="number" class="form-control" name="recipientaddress" id="exampleInputEmail1"   onChange={onchangeHandlerAddress} aria-describedby="emailHelp" placeholder="Amount (YFETH)"/>
                               <span class="common-g">Max</span>
                              </div>

                              <button class="btn-common" onClick={DisruptiveTransfer}>
                                  <img src="assets/img/yfeth-assets/send-icon.svg" alt="" class="img-fluid  "/>
                                  <span>{Useraccount?"Send":"Connect Wallet"}</span>
                              </button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default DisruptiveTransfer;
