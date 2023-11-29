import React from 'react'
import AdminCardcss from '../AdminCard/AdminCard.module.css'
import forwardImg from '../../../images/blue_arrow.svg'
const AdminCard = (props) => {
  return (
    <div className={AdminCardcss.main}>

    <div className={AdminCardcss.content}>
 
    <h1 className={AdminCardcss.heading1}>{props.heading1}</h1>
    <h1 className={AdminCardcss.heading2}>{props.heading2}</h1>
    <p className={AdminCardcss.para1}>{props.para1}</p>
    </div>

    <div className={AdminCardcss.image}>
        <img src={forwardImg} />
    </div>
   </div>
  )
}

export default AdminCard