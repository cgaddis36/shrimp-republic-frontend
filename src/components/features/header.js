import React from 'react'
import NavBar from './navBar'
import styles from '../styles/header.module.css'
import flyFishCircleLogo from '../images/flyFishCircleLogo.png'
import { useNavigate } from 'react-router-dom'
function Header({
  active
}){
  const navigate = useNavigate()
  return(
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <img 
          src={flyFishCircleLogo}
          className={styles.logo}
          />
        <div 
          className={styles.logoText}
          onClick={()=>navigate('/')}
          >
          Shrimp Republic
        </div>
      </div>
      <NavBar 
        active={active}
        />
    </div>
  )
}
export default Header