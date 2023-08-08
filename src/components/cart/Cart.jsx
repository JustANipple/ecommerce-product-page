import { useState } from "react"
import styles from "./Cart.module.css"

const Cart = () => {

    const [cart, setCart] = useState(false);


    function handleClick() {
        setCart(!cart);
    }

    function CartItem() {
        return (
            <div className={styles.item}>
                <img 
                    src="image-product-1-thumbnail.jpg"
                    alt=""
                    aria-hidden="true"
                    className={styles.item_picture}
                />
                <div className={styles.item_product}>
                    <p className={styles.product_name}>
                        Fall Limited Edition Sneakers
                    </p>
                    <p className={styles.product_price}>
                        $125.00 x 3 <span className={styles.price_total}>$375.00</span>
                    </p>
                </div>
                <button className={styles.item_delete}>
                    <img 
                        src="icon-delete.svg" 
                        alt="delete icon"
                    />
                </button>
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
                <div className={styles.cart_quantity}>3</div>
            </button>
            <div className={`${styles.cart} ${cart ? styles.cart_open : ""}`}>
                <p className={styles.title}>Cart</p>
                <hr className={styles.divisor}/>
                <CartItem />
                <button className={styles.cart_checkout}>Checkout</button>
            </div>
        </>
    )
}

export default Cart