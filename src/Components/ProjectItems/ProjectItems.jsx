import React from 'react'

import gitSvg from '../../img/svg/github.svg';
import linkSvg from '../../img/svg/link.svg';

function ProjectItems({ projectItemsArr }) {
  return (
    <>
      {projectItemsArr.map(item => (
        <div className="row">
          <div className="col-lg-4">
            <img className='portfolio__screen' src={require(`../../img/${item.imgName}`)} alt="" />
          </div>
          <div className="col-lg-8">
            <div className="portfolio__descr">
              <p>{item.description}</p>
              <ul className='portfolio__stack'>
                {/* <li>HTML</li>
                <li>SCSS</li>
                <li>JavaScript</li> */}
                {item.stack.map(stackItem => (
                  <li>{stackItem}</li>
                ))}
              </ul>
              <ul className="portfolio__links">
                <li>
                  <a href="https://github.com/GonokhovDm/Mosiqua">
                    Code
                    <img src={gitSvg} alt="git" />
                  </a>
                </li>
                <li>
                  <a href="https://mosiqua-deploy.vercel.app/">
                    Preview
                    <img src={linkSvg} alt="link" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default ProjectItems
