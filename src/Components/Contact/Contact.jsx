import React from "react"
import styles from "./Contact.module.css"
import { getImageUrl } from "../../utils"


export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact </h2>
                <p>I'd love to reach you... <br/> and talk about opportunities for both!</p>
                <span>Let's get in touch:</span>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <a href="mailto:geodm20@gmail.com" target="_blank">
                        <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                    </a>
                    <a href="mailto:geodm20@gmail.com" target="_blank">Email</a>
                </li>
                <li className={styles.link}>
                    <a href="https://www.linkedin.com/in/georgematos20/" target="_blank">
                        <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/georgematos20/" target="_blank">LinkedIn</a>
                </li>
                <li className={styles.link}>
                    <a href="https://github.com/geodm20" target="_blank">
                        <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
                    </a>
                    <a href="https://github.com/geodm20" target="_blank">Github</a>
                </li>
                <li className={styles.link}>
                    <a href="https://www.freecodecamp.org/GeorgeMatos" target="_blank">
                        <img src={getImageUrl("contact/fccIcon.png")} alt="FCC icon" />
                    </a>
                    <a href="https://www.freecodecamp.org/GeorgeMatos" target="_blank">freeCodeCamp</a>
                </li>
            </ul>
        </footer>
    )
}