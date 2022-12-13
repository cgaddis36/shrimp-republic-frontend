import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../styles/navBar.module.css'

function NavBar({
  active,
  currentUser
}) {
  const navigate = useNavigate()
  const swapPath = (path) => {
    navigate(path)
  }
  return(
    <div className={styles.nav}>
      <div
        className={active === 'soft' ? styles.active : styles.navButton}
        onClick={() => swapPath('/softgoods')} 
        >
        Soft Goods
      </div>
      <div
        className={active === 'hard' ? styles.active : styles.navButton}
        onClick={() => swapPath('/hardgoods')} 
        >
        Hard Goods
      </div>
      {
        currentUser !== '' ?
        <div
          className={active === 'profile' ? styles.active : styles.navButton}
          onClick={() => swapPath('/profile')} 
          >
          Profile
        </div>
        :
        <div
          className={active === 'login' ? styles.active : styles.navButton}
          onClick={() => swapPath('/login')} 
          >
          Login
        </div>
      }
    </div> 
  )
}
export default NavBar
