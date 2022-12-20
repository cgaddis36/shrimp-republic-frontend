import React, {useEffect, useState} from 'react'
import styles from '../styles/hard.module.css'
import FindItems from '../apiCalls/findItems.js'
import HardItemBox from '../features/hardItemBox.js'
import Header from '../features/header'

function Hard({
  
}) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const role = 'hardgoods'
  useEffect(() => {
    FindItems({role, setLoading, setItems})
  }, [])
  return (
    <div className={styles.mainContainer}>
      <Header 
        active={'hard'}
        />
        <div className={styles.filters}>
          <div className={styles.filter}>
            Signs 
          </div>
          <div className={styles.filter}>
            Coasters 
          </div>
        </div>
      <div className={styles.items}>
        {
          !items.length ?
          <div className={styles.loading}>
          </div> 
          : 
          items.map((item, index)=> 
            <HardItemBox
              key={index}
              name={item.name}
              description={item.description}
              price={item.price}  
              discount={item.discount}  
              />)
        }
      </div>
    </div>
  )
}
export default Hard