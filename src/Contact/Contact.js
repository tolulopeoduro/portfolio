import { faWhatsappSquare , faGithubSquare , faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import React from 'react'

import styles from './Contact.module.css'

const Contact = () => {
    return (
        <div id='contact' className={styles.contact}>
            <h3>Contact Me</h3>
            <div className={styles.links}>
                <a href='https://api.whatsapp.com/send?phone=2347036845422' target="_blank" rel='noreferrer'>
                    <FontAwesomeIcon icon={faWhatsappSquare} className={styles.icon}/>
                </a>
                <a href='mailto:tolulopeoduro345@gmail.com' target="_blank" rel='noreferrer'>
                    <FontAwesomeIcon icon={faEnvelopeSquare} className={styles.icon}/>
                </a>
                <a href='https://github.com/tolulopeoduro' target="_blank" rel='noreferrer'>
                    <FontAwesomeIcon icon={faGithubSquare} className={styles.icon} />
                </a>
                <a href='https://www.linkedin.com/in/tolulope-oduro-58b7a41bb/' target="_blank" rel='noreferrer'>
                    <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
                </a>
            </div>
        </div>
    )
}

export default Contact
