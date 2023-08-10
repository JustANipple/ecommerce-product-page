import { useState } from "react"
import styles from "./App.module.css"
import Carousel from "./components/carousel/Carousel"
import Cart from "./components/cart/Cart"
import Menu from "./components/menu/Menu"
import Product from "./components/product/Product"

function App() {

  const [carousel, setCarousel] = useState(true);

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
        <Carousel 
          type={"lightbox"}
          carousel={carousel}
          setCarousel={setCarousel}
        />
        : ""}
      </main>
    </>
  )
}

export default App
