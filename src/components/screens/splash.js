import React from 'react'
import styles from '../styles/splash.module.css'
import Header from '../features/header'
import shrimpFlyfish from '../images/shrimp-flyfish-logo-floralhat.png'
import floralCrab from '../images/floral-crab-coral-outline.png'
import redGrouper from '../images/red-grouper-colored.png'

function Splash({currentUser}) {
  return(
    <div className={styles.main}>
      <Header
        active={'splash'}
        currentUser={currentUser} 
        />
      <div className={styles.midRow}>
        <img 
          src={shrimpFlyfish}
          className={styles.flyShrimp}
          />
        <div className={styles.textContainer}>
          <div className={styles.text1}>
            Shrimp Republic
          </div>
          <div className={styles.text2}>
            Deep Fried Dry Goods Since 2022 
          </div>
        </div>
        <img 
          src={floralCrab}
          className={styles.crabby}
          />
      </div>
      <div className={styles.lowRow}>
        <div className={styles.textContainer2}>
          <div className={styles.text3}>
            Coastal Wood Art & Clothing
          </div>
          <div className={styles.text3}>
            Designed & Constructed in
          </div>

          <div className={styles.text4}>
            Destin, FL
          </div>
        </div>
        <img 
          src={redGrouper}
          className={styles.redGrouper}
          />
      </div>

    </div>
  )
}

export default Splash