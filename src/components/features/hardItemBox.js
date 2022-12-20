import React from 'react'
import styles from '../styles/hardItemBox.module.css'
import redGrouper from '../images/red-grouper-colored.png'

function HardItemBox({
  id,
  name,
  description,
  price,
  discount
}) {
  return (
    <div className={styles.hardContainer}>
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
export default HardItemBox