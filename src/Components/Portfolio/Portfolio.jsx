import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import portfolioData from '../../data/data.json';


import "./portfolio.scss";
const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timer);
    }
  });

  const renderPortfolio = (portfolio)=> {
    return(
      <div className="images-container">
        {
          portfolio.map((port, id)=> {
            return(
              <div className="image-box" key={id}>
                <img className="portfolio-image" src={port.cover} alt="portfolio" />
                <div className="content">
                  <p className="title">{port.title}</p>
                  <h4 className="description">{port.description}</h4>
                  <button className="btn btn__gap" onClick={()=> window.open(port.url)}>View</button>
                  <button className="btn" onClick={()=> window.open(port.gitHubUrl)}>GitHub</button>
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
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Portfolio".split("")}
            idx={15}
          />
        </h1>
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Portfolio;