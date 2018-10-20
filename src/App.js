import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Items from "./components/items.js";
import EmptyCart from "./components/emptycart.js";
import $ from 'jquery'

const datas = [{
    name:"Levis Men Off-White & Blue Slim Fit Solid Casual",
    price:"230",
    qty:2,
    size:38,
    image:"https://rukminim1.flixcart.com/image/832/832/shirt/s/h/y/46-bfrybluesht02-being-fab-original-imaekjr8ymhnxznp.jpeg?q=70"
},{
    name:"Levis Men Off-White & Blue Slim Fit Solid Casual",
    price:"500",
    qty:1,
    size:48,
    image:"https://4.imimg.com/data4/RY/RE/MY-16694305/decent-gents-shirt-500x500.jpg"
},{
    name:"Levis Men Off-White & Blue Slim Fit Solid Casual",
    price:"500",
    qty:1,
    size:48,
    image:"https://4.imimg.com/data4/RY/RE/MY-16694305/decent-gents-shirt-500x500.jpg"
}
]


class App extends Component {
   
    state={
        cart:datas,
        cartIndex:undefined
    }
    

    componentDidMount(){
        for(var i=0;i<this.state.cart.length;i++){
            console.log(this.state.cart[i].name);
        }
    }
    

    changeqty=(i)=>{
        console.log(i);
        this.setState({
            cartIndex:i
        })
        console.log(this.state.cartIndex);
        
    }
    
    changeqtyV=(qty)=>{
        console.log(qty,this.state.cartIndex); 
        var cart = this.state.cart;
        cart[this.state.cartIndex].qty = qty;
        this.setState({
            cart:cart
        })
        
        $('#myModalQty .close').click();
        
        
    }
    
    
    changesizeV=(s)=>{
        console.log(s,this.state.cartIndex); 
        var cart = this.state.cart;
        cart[this.state.cartIndex].size = s;
        this.setState({
            cart:cart
        })
        
//        $('#myModalqty').modal('hide');
        $('#myModalSize .close').click();
        
    }
    
    removeItem=(i)=>{
        const cart = this.state.cart;
        cart.splice(i,1);
        this.setState({
            cart:cart
        })
    }
    
    
    
  render() {
      const status = (this.state.cart.length>0)?true: false;
      
    return (
        <div>
            {status ?(
                <Items datas={this.state.cart} changeqtyV={this.changeqtyV} changesizeV={this.changesizeV} changeqty={this.changeqty} removeItem={this.removeItem}/>
            ):(
                <EmptyCart/>
            )}
            
            
        </div>
    );
  }
}

export default App;
