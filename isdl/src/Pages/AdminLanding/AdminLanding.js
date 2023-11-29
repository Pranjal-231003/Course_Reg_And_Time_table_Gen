import React from 'react';
import alcss from '../../Pages/AdminLanding/AdminLanding.module.css';
/*import CourseCard from '../../components/CourseCard/CourseCard';*/
/*import course from '../../Data/CourseDetails';*/
import ImgUrl from '../../images/image 3.png';
/*import logo_lnm from '../../images/logo_lnm.png';*/


function App()
{
  return (
  <>
    <div className={alcss.main}>  
<div className={alcss.lnmlogo}>
    </div>
<div> <h1 className={alcss.admin}>Admin</h1> </div>
<div className={alcss.imgurl}>
 
</div>
<div className={alcss.content}>content </div>
<div className={alcss.maindiv}>

<div><button className={alcss.div1} >start registration<i className={alcss.arrow}></i> </button></div>
        <div><button className={alcss.div2} >generate timetable<i className={alcss.arrow}></i></button></div>

</div>
<div className={alcss.maindiv2}>
<div><button className={alcss.div3} >add course<i className={alcss.arrow}></i></button></div>
<div><button className={alcss.div4} >delete course<i className={alcss.arrow}></i></button></div>
<div><button className={alcss.div5} >modify course<i className={alcss.arrow}></i></button></div>
</div>




          </div>




    </>
  );
}

export default App;