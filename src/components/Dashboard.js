import React from 'react'
import './dashboard.css';
import RewardPool from './RewardPool';
import TransactionInfo from './TransactionInfo';

// import getWeb3 from '../utils/Provider';
const Dashboard = () => {
    
  
    return (
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12 text-center">
                    <div className="inner-content-slider">
                        <div className="inner-tile-slider">
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                              <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" ></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                              </ol>
                              <div className="carousel-inner">
                                <div className="carousel-item active">
                                  <img className="d-block w-100" src="assets/img/yfeth-assets/binance-image.png" alt="First slide"/>
                                </div>
                                <div className="carousel-item">
                                  <img className="d-block w-100" src="assets/img/yfeth-assets/binance-image.png" alt="Second slide"/>
                                </div>
                                <div className="carousel-item">
                                  <img className="d-block w-100" src="assets/img/yfeth-assets/binance-image.png" alt="Third slide"/>
                                </div>
                              </div>
                            </div>  
                        </div>
                        <RewardPool/>
                        <TransactionInfo/>
                    </div>
                </div>    
            </div>
        </div>     
        </>
    )
}

export default Dashboard
