import React from 'react'
import acss from '../AdminMain/AdminMain.module.css'
import coursePage from '../../Data/AdminCourses';
import AdminCard from '../../components/CourseCard/AdminCard/AdminCard';

const Admin = () => {
  return (
   <>
        <div className={acss.main}>
        <div className={acss.navbar}>
          <div className={acss.lnmlogo}></div>
          <div className={acss.develop}>Developed By</div>
        </div>        
        <h1 className={acss.heading}>Admin</h1>
        <div className={acss.container1}>
        {coursePage.map((item, index) => (
            <div key={item.id} style={{ position: 'relative' }}>
              <AdminCard  heading1={item.heading1} heading2={item.heading2} para1={item.para1} />
             
            </div>
          ))}
        </div>
        </div>
   
   </>
  )
}

export default Admin