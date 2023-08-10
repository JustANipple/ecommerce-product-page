import { useState } from "react"
import styles from "./App.module.css"
import Carousel from "./components/carousel/Carousel"
import Cart from "./components/cart/Cart"
import Menu from "./components/menu/Menu"
import Product from "./components/product/Product"

function App() {

  const [carousel, setCarousel] = useState(false);

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
          <Cart />
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
        />
        <Product />
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
          />
          </>
        </div>
        : ""}
      </main>
    </>
  )
}

export default App
