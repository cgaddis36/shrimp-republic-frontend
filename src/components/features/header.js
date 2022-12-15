import React from 'react'
import NavBar from './navBar'
import styles from '../styles/header.module.css'

function Header({
  currentUser,
  active
}){
  return(
    <div className={styles.header}>
      <div 
        className={styles.logoContainer}>
        <div className={styles.logoText}>
          Shrimp Republic
        </div>
      </div>
      <NavBar 
        currentUser={currentUser}
        active={active}
        />
    </div>
  )
}
export default Header