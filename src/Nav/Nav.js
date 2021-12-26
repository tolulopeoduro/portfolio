import React from 'react'
import styles from './Nav.module.css'

const Nav = () => {
    return (
            <div className={styles.nav_container}>
                    <div className={styles.logo}>T</div>
                    <div className={styles.links}>
                        <a href='/#about'>about</a>
                        <a href='/#projects'>Projects</a>
                        <a href='/#contact'>contact</a>
                    </div>
            </div>
        
    )
}

export default Nav
