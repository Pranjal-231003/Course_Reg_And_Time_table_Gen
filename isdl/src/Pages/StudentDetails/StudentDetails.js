import React from 'react';
import sdcss from './StudentDetails.module.css'
import CourseCard from '../../components/CourseCard/CourseCard';
import course from '../../Data/CourseDetails';
// import imgpath from "../../../public/images/Group 39578largebg.svg";
function App()
{
  return (
<>
    <div className={sdcss.main}>
    <div className={sdcss.lnmlogo}></div>
    <h1 className={sdcss.heading}>Student Details</h1>
    <div className={sdcss.container1}>
      <div className={sdcss.image}>Image</div>
      <div className={sdcss.content}>content</div>
    </div>
 
   <div className={sdcss.container2}>
         <h1 className={sdcss.heading}>Course Details</h1>
           <div className={sdcss.cardDiv}>
           {course.map((item)=> (
            <div key={item.id}>
              <CourseCard heading1={item.heading1}/>
            </div>
           ))

           }
           </div>
     </div>
   </div>

</>
  );
}

export default App;