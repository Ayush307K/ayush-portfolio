import React from 'react';
import './Eductaion.css';  
import eduImgWhite from '../Assets/eduImgWhite.svg';
import eduOrange from '../Assets/eduOrange.svg';

const Education = () => {
  return (
    <section className="education" id="resume">
      <div className="education-body">
        <div className="education-description">
        <button class="Projects-Button">

  <span class="text" id='education'>Education</span>
</button>
          <div className="education-card">
            <div className="educard-img">
              <img src={eduImgWhite} alt="Education Icon" />
            </div>
            <div className="education-details">
              <h6 className="education-year">2008-2015</h6>
              <h4 className="education-degree"> Primary Education</h4>
              <h5 className="education-institution">K.B.C Memorial Public School</h5>
            </div>
          </div>
          <div className="education-card">
            <div className="educard-img">
              <img src={eduImgWhite} alt="Education Icon" />
            </div>
            <div className="education-details">
              <h6 className="education-year">2008-2018</h6>
              <h4 className="education-degree">Secondary Education</h4>
              <h5 className="education-institution">Jain International School</h5>
            </div>
          </div>
          <div className="education-card">
            <div className="educard-img">
              <img src={eduImgWhite} alt="Education Icon" />
            </div>
            <div className="education-details">
              <h6 className="education-year">2018-2023</h6>
              <h4 className="education-degree">Senior Secondary Education</h4>
              <h5 className="education-institution">Maa Kalyanika Public School</h5>
            </div>
          </div>
          <div className="education-card">
            <div className="educard-img">
              <img src={eduImgWhite} alt="Education Icon" />
            </div>
            <div className="education-details">
              <h6 className="education-year">2023-Present</h6>
              <h4 className="education-degree">Bachelor of Computer Science</h4>
              <h5 className="education-institution">BITS Pilani</h5>
            </div>
          </div>
        </div>
        <div className="education-image">
          <img src={eduOrange} alt="Education Illustration" />
        </div>
      </div>
    </section>
  );
};

export default Education;