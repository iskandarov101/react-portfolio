import React, { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import skillsData from '../../data/skills.json';
import {
  faSass,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import './skills.scss';
import Loader from 'react-loaders';
const Skills = () => {

  const [letterClass, setLetterClass] = useState('text-animate')

  const skillArray = ['F', 'r', 'o', 'n', 't', '', ' - ', '', 'e', 'n', 'd',]
  const experArr = ['', 'T', 'i', 'p', 's']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const renderSkills = (portfolio) => {
    return (
      <div className="skill-wrapper">
        {
          portfolio.map((port, id) => {
            console.log(port);
            return (
              <div className="skill-box" key={id}>
                <img className="skill-image" src={port.img} alt={port.title} />
                <div className="content">
                  <p className="title">{port.title}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }


  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillArray}
              idx={15}
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={experArr}
              idx={22}
            />
          </h1>
          <p>
            In front-end development including technologies like
            <span className="tech-tag"> HTML:5</span>
            ', '
            <span className="tech-tag">CSS3</span>
            ', '
            <span className="tech-tag">JavaScript</span>
            ', '
            <span className="tech-tag">React</span>
            ', '
            <span className="tech-tag">Redux</span>
            ', '
            <span className="tech-tag">TypeScript</span>
            ', '
            <span className="tech-tag">Next</span>
          </p>
          <p> I’m not a designer but I have a good sense of aesthetics, and
            experience in responsive, mobile-first web design. I put special
            effort into optimizing my code and providing the best user
            experience. I would love to give you any kind of support also after
            the project's completion. I guarantee a commitment during work on
            your project.</p>
          <div>{renderSkills(skillsData.tips)}</div>
        </div>

        
        <div className="stage-cube-cont-skill">
          <div className="cubespinner-skill">
            <div className="face1">
              <FontAwesomeIcon icon={faSass} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />

    </>
  )
}

export default Skills;
