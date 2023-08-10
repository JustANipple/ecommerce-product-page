/* eslint-disable react/prop-types */
import { useState } from "react"
import styles from "./Cart.module.css"

// eslint-disable-next-line react/prop-types
const Cart = ({ cartItems, setCartItems}) => {

    const [cart, setCart] = useState(false);

    function handleClick() {
        setCart(!cart);
    }

    function calculatePrice(productPrice, quantity) {
        const price = productPrice.replace("$", "");
        const total = parseInt(price) * quantity;
        return total;
    }

    function handleDelete() {
        setCartItems({});
    }

    function CartItem({ cartItems}) {
        return (
            cartItems.quantity > 0 ?
            <>
                <div className={styles.item}>
                    <img 
                        src={cartItems.picture}
                        alt=""
                        aria-hidden="true"
                        className={styles.item_picture}
                    />
                    <div className={styles.item_product}>
                        <p className={styles.product_name}>{cartItems.name}</p>
                        <p className={styles.product_price}>
                            {cartItems.finalPrice} x {cartItems.quantity} 
                            <span className={styles.price_total}>
                                &nbsp;${calculatePrice(cartItems.finalPrice, cartItems.quantity)}.00
                            </span>
                        </p>
                    </div>
                    <button 
                        className={styles.item_delete}
                        onClick={handleDelete}
                    >
                        <img 
                            src="icon-delete.svg" 
                            alt="delete icon"
                        />
                    </button>
                </div>
                <button className={styles.cart_checkout}>Checkout</button>
            </>
            : 
            <div className={styles.cart_empty}>
                <p>Your cart is empty.</p>
            </div>
        )
    }
    
    return (
        <>
            <button 
                className={styles.cart_button}
                onClick={handleClick}    
            >
                <img 
                    src="icon-cart.svg"
                    alt="cart icon"
                    className={cart ? styles.darken_icon : ""}
                />
                {cartItems.quantity > 0 ?
                /*eslint-disable-next-line react/prop-types*/
                <div className={styles.cart_quantity}>{cartItems.quantity}</div>
                : ""}
                
            </button>
            <div className={`${styles.cart} ${cart ? styles.cart_open : ""}`}>
                <p className={styles.title}>Cart</p>
                <hr className={styles.divisor}/>
                <CartItem 
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                />
                
            </div>
        </>
    )
}

export default Cart