import React,{Component} from "react";

class Items extends Component{
    render(){
        var countItems=0;
      var totalamount=0;
      var items = this.props.datas;
      var Items = this.props.datas.map((data,i)=>{
          countItems+=1;
          totalamount += parseInt(data.price) * parseInt(data.qty);
          return(
              <div className="row item" style={{margin:'20px 0'}}>
              <div className="col-sm-3 item-image">
                <img src={data.image}></img>
              </div>
              <div className="col-sm-6 item-des">
                <span className="itemName">{data.name}</span><br/>
                  <span className="itemqty"><span style={{fontWeight:'bold',color:'gray'}}>Qty: </span>{data.qty}</span> <span onClick={()=>this.props.changeqty(i)} data-toggle="modal" data-target="#myModalQty" className="glyphicon glyphicon-chevron-down" style={{fontSize:'10px',cursor:'pointer'}}></span><br/>
                  <span className="itemSize"><span style={{fontWeight:'bold',color:'gray'}}>Size: </span>{data.size }</span> <span data-toggle="modal" data-target="#myModalSize" onClick={()=>this.props.changeqty(i)} className="glyphicon glyphicon-chevron-down" style={{fontSize:'10px',cursor:'pointer'}}></span>
                  
              </div>
              <div className="col-sm-3 item-price" style={{float:'right',padding:'0px 10px'}}>
                  Rs.{data.price}
              </div>
                  <div className="edit-item">
                  <button className="btn btn-link" onClick={()=>this.props.removeItem(i)}>REMOVE</button>
                  </div>
                  </div>
                )
      })
        
        return(
                
        <div className="container">
            <div className="col-sm-12 offerlist" style={{margin:"10px 0px"}}>
                <span style={{color:'gray',fontWeight:'bold',marginLeft:'10px'}}>Offers</span>
                <ul>
                    <li>Become a Myntra Insider and get Flat Rs 200 cashback on your next PhonePe order on Min spend of Rs 2,000. TCA.</li>
                    <li>10% SuperCash on MobiKwik wallet. TCA.</li>
                    <li>10% Cashback on min spend of Rs 1,700 for first transaction via Airtel Bank. TCA.</li>
                </ul>
            </div>
            <div className="row">
                <div className="col-sm-8 items-list">
                    <div className="row heading">
                        
                        <div className="col-sm-8"><h4>My Shopping Bag({countItems} Items)</h4></div>
                        <div className="col-sm-4"><h4 style={{float:'right'}}>Total:Rs.{totalamount}</h4></div>
                    </div>
                    <div className="items">
                        {Items}
                    </div>
                </div>
                <div className="col-sm-4 total-value">
                
                    <span style={{color:'gray',fontWeight:'bold'}}>Options</span>
                <div className="row" style={{padding:'10px',borderBottom:'1px solid lightgray'}}>
                    <div className="col-sm-6" >
                    <span style={{fontWeight:'bold'}}>Coupons</span>
                    </div>
                    <div className="col-sm-6">
                        <button className="coupon" style={{float:'right'}}>ADD COUPONS</button>
                    </div>
                    
                </div>
                    <span style={{color:'gray',fontWeight:'bold'}}>Price Details</span>
                    <div className="row" style={{padding:'5px'}}>
                        <div className="col-sm-6">Bag Total</div>
                        <div className="col-sm-6 right">Rs.{totalamount}</div>
                    </div>
                    <div className="row" style={{padding:'5px'}}>
                        <div className="col-sm-6">Delivery</div>
                        <div className="col-sm-6 right">FREE</div>
                    </div>
                    <div className="row" style={{fontWeight:'bold',borderTop:'1px solid lightgray',marginTop:'25px',padding:'10px'}}>
                        <div className="col-sm-6">Order Total</div>
                        <div className="col-sm-6 right">Rs.{totalamount}</div>
                    </div>
                    <div className="text-center" style={{padding:'10px'}}>
                    <button className="placeorder-btn">PLACE ORDER</button>
                </div>
                    </div>
            </div> 
            
            <div class="modal fade" id="myModalQty" role="dialog">
    <div class="modal-dialog">
    
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Change Quantity</h4>
        </div>
        <div class="modal-body">
            <ul className="list-group">
                <li className="qty list-group-item" onClick={()=>this.props.changeqtyV("1")}>1</li>
                <li className="qty list-group-item" onClick={()=>this.props.changeqtyV("2")}>2</li>
                <li className="qty list-group-item" onClick={()=>this.props.changeqtyV("3")}>3</li>
                <li className="qty list-group-item" onClick={()=>this.props.changeqtyV("4")}>4</li>
                <li className="qty list-group-item" onClick={()=>this.props.changeqtyV("5")}>5</li>
            </ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>
            
        <div class="modal fade" id="myModalSize" role="dialog">
    <div class="modal-dialog">
    
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Change Size</h4>
        </div>
        <div class="modal-body" style={{cursor:'pointer'}}>
            <ul className="list-group">
                <li className="size list-group-item" onClick={()=>this.props.changesizeV("38")}>38</li>
                <li className="size list-group-item" onClick={()=>this.props.changesizeV("40")}>40</li>
                <li className="size list-group-item" onClick={()=>this.props.changesizeV("42")}>42</li>
                <li className="size list-group-item" onClick={()=>this.props.changesizeV("44")}>44</li>
                <li className="size list-group-item" onClick={()=>this.props.changesizeV("46")}>46</li>
            </ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>    
            
        </div>
            
        );
    }
}

export default Items;