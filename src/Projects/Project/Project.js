import React from 'react'
import styles from './Project.module.css'

const Project = (props) => {
    return (
        <a className={styles.project} href = {props.link} target='_blank' rel='noopener'>
            <div className={styles.image} style={{backgroundImage : `url(${props.src})`}}>
            </div>
            <div className={styles.details}>
                <h3>{props.name}</h3>
            </div>
        </a>
    )
}

export default Project
