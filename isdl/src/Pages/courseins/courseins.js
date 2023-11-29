import React from 'react';
import cicss from '../../Pages/courseins/courseins.module.css';
// import CourseCard from '../../components/CourseCard/CourseCard';
// import course from '../../Data/CourseDetails';
import ImgUrl from '../../images/image 3.png'

function App() {
  return (
    <>
      <div className={cicss.main}>
        <div className={cicss.lnmlogo}></div>
        <h1 className={cicss.heading}>Course Instructor</h1>
        
          <div className={cicss.image}>
            <img src={ImgUrl} alt="Student_Image" />
          </div>
          <div className={cicss.content}>content</div>

         

<div><button className={cicss.div1} >View Courses<i className={cicss.arrow}></i> </button></div>



        </div>

        
           
            
    </>
  );
}

export default App;