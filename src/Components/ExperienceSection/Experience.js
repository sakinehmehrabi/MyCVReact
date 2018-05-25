import React, { Component } from 'react';
import './Experience.css';

class Experience extends Component {
  render() {
    return (
<section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
        <div className="my-auto">
          <h2 className="mb-5">Education</h2>
          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">IAU ARAK Branch</h3>
              <div className="subheading mb-3">·	Master’s Degree in computer software </div>
              <div></div>
                          </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2015-Did not finish</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Abadeh Institute</h3>
              <div className="subheading mb-3">·	Bachelor’s Degree in computer engineering </div>
          
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2007-2009</span>
            </div>
          </div>

        <div className="resume-item d-flex flex-column flex-md-row mb-5">
          <div className="resume-content mr-auto">
            <h3 className="mb-0">IAU Mahshahr Branch</h3>
            <div className="subheading mb-3">·	Higher Diploma in Computer Software</div>
            <div> </div>
                        </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">2004-2007</span>
          </div>
        </div>
      </div>
      
      </section>
);
}
}

export default Experience;
