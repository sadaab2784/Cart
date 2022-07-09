import React from "react";

class CartItem extends React.Component {
    constructor (){
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
       // this.increaseQuantity = this.increaseQuantity.bind(this);
    }

    increaseQuantity = () => {
        console.log('this', this.state);
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
                           className="action-icons" src="https://cdn-icons.flaticon.com/png/512/2569/premium/2569198.png?token=exp=1657386233~hmac=97e72c7ecada0c13a08acabd0aa31540" 
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