
import React from "react";
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  constructor (){
    super();
    this.state = {
       products: [
        {
          price: 99,
          title: 'watch',
          qty: 0,
          img: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=404&q=80',
          id: 1
        },
        {
          price: 999,
          title: 'Mobile Phone',
          qty: 10,
          img: 'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=819&q=80',
          id: 2
        },
        {
          price: 999,
          title: 'Laptop',
          qty: 4,
          img: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80', 
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

// Decrease the Quantity using function
handleDecreaseQuantity = (product) => {
    console.log('Hey please Decrease the qty of', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0){
        return;
    }

    products[index].qty -= 1;

    this.setState({
        products: products
    })
}

// for delete the product
handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id);

    this.setState({
        products: items
    })
}

getCartCount = () => {
  const { products } = this.state;

  let count = 0;

  products.forEach((product) => {
    count += product.qty;
  })
  return count;
}

getCartTotal = () => {
  const { products } = this.state;

  let cartTotal = 0;

  products.map((product) => {
    if (product.qty > 0){
        cartTotal = cartTotal + product.qty * product.price;
    }
    return '';
  });

  return cartTotal;
}

render () {
  const { products } = this.state;
    return (
      <div className="App">
          <Navbar count={this.getCartCount()} />
          <Cart 
              products={products}
              onIncreaseQuantity = {this.handleIncreaseQuantity}
              onDecreaseQuantity = {this.handleDecreaseQuantity}
              onDeleteProduct = {this.handleDeleteProduct}
          />
          <div style={ {padding: 10, fontSize: 20} }>TOTAL: {this.getCartTotal()} </div>
      </div>
    );
  }
}

export default App;
