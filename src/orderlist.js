import React,{Component} from 'react';

import './orderlist.css';
import Sidebar from './sidebar';
import $ from 'jquery';

var Datas = [{
    orderId:1,
    transactionId:93993,
    name:'a',
    date:'1/12/12',
    status:'PENDING'
},{
    orderId:122,
    transactionId:93993,
    name:'c',
    date:'1/12/12',
    status:'FAILED'
},{
    orderId:3,
    transactionId:"93993",
    name:'b',
    date:'1/12/12',
    status:'SHIPPING'
},{
    orderId:8,
    transactionId:"93993",
    name:'d',
    date:'1/12/12',
    status:'DELIVERED'
}]

class OrderList extends Component{
    
    state = {
        orders:Datas,
        a:true,
        name:true
    }
    
    sortTable=(x1)=>{
        var d = []
        if(this.state.a){
            for(var i=0;i<Datas.length;i++){
            for(var j=0;j<Datas.length-1;j++){
                console.log(Datas[j].orderId,Datas[j+1].orderId);
                if(Datas[j].orderId>Datas[j+1].orderId){
                    var temp = Datas[j]; 
                    Datas[j] = Datas[j+1]; 
                    Datas[j+1] = temp; 
                }
            }
        }    
        }else{
         for(var i=0;i<Datas.length;i++){
            for(var j=0;j<Datas.length-1;j++){
                console.log(Datas[j].orderId,Datas[j+1].orderId);
                if(Datas[j].orderId<Datas[j+1].orderId){
                    var temp = Datas[j]; 
                    Datas[j] = Datas[j+1]; 
                    Datas[j+1] = temp; 
                }
            }
        }   
        }
        this.setState({
            orders:Datas,
            a:!this.state.a
        })
    }
    
    sortTableName=(x1)=>{
        var d = []
        console.log(this.state.name);
        if(this.state.name){
            for(var i=0;i<Datas.length;i++){
            for(var j=0;j<Datas.length-1;j++){
                console.log(Datas[j].name,Datas[j+1].name);
                if(Datas[j].name>Datas[j+1].name){
                    var temp = Datas[j]; 
                    Datas[j] = Datas[j+1]; 
                    Datas[j+1] = temp; 
                }
            }
        }    
        }else{
         for(var i=0;i<Datas.length;i++){
            for(var j=0;j<Datas.length-1;j++){
                console.log(Datas[j].name,Datas[j+1].name);
                if(Datas[j].name<Datas[j+1].name){
                    var temp = Datas[j]; 
                    Datas[j] = Datas[j+1]; 
                    Datas[j+1] = temp; 
                }
            }
        }   
        }
        this.setState({
            orders:Datas,
            name:!this.state.name
        })
    }
    
    selectOption=()=>{
        var d = []
        console.log($('#deliveryoption').val());
        for(var i=0;i<Datas.length;i++){
            if($('#deliveryoption').val() == Datas[i].status){
                d.push(Datas[i]);
            }
        }
        this.setState({
            orders:d
        })
    }
    
    
    render(){
        const orders = this.state.orders;
        console.log(this.state.orders.length);
        if(orders.length>0){
            var Items = orders.map((data,i)=>{
                return (<tr>
                    <th scope='row'>{i+1}</th>
                    <td>{data.orderId}</td>
                    <td>{data.transactionId}</td>
                    <td>{data.name}</td>
                    <td>{data.date}</td>
                    <td><span className={data.status}>{data.status}</span></td>
                    <td><button style={{borderRadius:'0'}} className="btn btn-success"><i class="fas fa-search"></i></button>
                        <button className="btn btn-danger" style={{borderRadius:'0'}}><i class="fas fa-times"></i></button>
                        </td>
                </tr>);
            })
        }else{
            var Items = <div className="col-sm-12 text-center">No Data Found</div>
        }
        return(
            <div className="MAIN">
            <Sidebar/>
                <div className="orderlistblock">
                    <div className="orderlist-heading">
                    <p style={{fontWeight:'500'}}>LIST OF ALL ORDERS</p>
                    </div>
                    <hr style={{border:"1px solid lightgray"}}/>
                    <div className="orderlist-searchblock">
                        <div className="form-group row">
                            <div className="search-1 col-sm-8">
                            <label>ORDER ID: </label>
                            <input className="form-control" placeholder="Type to search" type="text"/>
                            </div>
                            <div className="show-options form-group col-sm-4">
                            <label>SHOW:</label>
                            <select className="form-control" id="deliveryoption" onChange={this.selectOption}>
                                <option>ALL</option>
                                <option>SHIPPING</option>
                                <option>FAILED</option>
                                <option>PENDING</option>
                                <option>DELIVERED</option>
                            </select>
                            </div>
                        </div>
                    </div>
                    <div className="list-table">
                        <table class="table table-striped" id="myTable">
                         <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col" onClick={()=>this.sortTable(0)}>ORDER ID <i class="fas fa-sort"></i></th>
                              <th scope="col" onClick={()=>this.sortTable(1)}>TRANSACTION ID <i class="fas fa-sort"></i></th>
                              <th scope="col" onClick={()=>this.sortTableName(2)}>CUSTOMER <i class="fas fa-sort"></i></th>
                                <th scope="col" onClick={()=>this.sortTable(3)} >DATE  <i class="fas fa-sort"></i></th>
                                <th scope="col">STATUS</th>
                                <th scope="col">ACTIONS</th>
                             </tr>
                          </thead>
                            <tbody>
                                {Items}
                            </tbody>
                        </table>
                    
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderList;
