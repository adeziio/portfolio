import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
import { FaBook } from 'react-icons/fa';

function About() {
  return (
    <>
      <svg class="transition duration-300 ease-in-out delay-150" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 400" id="svg" width="100%" height="100%">
        <path transform="rotate(-180 720 200)" class="transition-all duration-300 ease-in-out delay-150" fill="#151418ff" stroke-width="0" stroke="none" d="M 0,400 C 0,400 0,200 0,200 C 109.28571428571428,173 218.57142857142856,146 327,141 C 435.42857142857144,136 542.9999999999999,153 686,185 C 829.0000000000001,217 1007.4285714285713,264 1139,269 C 1270.5714285714287,274 1355.2857142857142,237 1440,200 C 1440,200 1440,400 1440,400 Z"></path>
      </svg>
      <ContactWrapper id="about">
        <div className="Container">
          <div className="SectionTitle">About Me&nbsp;{<FaBook />} </div>
          <div className="BigCard">
            <ScrollAnimation animateIn="fadeInLeft">
              <Image
                src="/pfp.jpg"
                alt="man-svgrepo"
              />
            </ScrollAnimation>
            <div className="AboutBio">
              <ScrollAnimation animateIn="fadeInLeft">
                Hello! My legal name is <strong>Thien</strong>, but my friends call me <strong>Aden</strong>. I am originally from Vietnam and have been living in the United States for over 15 years. With over 3 years of working experience, I gained valuable experience through various software development positions,  which greatly enhanced my work ethic, communication skills, and adaptability.
              </ScrollAnimation>
              <br /><br />
              <ScrollAnimation animateIn="fadeInLeft">
                My journey into the world of technology began with a strong passion for coding and problem-solving, which led me to pursue the Computer Science program at George Mason University (GMU). Despite its challenges, I remained determined and forged lasting friendships that supported me throughout the years.
              </ScrollAnimation>
              <br /><br />
              <ScrollAnimation animateIn="fadeInLeft">
                Working collaboratively within a team towards a shared objective has been an incredibly rewarding and amazing experience for me. I am eager to continue exploring exciting projects in the future, with a particular interest in full-stack development and cross-platform mobile development.
                <br /><br />
                <div className="tagline2">
                  Here is a list of some technologies that I am familiar with:
                </div>
              </ScrollAnimation>
              <Technologies>
                {stackList.map((stack, index) => (
                  <ScrollAnimation animateIn="fadeInLeft" key={index}>
                    <Tech key={index} className="tech">
                      <TechImg src={stack.img} alt={stack.name} />
                      <TechName>{stack.name}</TechName>
                    </Tech>
                  </ScrollAnimation>
                ))}
              </Technologies>
            </div>

          </div>
        </div>
      </ContactWrapper>
    </>
  );
}

export default About;
