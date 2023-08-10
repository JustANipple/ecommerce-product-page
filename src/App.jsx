import { useState } from "react"
import styles from "./App.module.css"
import Carousel from "./components/carousel/Carousel"
import Cart from "./components/cart/Cart"
import Menu from "./components/menu/Menu"
import Product from "./components/product/Product"

function App() {

  //carousel lightbox state
  const [carousel, setCarousel] = useState(false);
  //carousel pictures
  const pictures = [
    "image-product-1.jpg",
    "image-product-2.jpg",
    "image-product-3.jpg",
    "image-product-4.jpg"
  ]
  //product object
  const product = {
    picture: pictures[0],
    company: "Sneaker company",
    name: "fall limited edition sneakers",
    description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    startingPrice: "$250.00",
    finalPrice: "$125.00",
    discount: "50%"
  }
  //quantity selector state
  const [vote, setVote] = useState(0);
  
  const [cartItems, setCartItems] = useState({
      picture: "pictures[0]", 
      name: "product.name",
      finalPrice: "product.finalPrice",
      quantity: 0
    });

  function handleIconClick() {
    setCarousel(!carousel);
  }

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.left_wrapper}>
          <Menu />
          <img 
            src="logo.svg" 
            alt="logo"
          />
        </div>
        <div className={styles.right_wrapper}>
          <Cart 
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
          <img 
            src="image-avatar.png" 
            alt="avatar picture"
            className={styles.avatar_picture}
          />
        </div>
      </nav>
      <main className={styles.main}>
        <Carousel 
          carousel={carousel}
          setCarousel={setCarousel}
          pictures={pictures}
        />
        <Product 
          product={product}
          vote={vote}
          setVote={setVote}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
        {carousel ?
        <div className={styles.dark_layer}>
          <>
          <img 
            src="icon-close.svg" 
            alt="close icon" 
            className={styles.carousel_close_icon}
            onClick={handleIconClick}
          />
          <Carousel 
            type={"lightbox"}
            carousel={carousel}
            setCarousel={setCarousel}
            pictures={pictures}
          />
          </>
        </div>
        : ""}
      </main>
    </>
  )
}

export default App
