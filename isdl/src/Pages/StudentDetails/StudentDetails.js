import React from 'react';
import sdcss from '../../Pages/StudentDetails/StudentDetails.module.css';
import CourseCard from '../../components/CourseCard/CourseCard';
import course from '../../Data/CourseDetails';
import ImgUrl from '../../images/image 3.png'

function App() {
  return (
    <>
      <div className={sdcss.main}>
        <div className={sdcss.lnmlogo}></div>
        <h1 className={sdcss.heading}>Student Details</h1>
        <div className={sdcss.container1}>
          <div className={sdcss.image}>
            <img src={ImgUrl} alt="Student_Image" />
          </div>
          <div className={sdcss.content}>This Project is done by great great peeps</div>
        </div>

        <div className={sdcss.container2}>
          <h1 className={sdcss.heading}>Course Details</h1>
          <div className={sdcss.cardDiv}>
            {course.map((item) => (
              <div key={item.id}>
                <CourseCard image={item.image} heading1={item.heading1} heading2={item.heading2} para1={item.para1}/>
              </div>

            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
