import React from "react"
import styles from "./Hero.module.css"
import { getImageUrl} from "../../utils"

export const Hero = () => {

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hello, I'm <span className={styles.span}>George</span></h1>
                <p className={styles.description}>I'm a React front-end developer. Since I really like everything about web development, I'm looking to develop myself as backend developer as well to get full-stack roles, leveraging technologies like the MERN stack or others. I'm also a Python developer, which is my favorite programming language. I am a fast learner, detail-oriented, and deeply committed to delivering top-notch solutions that meets the needs of clients and end-users. Reach out to learn more about me!</p>
                <a href="mailto:geodm20@gmail.com" className={styles.contactBtn}>Contact Me</a> {/* Decide wether keep my email here or not */}
            </div>
            <img src={getImageUrl("hero/George.png")} alt="George photo" className={styles.heroImg}/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    )
}