import React from "react"
import styles from "./Experience.module.css"
import {getImageUrl} from "../../utils"
import skills from "../../data/skills.json"
import history from "../../data/history.json"

export const Experience = () => {
    
    const allSkills = skills.map((skill, index) => (
        <div key={index} className={styles.skill}>
            <div className={styles.skillImageContainer}>
                <img 
                    src={getImageUrl(skill.imageSrc)} 
                    alt={skill.title} 
                />
            </div>
            <p>{skill.title}</p>
        </div>
    ))

    const allExperiences = history.map((historyItem, index) => (
        <li key={index} className={styles.historyItem}>
            <img 
                src={getImageUrl(historyItem.imageSrc)} 
                alt={`${historyItem.organisation} Logo`} 
            />
            <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role} — ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>
                    {historyItem.experiences.map((experience, index) => (
                        <li key={index}>{experience}</li>
                    ))}
                </ul>
            </div>
        </li>
    ))

    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience and Skills</h2>
            <div className={styles.content}>
                <div className={styles.skills}>{allSkills}</div>
                <ul className={styles.history}>{allExperiences}</ul>
            </div>
        </section>
    )
}