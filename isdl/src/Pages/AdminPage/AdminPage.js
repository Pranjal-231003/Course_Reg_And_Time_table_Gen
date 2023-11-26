import React from 'react';
import apcss from './AdminPage.module.css'
//import logo_lnm from '../src/images/logo_lnm.png';
// import CourseCard from '../../components/CourseCard/CourseCard';
// import course from '../../Data/CourseDetails';
function App()
{
  return (
<>
  <div className={apcss.main}>
   
      <div className={apcss.lnmlogo}></div>
     
    
   <div> <h1 className={apcss.admin}>Admin</h1> </div>
   <div> <h2 className={apcss.dsa}>DSA</h2></div>

    <div className={apcss.content}>content</div>
    <div className={apcss.maindiv}> 
        <div><button className={apcss.addcourse} >Add course<i className={apcss.arrow}></i> </button></div>
        <div><button className={apcss.deletecourse} >Delete course<i className={apcss.arrow}></i></button></div>
        <div><button className={apcss.modifycourse}>Modify course<i  className={apcss.arrow}></i></button></div>
    </div> 

    </div>

      
   
  


</>
  );
}

export default App;