import React, {useState} from "react";
import styles from "./Navbar.module.css"
import {getImageUrl} from "../../utils"

export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false) // state for the hamburger menu

    return (
        <nav className={styles.navbar}>
            <div className={styles.divtitle}>
                <a href="/" className={styles.title}>Portfolio</a>
            </div>
            <div className={styles.menu}>
                <img src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")} 
                alt="Menu Icon" 
                className={styles.menuBtn} 
                onClick = {() => setMenuOpen(!menuOpen)} // switch state when menu icon is clicked
                />
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick = {() => setMenuOpen(false)} 
                > {/* If menuOpen state is true, render the className to assign it to the ul tag */}
                    {/* If menuOpen state is true, render the className to assign it to the ul tag */}
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience & Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}