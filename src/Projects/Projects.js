import React from 'react'
import Project from './Project/Project'
import styles from './Projects.module.css'
//import '../assets/img/'

const Projects = () => {
    return (
        <div id='projects' className={styles.projects}>
            <h3>RECENT WORKS</h3>
            <div className={styles["project-list"]}>
                <Project src = "https://res.cloudinary.com/dtuafcbbd/image/upload/v1640470479/personal/Screenshot_19.png"
                name = "WORKFORCE" link = "https://workforce-01.netlify.app/" />
                <Project src = "https://res.cloudinary.com/dtuafcbbd/image/upload/v1640470479/personal/Screenshot_17.png"
                name = "Calculator" link = "https://4p8bk.csb.app/" />
                <Project src = "https://res.cloudinary.com/dtuafcbbd/image/upload/v1640470479/personal/Screenshot_18.png"
                name = "Movicheq" link = "https://movicheq.netlify.app/" />
            </div>
            <div className={styles["project-list"]}>
                <Project src = "https://res.cloudinary.com/dtuafcbbd/image/upload/v1640470479/personal/Screenshot_15.png"
                name = "Amazon Clone" link = "https://495jc.csb.app/" />
                <Project src = "https://res.cloudinary.com/dtuafcbbd/image/upload/v1640470479/personal/Screenshot_20.png"
                name = "Sketch" link = "https://z5mo7.csb.app/" />
            </div>

            <div className = {styles["project-list-mobile"]}>
                <Project src = "https://res.cloudinary.com/dtuafcbbd/image/upload/v1640470479/personal/Screenshot_19.png"
                name = "WORKFORCE" link = "https://workforce-01.netlify.app/" />
                <Project src = "https://res.cloudinary.com/dtuafcbbd/image/upload/v1640470479/personal/Screenshot_17.png"
                name = "Calculator" link = "https://4p8bk.csb.app/" />
                <Project src = "https://res.cloudinary.com/dtuafcbbd/image/upload/v1640470479/personal/Screenshot_18.png"
                name = "Movicheq" link = "https://movicheq.netlify.app/" />
            </div>
        </div>
    )
}

export default Projects
