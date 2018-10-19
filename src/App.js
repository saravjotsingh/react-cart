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
}]


class App extends Component {
   
    componentDidMount(){
        console.log("hello")
    }
    
  render() {
      const status = (datas.length>0)?true: false;
      
    return (
        <div>
            {status ?(
                <Items datas={datas}/>
            ):(
                <EmptyCart/>
            )}
            
            
        </div>
    );
  }
}

export default App;
