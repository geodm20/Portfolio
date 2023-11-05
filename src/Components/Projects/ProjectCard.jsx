import React from "react"
import styles from "./ProjectCard.module.css"
import {getImageUrl} from "../../utils"

export const ProjectCard = ({project: {title, imageSrc, description, skills, demo, source}}) => {
    return (
        <div className={styles.container}>
            <img src={getImageUrl(imageSrc)} alt={`${title} Logo`} className={styles.image}/>
            <h3 className={styles.title}><span className={styles.span}>&lt;</span> {title} <span className={styles.span}>/&gt;</span></h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>{
                skills.map((skill, index) => (
                    <li key={index} className={styles.skill}>{skill}</li>
                ))}
            </ul>
            <div className={styles.links}>
                <a href={demo} className={styles.link} target="_blank">Demo</a>
                <a href={source} className={styles.link} target="_blank">Source</a>
            </div>
        </div>
    )
}