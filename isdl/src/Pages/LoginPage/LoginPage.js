import React from 'react';
import lpcss from './LoginPage.module.css'
import arrow from '../../images/Iconarrow.svg'
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
            <input className={lpcss.logininput} placeholder='USERNAME'></input>
            <input className={lpcss.logininput} placeholder='PASSWORD'></input>
            <div className={lpcss.loginbutton}>
              <img src={arrow} className= {lpcss.arrow1} />
            </div>
        </div>
        
    </div>
  </div>
</>
  );
}

export default App;