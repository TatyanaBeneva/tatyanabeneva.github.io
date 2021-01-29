import React from 'react'
import styles from './index.module.css'
import {Link} from 'react-router-dom'

const LinkComponent = ({href, title}) => {
    return(
        <Link to={href} className={styles['nav-links']}>
            {title}
        </Link>
    )
}

export default LinkComponent
