import React from "react";

const CartItem = (props) => {
        const { price, title, qty } = props.product;
        const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } = props;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src={product.img} />
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
                          // onClick={() => this.props.onIncreaseQuantity(this.props.product)}
                          onClick={() => onIncreaseQuantity(product)}
                        />
                        <img 
                           alt="decrease" 
                           className="action-icons" 
                           src="https://cdn-icons.flaticon.com/png/512/2569/premium/2569198.png?token=exp=1657386233~hmac=97e72c7ecada0c13a08acabd0aa31540" 
                           //onClick={() => this.props.onDecreaseQuantity(this.props.product)}
                           onClick={() => onDecreaseQuantity(product)}
                        />
                        <img 
                           alt="delete" 
                           className="action-icons" 
                           src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png" 
                           onClick={() => onDeleteProduct(product.id)}
                        />
                    </div>
                </div>
            </div>
        );
    }

const styles = {
    image: {
        height: 150,
        width: 150,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;