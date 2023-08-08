import styles from "./Cart.module.css"

const Cart = () => {


    function handleClick() {

    }

    function CartItem() {
        return (
            <></>
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
                    className={styles.cart_icon}
                />
                <div className={styles.cart_quantity}>3</div>
            </button>
            <div className={styles.cart}>
                <p>Cart</p>
                <hr />
                <CartItem />
                <button>Checkout</button>
            </div>
        </>
    )
}

export default Cart