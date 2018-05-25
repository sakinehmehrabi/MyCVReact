import React, { Component } from 'react';
import './App.css';
import About from './Components/AboutSection/About';
import Education from './Components/EducationSection/Education';
import Experience from './Components/ExperienceSection/Experience';
import Skills from './Components/SkillsSection/Skills';
import Interest from './Components/InterestSection/Interest';
import Nav from './Components/NavBar/Nav';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <div class="container-fluid p-0">
        <About/>
        <Education/>
        <Experience/>
        <Skills/>
        <Interest/>
        </div>
      </div>
    );
  }
}
export default App;
