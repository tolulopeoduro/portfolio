import React from 'react'
import styles from './Intro.module.css'

const Intro = () => {
    return (
        <div id='about' className={styles.intro}>
            <div className={styles.box}>
                <h1>Hi!... My name is Tolu</h1>
                <p>I create web applications using React , Angular , nodejs and mongodb. I live in Lagos , Nigeria.<br/>
                I have passion for learning and am capable of adapting to new environments. I enjoy gaining new skills and meeting new people.</p>
            </div>
        </div>
    )
}

export default Intro
