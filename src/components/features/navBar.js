import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../styles/navBar.module.css'
import { selectUser } from '../reducers/user/userSlice'
import { useSelector } from 'react-redux'

function NavBar({
  active
}) {
  const user = useSelector(selectUser)
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
      <div 
        className={active === 'cart' ? styles.active : styles.navButton}
        onClick={() => swapPath('/cart')}
        >
        Cart
      </div>
      {
        user !== '' ?
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
