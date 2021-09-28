import React from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';
import { MaxtransactionAmount } from '../utils/TruffleProvider';


const TransactionInfo = () => {
    // const [maxAmount,setmaxAmount]=React.useState()
    // const getMaxAmount= async()=>{
    //     const amount= await MaxtransactionAmount();
    //     setmaxAmount(amount);
    // }
    // getMaxAmount();
    return (
        <>
        <section className="last-section">
        {/* <div className="container-fluid"> */}
          <div className="row ptb20">
                <div className="col-sm-6 p_00">
                    <div className="inner-tile-11">
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="inner-content2 text-center">
                                   
                                    <img src="assets/img/yfeth-assets/max-transaction-image.svg" alt="" className="img-fluid"/>
                                    
                                </div>
                            </div> 
                             <div className="col-sm-9">
                                <div className=" text-center">
                                    <h5>Max Transaction Amount</h5>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <Link>
                                            {/* {maxAmount} */}
                                                <span className="size">BEAGLECAKE </span>&nbsp;
                                                <img src="assets/img/yfeth-assets/copy-icon.svg" alt="" className="img-fluid"/>
                                            </Link>
                                        </li>
                                         {/* <li className="list-inline-item">
                                            <span className="common-g">|</span>
                                        </li>

                                         <li className="list-inline-item">
                                           <Link>
                                            <span className="size">BNB 1.7436</span>&nbsp;
                                            <img src="assets/img/yfeth-assets/copy-icon.svg" alt="" className="img-fluid"/>
                                               
                                           </Link>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>                
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 p_00">
                    <div className="inner-tile-11">
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="inner-content2 text-center">
                                   
                                    <img src="assets/img/yfeth-assets/total-liquidity-pool-image.svg" alt="" className="img-fluid"/>
                                    
                                </div>
                            </div> 
                             <div className="col-sm-9">
                                <div className=" text-center">
                                    <h5>Total Liquidity Pool</h5>
                                  <ul className="list-inline">
                                        <li className="list-inline-item">
                                            {/* <Link>
                                                <span className="size">YFETH 100,000,000,000</span>
                                                <img src="assets/img/yfeth-assets/copy-icon.svg" alt="" className="img-fluid"/>
                                            </Link> */}
                                            <span>$ 123765658</span>
                                        </li>
                                         {/* <li className="list-inline-item">
                                            <span className="common-g">|</span>
                                        </li> */}

                                         <li className="list-inline-item">
                                           {/* <Link>
                                            <span className="size">BNB 1.7436</span>
                                            <img src="assets/img/yfeth-assets/copy-icon.svg" alt="" className="img-fluid"/>
                                               
                                           </Link> */}
                                        </li>
                                    </ul>
                                </div>
                            </div>                
                        </div>
                    </div>
                </div>
            </div>

            <div className="row ptb20">
                <div className="col-sm-6 p_00">
                    <div className="inner-tile-11">
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="inner-content2 text-center">
                                   
                                    <img src="assets/img/yfeth-assets/total-bnb-image.svg" alt="" className="img-fluid"/>
                                    
                                </div>
                            </div> 
                             <div className="col-sm-9">
                                <div className=" text-center">
                                    <h5>Total BNB in liquidity pool</h5>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <Link>
                                                <span className="size">BNB 100,000,000,000</span>
                                                {/* <img src="assets/img/yfeth-assets/copy-icon.svg" alt="" className="img-fluid"/> */}
                                            </Link>
                                        </li>
                                         <li className="list-inline-item">
                                            <span className="common-g">|</span>
                                        </li>

                                         <li className="list-inline-item">
                                           <Link>
                                            <span className="size">BUSD 1.7436</span>
                                            {/* <img src="assets/img/yfeth-assets/copy-icon.svg" alt="" className="img-fluid"/> */}
                                               
                                           </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>                
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 p_00">
                    <div className="inner-tile-11">
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="inner-content2 text-center">
                                   
                                    <img src="assets/img/yfeth-assets/current-one-mil-image.svg" alt="" className="img-fluid"/>
                                    
                                </div>
                            </div> 
                             <div className="col-sm-9">
                                <div className=" text-center">
                                    <h5> BEAGLECAKE Price</h5>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            {/* <Link>
                                                <span className="size">YFETH 100,000,000,000</span>
                                                <img src="assets/img/yfeth-assets/copy-icon.svg" alt=""  className="img-fluid"/>
                                            </Link> */}
                                               <span>$ 0.0023567789</span>
                                        </li>
                                         {/* <li className="list-inline-item">
                                            <span className="common-g">|</span>
                                        </li> */}

                                         {/* <li className="list-inline-item">
                                           <Link>
                                            <span className="size">BNB 1.7436</span>
                                            <img src="assets/img/yfeth-assets/copy-icon.svg" alt="" className="img-fluid"/>
                                               
                                           </Link>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>                
                        </div>
                    </div>
                </div>
            </div>
            
        {/* </div> */}
    </section>
            
        </>
    )
}

export default TransactionInfo
