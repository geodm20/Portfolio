import React from "react"
import styles from "./Contact.module.css"
import { getImageUrl } from "../../utils"


export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact </h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                    <a href="mailto:geodm20@gmail.com" target="_blank">Email</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
                    <a href="https://www.linkedin.com/in/georgematos20/" target="_blank">LinkedIn</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
                    <a href="https://github.com/geodm20" target="_blank">Github</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/fccIcon.png")} alt="FCC icon" />
                    <a href="https://www.freecodecamp.org/GeorgeMatos" target="_blank">freeCodeCamp</a>
                </li>
            </ul>
        </footer>
    )
}