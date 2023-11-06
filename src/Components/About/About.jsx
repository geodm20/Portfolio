import React from "react"
import styles from "./About.module.css"
import { getImageUrl } from "../../utils"

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDVhNTU2YmRjYTc4YzA2ZmExYTRiMGNmMjExMjZkOTdlNzM4NDU0MCZjdD1n/qgQUggAC3Pfv687qPC/giphy.gif" alt="Developer" className={styles.aboutImage}/>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/frontend.png")} alt="Frontend icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>I'm a frontend developer with experience in building responsive and optimize websites. Pixel-eye and close attention to detail are important to accomplish the client needs.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/backend.png")} alt="Backend icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Development</h3>
                            <p>There is no web app without backend. That's why my next step is to domain this field as a complement to the frontend development.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/ml.png")} alt="ML icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Machine Learning</h3>
                            <p>As new technologies arise, I believe it's important to keep learning and applying this knowledge to existing projects. Machine Learning and AI are excellent features for websites.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/hobbies.png")} alt="Hobbies icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Hobbies</h3>
                            <p>I'm also a normal person with tastes and hobbies! I love reading science fiction, swimming, astronomy and backpacking. Stimulating my imagination and connecting with nature is important to me.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}