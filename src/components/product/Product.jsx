import styles from "./Product.module.css"
import Vote from "../vote/Vote"

const Product = () => {
    return (
        <div className={styles.product}>
            <p className={styles.product_company}>Sneaker company</p>
            <p className={styles.product_name}>fall limited edition sneakers</p>
            <p className={styles.product_description}>
                These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
            </p>
            <div className={styles.price}>
                <div className={styles.price_left_wrapper}>
                    <p className={styles.price_final}>$125.00</p>
                    <p className={styles.price_discount}>50%</p>
                </div>
                <s className={styles.price_starting}>$250.00</s>
            </div>
            <div className={styles.select}>
                <Vote 
                    score={0}
                />
                <button className={styles.add_to_cart}>
                    <img 
                        src="icon-cart.svg" 
                        alt="cart icon" 
                        className={styles.cart_icon}
                    />
                    Add to cart
                </button>
            </div>
        </div>
    )
}

export default Product