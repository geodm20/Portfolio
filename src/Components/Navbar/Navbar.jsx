import React, {useState} from "react";
import styles from "./Navbar.module.css"
import {getImageUrl} from "../../utils"

export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false) // state for the hamburger menu
    const [ulRight, setUlRight] = useState("-16.3px")

    function turnOnMenu() {
        setMenuOpen(true);
        setUlRight("-16.3px")
    }

    function turnOffMenu() {
        setMenuOpen(false);
        setTimeout(() => {
            setUlRight("1000px")
        }, 400)
    }

    // "-16.3px" is the value for "right" property that makes the menu to be in the center of the screen. So this value is used as default
    // "1000px" is used after the 0.4s of the CSS fading animation, so the buttons are taken out of the screen and not clicked even if not visible

    return (
        <nav className={styles.navbar}>
            <div className={styles.divtitle}>
                <a href="/" className={styles.title}>Portfolio</a>
            </div>
            <div className={styles.menu}>
                {/* Originally I used one image to flip the source depending wether it was clicked (changed by state). This didn't allow me to use a fade when switching between sources, so I had to use two separated images and apply conditional styling  */}
                <img src={getImageUrl("nav/menuIcon.png")}
                    alt="Closed Menu Icon" 
                    className={`${styles.menuBtn}`}
                    style={{
                        opacity: menuOpen ? 0 : 1,
                        zIndex: menuOpen ? -100: 100
                    }}
                    onClick = {turnOnMenu} // switches state when menu icon is clicked
                />
                <img src={getImageUrl("nav/closeIcon.png")}
                    alt="Opened Menu Icon" 
                    className={`${styles.menuBtn}`}
                    style={{
                        opacity: menuOpen ? 1 : 0,
                        position: menuOpen ? "fixed" : "",
                        zIndex: menuOpen ? 100: -100
                    }}
                    onClick = {turnOffMenu} // switches state when menu icon is clicked
                />
                <ul className={`${styles.menuItems} ${menuOpen ? styles.menuItemsShow : styles.menuItemsHidden}`}
                    style={{
                        right: ulRight
                    }}
                > {/* If menuOpen state is true, render the className to assign it to the ul tag */}
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience & Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}