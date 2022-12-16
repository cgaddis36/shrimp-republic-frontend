import React, {useEffect, useState} from 'react'
import styles from '../styles/soft.module.css'
import FindItems from '../apiCalls/findItems.js'
import SoftItemBox from '../features/softItemBox.js'
import Header from '../features/header'

function Soft({
  
}) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const role = 'softgoods'
  useEffect(() => {
    FindItems({role, setLoading, setItems})
  }, [])
  return (
    <div className={styles.mainContainer}>
      <Header />
      <div className={styles.items}>
        {
          !items.length ?
          <div className={styles.loading}>

          </div> 
          : 
          items.map((item, index)=> 
            <SoftItemBox
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
export default Soft