import React from 'react'
import Sidebar from './Sidebar'
import Topnav from './Topnav';
import Dashboard from './Dashboard';
import DisruptiveTransfer from './DisruptiveTransfer';
// import Farms from './Farms';
import Farmswrap from './Farmswrap';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


const Main = () => {
    return (
        <>
        <Router> 
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4 text-center">
            <Sidebar/>
          </div>
          <div className="col-sm-8">
          <Topnav/>
            <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/transfer" component={DisruptiveTransfer} />
            <Route path="/farms" exact component={Farmswrap} />
          </Switch>
            
             
          </div>
          
          </div>
         
          </div>
        </Router> 
        </>
    )
}

export default Main
