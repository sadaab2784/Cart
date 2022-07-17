
import React from "react";
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/compat/app';

class App extends React.Component {

  constructor (){
    super();
    this.state = {
       products: [],
       loading: true
    }
    this.db = firebase.firestore();
   // this.increaseQuantity = this.increaseQuantity.bind(this);
//    this.testing();
}

componentDidMount () {
  // firebase
  //   .firestore()
  //   .collection('products')
  //   .get()
  //   .then((snapshot) => {
  //     console.log(snapshot);

  //     snapshot.docs.map((doc) => {
  //       console.log(doc.data());
  //     });

  //     //fetch the products using setState i.e browser will rerender and display all the products
  //     // then firest we get the produsts
  //     const products = snapshot.docs.map((doc) => {
  //       const data = doc.data();

  //       data['id'] = doc.id;
  //       return data;
  //     })

  //     this.setState({
  //       products: products,
  //       loading: false
  //     })
  //   })



  // here is onSnapshot called whenever something changes in our product collection(without refereshing the browser it will update)
   this.db
    .collection('products')
    .onSnapshot((snapshot) => {
      console.log(snapshot);

      snapshot.docs.map((doc) => {
        console.log(doc.data());
      });

      //fetch the products using setState i.e browser will rerender and display all the products
      // then firest we get the produsts
      const products = snapshot.docs.map((doc) => {
        const data = doc.data();

        data['id'] = doc.id;
        return data;
      })

      this.setState({
        products: products,
        loading: false
      })
    })
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

//adding products in firebase
addProduct = () => {
  this.db
    .collection('products')
    .add({
      img: '',
      price: 900,
      qty: 3,
      title: 'Washing Machine'
    })
    .then((docRef) => {
      console.log('Product has been added', docRef);
    })
    .catch((error) => {
      console.log('Error :', error);
    })
}

render () {
  const { products, loading } = this.state;
    return (
      <div className="App">
          <Navbar count={this.getCartCount()} />
          <button onClick={this.addProduct} style={{ padding: 20, fontSize: 20 }}>Add a product</button>
          <Cart 
              products={products}
              onIncreaseQuantity = {this.handleIncreaseQuantity}
              onDecreaseQuantity = {this.handleDecreaseQuantity}
              onDeleteProduct = {this.handleDeleteProduct}
          />
          {loading && <h1>Loading Products...</h1>}
          <div style={ {padding: 10, fontSize: 20} }>TOTAL: {this.getCartTotal()} </div>
      </div>
    );
  }
}

export default App;
