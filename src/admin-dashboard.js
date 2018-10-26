import React,{Component} from 'react';
import Sidebar from './sidebar.js';
import { Chart } from "react-google-charts";

import "./admin-dashboard.css";

const data = [
  ["Month", "Orders", { role: "style" }],
  ["JANUARY", 100, "color: gray"],
  ["FEBRUARY", 140, "color: gray"],
  ["MARCH", 160, "color: gray"],
  ["APRIL", 220, "color:gray"],
    ["MAY", 212, "color:gray"],
    ["JUNE", 340, "color:gray"],
    ["JULY", 120, "color:gray"],
    ["AUGUST", 223, "color:gray"],
    ["SEPTEMBER", 122, "color:gray"],
    ["OCTOBER", 242, "color:gray"],
    ["NOVEMBER", 202, "color:gray"],
    ["DECEMBER", 23, "color:gray"],
];

const data2 = [
  ["Category", "Orders", { role: "style" }],
  ["MEN", 200, "#b87333"], // RGB value
  ["WOMEN", 109, "silver"], // English color name
  ["CHILD", 300, "gold"], // CSS-style declaration
];


class Dashboard extends Component{
    render(){
        return(
            <div className="bb">
                <Sidebar/>
                
                <div className="bar">
                    <div className="row">
                <div className="col-sm-12" >
                    <h2 style={{fontSize:'40px',fontFamily:'sans-serif'}}>DASHBOARD</h2>
                    <p style={{}}>Order Overview :</p>
                </div>
                </div>        
                <div className="row a">
                    <div className="col-sm-3 view">
                        <div className="view-data">
                            <i class="fas fa-download view-icons"></i>
                            <h4 style={{marginBottom:'0',fontSize:'40px'}}>1,245</h4>
                            <p style={{marginLeft:'40px'}}>Orders</p>
                        </div>
                    </div>
                    <div className="col-sm-3 view">
                        <div className="view-data">
                            <i class="fas fa-users view-icons"></i>
                            <h4 style={{marginBottom:'0',fontSize:'40px'}}>1,045</h4>
                            <p style={{marginLeft:'40px'}}>Users</p>
                        </div>
                    </div>
                    <div className="col-sm-3 view">
                    <div className="view-data">
                        <i class="fas fa-eye view-icons"></i>
                        <h4 style={{marginBottom:'0',fontSize:'40px'}}>890</h4>
                        <p style={{marginLeft:'40px'}}>New visit</p>
                    </div>
                        </div>
                    <div className="col-sm-3 view">
                    <div className="view-data">
                            <i class="fas fa-money-check view-icons"></i>
                            <h4 style={{marginBottom:'0',fontSize:'40px'}}>11,245</h4>
                            <p style={{marginLeft:'100px'}}>Today's Income</p>
                        </div>
                        </div>
                </div>
                <div className="row" style={{marginTop:"40px"}}>
                    <div className="col-sm-6 text-center" style={{}}>
                        <h5>No. of orders(Monthly)</h5>
                        <Chart chartType="BarChart" width="100%" height="300px" data={data}  />    
                    </div>
                    <div className="col-sm-6 text-center">
                        <h5>No. of orders(Categorical)</h5>
                        <Chart chartType="ColumnChart"  width="100%" height="300px" data={data2}/>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}


export default Dashboard;