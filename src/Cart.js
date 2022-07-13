import React from "react";
import CartItem from "./CartItem";


class Cart extends React.Component {
    constructor (){
        super();
        this.state = {
           products: [
            {
              price: 99,
              title: 'watch',
              qty: 0,
              img: '',
              id: 1
            },
            {
              price: 999,
              title: 'Mobile Phone',
              qty: 10,
              img: '',
              id: 2
            },
            {
              price: 999,
              title: 'Laptop',
              qty: 4,
              img: '', 
              id: 3
            }
           ]
        }
       // this.increaseQuantity = this.increaseQuantity.bind(this);
    //    this.testing();
    }

    // Increase the quantity using function
    handleIncreaseQuantity = (product) => {
        console.log('Hey please Increase the qty of', product);
        const { products } = this.state;
        const index = products.indexOf(product);

        products[index].qty += 1;

        this.setState({
            products: products
        })
    }
    render (){
        const { products } = this.state;
        return (
            <div className="cart">
                {products.map((product) => {
                    return (
                         <CartItem 
                             product={product} 
                             key={product.id} 
                             onIncreaseQuantity = {this.handleIncreaseQuantity}
                            //  func={() => console.log('saga')}
                            //  isloggedin={false}
                            //  jsx={<h1>Test</h1>}
                            //  comp={<CartItem />}
                         />
                    )
                })}         
            </div>
        );
    }
   
}


export default Cart;