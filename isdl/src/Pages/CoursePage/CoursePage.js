
import React, { useState } from 'react';
import CourseCss from './CoursePage.module.css';
import coursePage from '../../Data/CoursePageDetails';
import CourseCard from '../../components/CourseCard/CourseCard';
import programElective from '../../Data/ProgramElectives';
import tickImg from '../../images/Vector.svg';
import plus from '../../images/plus.svg';

function CoursePage() {
  const [coreCoursesAdded, setCoreCoursesAdded] = useState(Array(coursePage.length).fill(false));
  const [electiveAdded, setElectiveAdded] = useState(Array(programElective.length).fill(false));

  const toggleCoreCourseAdded = (index) => {
    const newCoreCoursesAdded = [...coreCoursesAdded];
    newCoreCoursesAdded[index] = !newCoreCoursesAdded[index];
    setCoreCoursesAdded(newCoreCoursesAdded);
  };

  const toggleElectiveAdded = (index) => {
    const newElectiveAdded = [...electiveAdded];
    newElectiveAdded[index] = !newElectiveAdded[index];
    setElectiveAdded(newElectiveAdded);
  };

  return (
    <>
      <div className={CourseCss.main}>
        <div className={CourseCss.navbar}>
          <div className={CourseCss.lnmlogo}></div>
          <div className={CourseCss.develop}>Developed By</div>
        </div>
        <h1 className={CourseCss.heading}>Courses Offered</h1>
        <h1 className={CourseCss.heading1}>Core Courses</h1>
        <div className={CourseCss.container1}>
          {/* map of divs */}
          {coursePage.map((item, index) => (
            <div key={item.id} style={{ position: 'relative' }}>
              <CourseCard image={item.image} heading1={item.heading1} heading2={item.heading2} para1={item.para1} />
              <div className={CourseCss.tick} onClick={() => toggleCoreCourseAdded(index)}>
                <img
                  className={CourseCss.tickImg}
                  src={coreCoursesAdded[index] ? tickImg : plus}
                  alt={coreCoursesAdded[index] ? 'Tick Image' : 'Plus Image'}
                />
              </div>
            </div>
          ))}
        </div>
        <h1 className={CourseCss.heading1}>Program Elective</h1>
        <div className={CourseCss.container1}>
          {/* map of divs */}
          {programElective.map((item, index) => (
            <div key={item.id} style={{ position: 'relative' }}>
              <CourseCard image={item.image} heading1={item.heading1} heading2={item.heading2} para1={item.para1} />
              <div className={CourseCss.tick} onClick={() => toggleElectiveAdded(index)}>
                <img
                  className={CourseCss.tickImg}
                  src={electiveAdded[index] ? tickImg : plus}
                  alt={electiveAdded[index] ? 'Tick Image' : 'Plus Image'}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CoursePage;