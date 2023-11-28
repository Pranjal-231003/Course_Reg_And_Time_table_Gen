import React from 'react';
import lpcss from './LoginPage.module.css'

function App()
{
  return (
<>
  <div className={lpcss.main}>
    <div className={lpcss.navbar}>
        <div className={lpcss.navLogo}>
            <div className={lpcss.lnmlogo}></div>
            <div className={lpcss.developed}>Developed By</div>
        </div>
        <div className={lpcss.lnmphoto}></div>
    </div>
    <div>
    </div>
    <div className={lpcss.container1}>
        <div className={lpcss.logincontainer}>
            <div className={lpcss.logininput}></div>
            <div className={lpcss.logininput}></div>
            <div className={lpcss.loginbutton}></div>
        </div>
        
    </div>
  </div>
</>
  );
}

export default App;