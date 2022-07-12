import React from "react";

class CartItem extends React.Component {
    constructor (){
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 0,
            img: ''
        }
       // this.increaseQuantity = this.increaseQuantity.bind(this);
    //    this.testing();
    }

    // function for quantity upto date after 5 sec to 100
    // testing (){
    //     const promise = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve('done');
    //         }, 2000);
    //     })

    //     promise.then(() => {
    //         // setState acts like a synchronus call
    //         this.setState({ qty: 100 });

    //         console.log('state', this.state);
    //     });
    // }

    increaseQuantity = () => {
        // this.state.qty += 1;
        // console.log('this', this.state);

        //setState form 1 (here we define the same function object more than one)
        // lets check if the qty increase by 5 , it doesn't change the quantity(because of merging )
        // this.setState({
        //     qty: this.state.qty + 5
        // });

        // it only render the last function object, it doesn't matter what's the previous object is it...
        // this.setState({
        //     qty: this.state.qty + 1
        // }, () => {
        //     console.log('this.state', this.state);
        // });


        //setState form 2: - if prevState required use this
        // if the callback function more than one , it will render all the state function...
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        }, () => {
            console.log('this.state', this.state);
        });
    }

    decreaseQuantity = () => {
        const { qty } = this.state;

        if (qty == 0){
            return;
        }

        //setState form 2: - if prevState required use this
        this.setState((prevState) => {
            return {
                qty: prevState.qty - 1
            }
        }, () => {
            console.log('this.state', this.state);
        });
    }
    render(){
        const { price, title, qty } = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={ { fontSize: 25 }}>{title}</div>
                    <div style={ { color: '#777' }}>Rs {price}</div>
                    <div style={ { color: '#777' }}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img 
                           alt="increase" 
                           className="action-icons" 
                           src="https://cdn-icons.flaticon.com/png/512/1665/premium/1665680.png?token=exp=1657386291~hmac=7a60a6216654ef7eb265efca01251c06" 
                           onClick={this.increaseQuantity}
                        />
                        <img 
                           alt="decrease" 
                           className="action-icons" 
                           src="https://cdn-icons.flaticon.com/png/512/2569/premium/2569198.png?token=exp=1657386233~hmac=97e72c7ecada0c13a08acabd0aa31540" 
                           onClick={this.decreaseQuantity}
                        />
                        <img 
                           alt="delete" 
                           className="action-icons" 
                           src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png" 
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;