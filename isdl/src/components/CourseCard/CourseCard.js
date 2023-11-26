import React from 'react';
import CardCss from './CourseCard.module.css';
import tickImg from '../../images/Vector.svg'
function CourseCard(props)
{
  return (
<>
     <div className={CardCss.main}>
      <div className={CardCss.image}>
        <img src={props.image} />
      </div>

      <div className={CardCss.content}>
   
      <h1 className={CardCss.heading1}>{props.heading1}</h1>
      <h1 className={CardCss.heading2}>{props.heading2}</h1>
         <p className={CardCss.para1}>{props.para1}</p>
      </div>
      <div className={CardCss.tick}>
      <img className={CardCss.tickImg} src={tickImg} />
     </div>
     </div>
     
</>
  );
}

export default CourseCard;