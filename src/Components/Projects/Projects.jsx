import React from "react"
import projects from "../../data/projects.json"
import styles from "./Projects.module.css"

export const Projects = () => {

    const allProjects = projects.map((project, index) => (
        <ProjectCard 
            key={index}
            project={project}
        />
    ))

    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>{allProjects}</div>
        </section>
    )
}