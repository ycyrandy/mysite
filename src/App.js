import React, { Component } from 'react';
import './foundation.css'
import { MyHeader } from './components/Header'
import { MyInfo } from './components/About'
import { MySkill } from './components/Skill'
import { MyExperience } from './components/Experience'
import { MyResume } from './components/Resume'
import { MyContact } from './components/Contact'
import { MyFooter } from './components/Footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown, faLaptopCode, faTerminal, faFileAlt, faPen, faAngleUp } from '@fortawesome/free-solid-svg-icons'
library.add(faAngleDown, faLaptopCode, faTerminal, faFileAlt, faPen, faAngleUp)

class App extends Component {
  render() {
    return (
      <div className="app-root">
        <MyHeader/>
        <MyInfo/>
        <MyExperience/>
        <MySkill/>
        <MyResume />
        <MyContact />
        <MyFooter />
      </div>
    );
  }
}

export default App;
