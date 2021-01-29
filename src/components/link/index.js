import React from 'react'
import styles from './index.module.css'
import {Link} from 'react-router-dom'

const LinkComponent = ({href, title, type}) => {
    return(
        <Link to={href} className={styles[`${type}-links`]}>
            {title}
        </Link>
    )
}

export default LinkComponent
