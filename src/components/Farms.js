import React from 'react'
import { Link } from 'react-router-dom';
import './farms.css';

const Farms = () => {
    const [show,setshow]=React.useState(true)
    const showinput=()=>{
        if(show){
            setshow(false)
        }else{
            setshow(true)
          
        }
        // console.log("harvest");
        
    }
    const showenable=()=>{
      // console.log("enable");
    }
  
    return (
        <>
     <section className="main-bg">
        <div className="container-fluid">
          {/* <div className="row">
            <div className="col-sm-5"> */}
              <div className="farm-content">
                <div className="inner-tile text-left">
                  <div className="row brdr">
                    <div className="col-sm-10">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <Link>
                            <img src="assets/img/yfeth-assets/yfeth-eth.svg" alt="" className="img-fluid" />
                            <span> YFBTC/ETH </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-2">
                      <div className="inner-circle">
                        <span>10x</span>
                      </div>
                    </div>
                  </div>
                  <div className="row brdr ptb20">
                    <div className="col-sm-12">
                      <h6 className="grey">MY LP SHARE</h6>
                      <h4>288.1344001</h4>
                    </div>
                  </div>
                  <div className="row ptb20">
                    <div className="col-sm-8">
                      <h6 className="common-g">YFETH <span className="grey">EARN</span>
                      </h6>
                      <h4>0.0000</h4>
                    </div>
                    <div className="col-sm-4">
                      <div className="inner-circle">
                        <button type="button" className="btn btn-common" onClick={showenable} disabled={show}>Harvest</button>
                      </div>
                    </div>
                  </div>
                  {show?
                   <div className="row brdr ptb20">
                   <div className="col-sm-12">
                     <button className="btn-common" onClick={showinput} >Approve Contract</button>
                   </div>
                 </div>:
                                   <div className="row">
                                   <div className="col-sm-8">
                                     <div className="form-group">
                                       <div className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={0} >0</div>
                                     </div>
                                   </div>
                                   <div className="col-sm-4">
                                     <ul className="list-inline text-right">
                                       <li className="list-inline-item">
                                         <button type="button" className="btn-common plus" data-toggle="modal" data-target="#exampleModal1">+</button>
                                         <div className="modal fade" id="exampleModal1" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                           <div className="modal-dialog" role="document">
                                             <div className="modal-content">
                                               <div className="modal-header brdr">
                                                 <h5 className="modal-title" id="exampleModalLabel">Deposite
                                                   YFETH/ETH LP Token</h5>
                                                 <button type="button" className="common-g close" data-dismiss="modal" aria-label="Close">
                                                   <span aria-hidden="true">×</span>
                                                 </button>
                                               </div>
                                               <div className="modal-body">
                                                 <div className="row ptb20">
                                                   <div className="col-sm-12 text-right">
                                                     <h5>371.866585213518513
                                                       YFETH/ETH LP Available
                                                     </h5>
                                                     <div className="form-group">
                                                       <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={0} />
                                                       <div className="inner-max">
                                                         <ul className="list-inline">
                                                           <li className="list-inline-item">
                                                             <span className="size12">YFETH/ETH
                                                               LP</span>
                                                           </li>
                                                           <li className="list-inline-item">
                                                             <button className="btn-common size12">MAX</button>
                                                           </li>
                                                         </ul>
                                                       </div>
                                                     </div>
                                                   </div>
                                                 </div>
                                                 <div className="row ptb20">
                                                   <div className="col-sm-12 text-center">
                                                     <ul className="list-inline">
                                                       <li className="list-inline-item">
                                                         <button className="btn-common">Cancel</button>
                                                       </li>
                                                       <li className="list-inline-item">
                                                         <button className="btn-common">Confirm</button>
                                                       </li>
                                                     </ul>
                                                   </div>
                                                 </div>
                                               </div>
                                             </div>
                                           </div>
                                         </div>
                                       </li>
                                       <li className="list-inline-item">
                                         <button type="button" className="btn-common minus" data-toggle="modal" data-target="#exampleModal2">-</button>
                                         <div className="modal fade" id="exampleModal2" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                           <div className="modal-dialog" role="document">
                                             <div className="modal-content">
                                               <div className="modal-header brdr">
                                                 <h5 className="modal-title" id="exampleModalLabel">Deposite
                                                   YFETH/ETH LP Token</h5>
                                                 <button type="button" className="common-g close" data-dismiss="modal" aria-label="Close">
                                                   <span aria-hidden="true">×</span>
                                                 </button>
                                               </div>
                                               <div className="modal-body">
                                                 <div className="row ptb20">
                                                   <div className="col-sm-12 text-right">
                                                     <h5>371.866585213518513
                                                       YFETH/ETH LP Available
                                                     </h5>
                                                     <div className="form-group">
                                                       <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={0} />
                                                       <div className="inner-max">
                                                         <ul className="list-inline">
                                                           <li className="list-inline-item">
                                                             <span className="size12">YFETH/ETH
                                                               LP</span>
                                                           </li>
                                                           <li className="list-inline-item">
                                                             <button className="btn-common size12">MAX</button>
                                                           </li>
                                                         </ul>
                                                       </div>
                                                     </div>
                                                   </div>
                                                 </div>
                                                 <div className="row ptb20">
                                                   <div className="col-sm-12 text-center">
                                                     <ul className="list-inline">
                                                       <li className="list-inline-item">
                                                         <button className="btn-common">Cancel</button>
                                                       </li>
                                                       <li className="list-inline-item">
                                                         <button className="btn-common">Confirm</button>
                                                       </li>
                                                     </ul>
                                                   </div>
                                                 </div>
                                               </div>
                                             </div>
                                           </div>
                                         </div>
                                       </li>
                                     </ul>
                                   </div>
                                 </div>
                 }

                 
                  <div className="row">
                    <div className="col-sm-12 text-center">
                      <Link className="common-g" type="button" data-toggle="modal" data-target="#exampleModal">ROI</Link>
                      <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header brdr">
                              <h5 className="modal-title" id="exampleModalLabel">ROI</h5>
                              <button type="button" className="close common-g" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                              </button>
                            </div>
                            <div className="modal-body ptb20 text-left">
                              <div className="row">
                                <div className="col-sm-4">
                                  <h5>TIMEFRAME</h5>
                                  <h6 className="grey">1d</h6>
                                </div>
                                <div className="col-sm-4">
                                  <h5>ROI</h5>
                                  <h6 className="grey">0.15%</h6>
                                </div>
                                <div className="col-sm-4">
                                  <h5>YFETH PER $1,000</h5>
                                  <h6 className="grey">0.11</h6>
                                </div>
                              </div>
                              <div className="row ptb20">
                                <div className="col-sm-12 text-center">
                                  <p className="grey">Calculated based on
                                    current rates. Compounding 1x
                                    daily. Rates are estimates
                                    provided for your convenience
                                    only, and by no means represent
                                    guaranteed returns.</p>
                                  <Link className="common-g"> <span> Get
                                      YFETH-ETH LP</span> <img src="assets/img/yfeth-assets/external-link-icon.svg" alt="" className="img-fluid" /> </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/* </div> */}
        {/* </div> */}
      </section>
        </>
    )
}

export default Farms;
