import React from 'react'
import styles from './Nav.module.css'

const Nav = () => {
    return (
            <div className={styles.nav_container}>
                    <div className={styles.logo}>T</div>
                    <div className={styles.links}>
                        <a href='#'>about</a>
                        <a href='#'>portfolio</a>
                        <a href='#'>contact</a>
                    </div>
            </div>
        
    )
}

export default Nav
