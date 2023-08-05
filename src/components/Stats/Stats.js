import React, { useState, useEffect } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import { FaGithubSquare } from 'react-icons/fa';


function Stats() {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 1000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);
  return (
    <div id="stats" className='Container' style={{ marginTop: '5rem' }} >
      <div className="SectionTitle" style={{ display: 'flex', alignItems: "center", flexWrap: 'wrap' }}>Stats&nbsp;{<FaGithubSquare />} </div>
      <div className="BigCard" style={{ padding: '0 10px 10px 10px' }}>
        <ScrollAnimation animateIn="fadeIn" >
          {showComponent &&
            <div align="center">
              <img alt="snake eating my stats" src="https://raw.githubusercontent.com/adeziio/adeziio/output/github-contribution-grid-snake.svg" />
              <img src="https://streak-stats.demolab.com/?user=adeziio&count_private=true&theme=react&border_radius=10" alt="streak stats" />
              <img src="https://github-readme-stats.vercel.app/api?username=adeziio&count_private=true&show_icons=true&theme=react&rank_icon=github&border_radius=10" alt="readme stats" />
              <img align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=adeziio&hide=HTML&langs_count=8&layout=compact&theme=react&border_radius=10&size_weight=0.5&count_weight=0.5&exclude_repo=github-readme-stats" alt="top langs" />

            </div>
          }
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default Stats;