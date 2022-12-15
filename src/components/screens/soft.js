import React, {useEffect, useState} from 'react'
import styles from '../styles/soft.module.css'
import FindItems from '../apiCalls/findItems.js'

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
      <div className={styles.items}>
        
      </div>

    </div>
  )
}
export default Soft