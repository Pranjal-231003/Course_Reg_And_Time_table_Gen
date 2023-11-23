import React from 'react';
import sdcss from './StudentDetails.module.css'
import CourseCard from '../../components/CourseCard/CourseCard';
import course from '../../Data/CourseDetails';
function App()
{
  return (
<>
   <div className={sdcss.main}>
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