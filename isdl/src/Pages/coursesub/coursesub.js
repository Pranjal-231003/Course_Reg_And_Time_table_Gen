import React from 'react';
import c3css from '../../Pages/coursesub/coursesub.module.css';


/*import CourseCard from '../../components/CourseCard/CourseCard';*/
/*import course from '../../Data/CourseDetails';*/
// import ImgUrl from '../../images/image 3.png';
/*import logo_lnm from '../../images/logo_lnm.png';*/


function App()
{
  return (
 <>

<div className={c3css.main}>  
<div className={c3css.lnmlogo}>
    </div>
<div> <h1 className={c3css.admin}>Course instructor</h1> </div>
 <div className={c3css.maindiv1}>

<div><button className={c3css.subject1} >DSA <br> ABCD</br><br> CREDITS:4</br><i className={c3css.arrow}></i> </button></div>
        <div><button className={c3css.subject2} >generate timetable<i className={c3css.arrow}></i></button></div>
       </div>

       <div className={c3css.maindiv2}>
       <div><button className={c3css.subject1} >DSA <br> ABCD</br><br> CREDITS:4</br><i className={c3css.arrow}></i> </button></div>
        <div><button className={c3css.subject2} >generate timetable<i className={c3css.arrow}></i></button></div>
       </div>

      
</div>

</>
);
}

export default App;










