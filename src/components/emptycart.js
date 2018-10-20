import React, {Component} from 'react';

class EmptyCart extends Component{
    render(){
        return(
            <div className="container">
                <div className="col-sm-12 text-center">
                    <img className="carticon" src="https://banner2.kisspng.com/20171217/01f/shopping-cart-png-5a364b6d3217e8.4884266315135076932052.jpg"></img>
                </div>
                <div className="col-sm-12 text-center">
                <h2>Your Shopping Cart is empty</h2>
                </div>
            </div>
        );
    }
}

export default EmptyCart;