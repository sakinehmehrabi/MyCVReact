import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div className="my-auto">
          <img className="img-fluid img-profile-mini rounded-circle mx-auto mb-2 d-lg-none" src="img/sakineh.jpg" alt=""/>
          <h1 className="mb-0">Mehrabi
            <span className="text-primary">Sakineh</span>
          </h1>
          <div className="subheading mb-5">North GreenWich London· (44) 0770-912-6734 ·
            <a href="mailto:name@email.com">safa_mehr46@yahoo.com</a>
          </div>
          <p className="mb-5">I am a passionate front-end developer with few years of experience in front end development. I was involved in some backend development (.Net framework) as well. I am highly organized and disciplined. I easily adapt to new environment and value working with new people. I love using recent technologies and eager to learn. </p>
          <ul className="list-inline list-social-icons mb-0">
            <li className="list-inline-item">
              <a href="https://www.facebook.com/safoora.mehrabi" target="blank">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" target="blank">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/feed/?trk=" target="blank">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://github.com/sakinehmehrabi" target="blank">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>

    );
  }
}

export default About;
