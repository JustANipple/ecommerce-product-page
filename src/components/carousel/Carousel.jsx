import { useState } from "react"
import styles from "./Carousel.module.css"

const Carousel = () => {

    const [slide, setSlide] = useState("0");

    const pictures = [
        "image-product-1.jpg",
        "image-product-2.jpg",
        "image-product-3.jpg",
        "image-product-4.jpg"
    ]

    const thumbnails = [
        "image-product-1-thumbnail.jpg",
        "image-product-2-thumbnail.jpg",
        "image-product-3-thumbnail.jpg",
        "image-product-4-thumbnail.jpg"
    ]

    function handlePreviousClick() {
        if(parseInt(slide) === 0) {
            setSlide("3");
        } else {
            setSlide((parseInt(slide) - 1).toString());
        }
    }

    function handleNextClick() {
        if(parseInt(slide) === 3) {
            setSlide("0");
        } else {
            setSlide((parseInt(slide) + 1).toString());
        }
    }

    return (
        <div className={styles.carousel}>
            <div className={styles.main_content}>
                <a 
                    href={"#slide_" + slide} 
                    onClick={handlePreviousClick}
                    className={styles.previous_button}
                >
                    <img src="icon-previous.svg" alt="" />
                </a>
                <ul className={styles.main_pictures}>
                    {pictures.map((picture, index) => {
                        return (
                            <li 
                                key={index} 
                                id={`slide_${index}`}
                            >
                                <img src={picture} alt="product picture"/>
                            </li>
                        )
                    })}
                </ul>
                <a 
                    href={"#slide_" + slide} 
                    onClick={handleNextClick}
                    className={styles.next_button}
                >
                    <img src="icon-next.svg" alt="" />
                </a>
            </div>
            <ul className={styles.flexed_pictures}>
                {thumbnails.map((thumbnail, index) => {
                    return (
                        <li key={index}>
                            <a href={"#slide_" + index}>
                                <img 
                                    src={thumbnail} 
                                    alt="thumbnail picture" 
                                />
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Carousel