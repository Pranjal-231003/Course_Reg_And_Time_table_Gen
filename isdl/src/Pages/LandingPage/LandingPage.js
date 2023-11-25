import React from 'react';
import lpcss from './LandingPage.module.css'
// import logo_lnm from "../public/logo_lnm.png";
// import CourseCard from '../../components/CourseCard/CourseCard';
// import course from '../../Data/CourseDetails';
function App()
{
  return (
<>
  <div className={lpcss.main}>
    <div className={lpcss.navbar}>
      <div className={lpcss.lnmlogo}></div>
      <div className={lpcss.develop}>Developed By</div>
    </div>
    <h1 className={lpcss.heading}>Student Details</h1>
    <div className={lpcss.container1}>
      <div className={lpcss.content}>content</div>
      <div className={lpcss.image}></div>
    </div>
  </div>


</>
  );
}

export default App;