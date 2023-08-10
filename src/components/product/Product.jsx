/* eslint-disable react/prop-types */
import styles from "./Product.module.css"
import Vote from "../vote/Vote"

const Product = ({ product, vote, setVote, cartItems, setCartItems }) => {

    function handleClick() {
        setCartItems({
            picture: product.picture, 
            name: product.name,
            finalPrice: product.finalPrice,
            quantity: vote
        })
    }

    return (
        <div className={styles.product}>
            <p className={styles.product_company}>{product.company}</p>
            <p className={styles.product_name}>{product.name}</p>
            <p className={styles.product_description}>{product.description}</p>
            <div className={styles.price}>
                <div className={styles.price_left_wrapper}>
                    <p className={styles.price_final}>{product.finalPrice}</p>
                    <p className={styles.price_discount}>{product.discount}</p>
                </div>
                <s className={styles.price_starting}>{product.startingPrice}</s>
            </div>
            <div className={styles.select}>
                <Vote 
                    vote={vote}
                    setVote={setVote}
                />
                <button 
                    className={styles.add_to_cart}
                    onClick={handleClick}>
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