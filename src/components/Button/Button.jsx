import React from 'react'
import styles from './Button.module.css'

const Button = ({isBtn2,text,icon}) => {
  return (
    <button
    
    className={isBtn2 ? styles.btn2 : styles.btn}>
        {icon}
        {text}
    </button>
  )
}

export default Button