import { useState } from "react"
import styles from "./Menu.module.css"

const Menu = () => {

    const [menu, setMenu] = useState(false);
    const menuOptions = ["Collections", "Men", "Women", "About", "Contact"];

    function handleClick() {
        setMenu(!menu);
    }

    function MenuList() {
        return (
            <ul className={styles.menu_options}>
            {menuOptions.map((option, index) => {
                return (
                    <li 
                        key={index} 
                        className={styles.menu_option}
                    > 
                        <a href="#">{option}</a> 
                    </li>
                )
            })}
            </ul>
        )
    }

    return (
        <>
            <button 
                className={styles.menu_button}
                onClick={handleClick}    
            >
                <img 
                    src={menu ? "icon-close.svg" : "icon-menu.svg"}
                    alt="menu icon"
                    className={styles.menu_icon}
                />
            </button>
            <div className={`${styles.dark_layer} ${menu ? styles.dark_layer_visible : ""}`}></div>
            <div className={`${styles.menu} ${menu ? styles.menu_open : ""}`}>
                <MenuList />
            </div>
        </>
    )
}

export default Menu