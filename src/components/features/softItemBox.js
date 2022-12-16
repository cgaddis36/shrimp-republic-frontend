import React from 'react'
import styles from '../styles/softItemBox.module.css'

function SoftItemBox({
  id,
  name,
  description,
  price,
  discount
}) {
  return (
    <div className={styles.softContainer}>
      <div className={styles.name}>
        {name}
      </div>
      <div className={styles.description}>
        {description}
      </div>
      <div className={styles.price}>
        {"$" + price}
      </div>
      {
        discount > 0 ? 
        <div className={styles.discount}>
          {discount}
        </div> 
        :
        null
      }
      <div className={styles.clickView}>
        Click to View
      </div>
    </div>
  )
}
export default SoftItemBox