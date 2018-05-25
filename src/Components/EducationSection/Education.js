import React, { Component } from 'react';
import './Education.css';

class Education extends Component {
  render() {
    return (
<section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div className="my-auto">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">MOBILE APP</h3>
              <div className="subheading mb-3">JASMINGARDEN / PLANET PIZZA</div>
              <p>As Front End Developer, I was responsible for designing the layout in photoshop and coding it in HTML/CSS/JavaScript (for the business logic), I can provide in case required.</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Mar 2016 - Feb 2017</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Web Developer</h3>
              <div className="subheading mb-3">Freelancer</div>
              <p>·	As Front-End Developer /UX designer, I was responsible for designing the UX journey/designing the web pages /coding HTML-CSS-Bootstrap- JavaScript-jQuery.</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Dec 2014 - Jan 2016</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">IT Engineer</h3>
              <div className="subheading mb-3">KHORAMSHAHR PORT</div>
              <p>As a member of IT team, I was responsible for designing the Assets (Icons -Banner -Logo – presentation(ppt)) Managing the content and data entry also maintaining the daily back up.</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Jan 2012 - Oct 2014</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">IT Support</h3>
              <div className="subheading mb-3">KIA SYSTEMS</div>
              <p>Hardware Installation /Graphic Design such as Business Cards, Posters, Stands, …</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Sep 2010 - DEC 2011</span>
            </div>
          </div>

        </div>

      </section>

        );
    }
}

export default Education;
