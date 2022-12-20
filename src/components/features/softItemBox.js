import React from 'react'
import styles from '../styles/softItemBox.module.css'
import redGrouper from '../images/red-grouper-colored.png'

function SoftItemBox({
  id,
  name,
  description,
  price,
  discount
}) {
  return (
    <div className={styles.softContainer}>
      <img 
        src={redGrouper}
        className={styles.productImage}
        />
        <div className={styles.name}>
          {name}
        </div>
      
        <div className={styles.priceRow}>
          <div className={styles.price}>
            {"Price: $" + price}
          </div>
          <div className={styles.clickView}>
            Click to View
          </div>
        </div>

        {
          discount > 0 ? 
          <div className={styles.discount}>
            {discount}
          </div> 
          :
          null
        }
    </div>
  )
}
export default SoftItemBox