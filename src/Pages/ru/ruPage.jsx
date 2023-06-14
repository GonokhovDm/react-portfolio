import React, { useState } from 'react';

import './ruPage.scss'

import gdLogoImg from '../../img/GDlogo.jpg';
import myPhoto from '../../img/myPhoto.jpg';
import gitSvg from '../../img/svg/github.svg';
import vkSvg from '../../img/svg/vk.svg';
import htmlSvg from '../../img/svg/html.svg';
import cssSvg from '../../img/svg/css.svg';
import jsSvg from '../../img/svg/js.svg';
import reactSvg from '../../img/svg/react.svg';
import scssSvg from '../../img/svg/scss.svg';
import linkSvg from '../../img/svg/link.svg';
import mailSvg from '../../img/svg/mail.svg';
import phoneSvg from '../../img/svg/phone.svg';

function RuPage( {language, setLanguage} ) {

  const [burgerIsClicked, setBurgerIsClicked] = useState(false);
  const [mobileMenuIsVisible, setMobileMenuIsVisible] = useState(false);

  const onClickBurger = () => {
    setBurgerIsClicked(!burgerIsClicked);
    setMobileMenuIsVisible(!mobileMenuIsVisible);
  }

  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <a href="/" className='navbar__logo'>
            <img src={gdLogoImg} alt="logo" />
          </a>
          <div className={`navbar__burger-btn ${burgerIsClicked ? 'active' : ''}`} onClick={onClickBurger}> <span /> </div>
          <div className={`navbar__menu ${burgerIsClicked ? 'active' : ''}`}>
            <div className="navbar__menu-items">
              <ul>
                <li><a href="/">Главная</a></li>
                <li><a href="/">О себе</a></li>
                <li><a href="/">Проекты</a></li>
                <li><a href="/">Контакты</a></li>
              </ul>
            </div>
            <div className="navbar__menu-language">
              <ul>
                <li className={`navbar__language-ru ${language === 'ru' ? 'active' : ''}`}>RU</li>
                <li className={`navbar__language-en ${language === 'en' ? 'active' : ''}`}>EN</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <div className='container'>
          <div className='row home'>
            <div className='col-lg-8 col-md-10 col-sm-12'>
              <div className="home__content">
                <div className="home__content-text">
                  <h1>Front-End React Developer</h1>
                  <p>Привет! Меня зовут Гонохов Дмитрий. Живу и работаю в городе Новосибирск. Я только начинаю свой путь в разработку, и не планирую останавливаться.</p>
                  <ul className='home__content-links'>
                    <li>
                      <a href="https://github.com/GonokhovDm">
                        <img src={gitSvg} alt="git" />
                      </a>
                    </li>
                    <li>
                      <a href="https://vk.com/gonokhov_d">
                        <img src={vkSvg} alt="vk" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="home__content-stack">
                  <span>Стек технологий</span>
                  <ul>
                    <li>
                      <img src={htmlSvg} alt="html" />
                    </li>
                    <li>
                      <img src={cssSvg} alt="css" />
                    </li>
                    <li>
                      <img src={jsSvg} alt="js" />
                    </li>
                    <li>
                      <img src={reactSvg} alt="react" />
                    </li>
                    <li>
                      <img src={scssSvg} alt="scss" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-10 col-sm-12'>
              <div className="home__frame">
                <div className="home__frame-photo">
                  <img src={myPhoto} alt="" />
                </div>
                <div className="home__frame-bg"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <section className='about'>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="about__text">
                <h2>О себе</h2>
                <div className="about__text-p">
                  <p>В роли front-end разработчика я изучил и практиковал следующие технологии: HTML, CSS, SCSS, JavaScript, React, React-Router, Bootstrap.</p>
                  <p>Изученные мной технологии позволяют поддерживать и создавать с нуля адаптивные сайты, пользовательские интерфейсы и компоненты, логику их работы и взаимодействия.</p>
                  <p>Ранее увлекался дизайном, что позволило приобрести уверенные знания в Photoshop, Corel Draw и Figma.</p>
                  <p>Помимо указанных профессиональных навыков увлекаюсь спортом, автомобилями и путешествиями.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about__image">
                <img src={require('../../img/workspace.jpg')} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='portfolio'>
        <div className="container">
          <h2>Портфолио</h2>
          <div className="row">
            <div className="col-lg-4">
              <img className='portfolio__screen' src={require('../../img/screen-1.jpg')} alt="" />
            </div>
            <div className="col-lg-8">
              <div className="portfolio__descr">
                <p>Одностраничный сайт музыкальной группы с расписанием гастролей и воспроизведением треков одного из альбомов.</p>
                <ul className='portfolio__stack'>
                  <li>HTML</li>
                  <li>SCSS</li>
                  <li>JavaScript</li>
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
          <div className="row">
            <div className="col-lg-4">
              <img className='portfolio__screen' src={require('../../img/screen-2.jpg')} alt="" />
            </div>
            <div className="col-lg-8">
              <div className="portfolio__descr">
                <p>Многостраничный сайт, с информацией о проведении конференций на различные темы. Включает в себя расписание конференций, информацию о спикерах. ценах и блог.</p>
                <ul className='portfolio__stack'>
                  <li>HTML</li>
                  <li>SCSS</li>
                  <li>JSX</li>
                  <li>React</li>
                  <li>React-Router</li>
                </ul>
                <ul className="portfolio__links">
                  <li>
                    <a href="https://github.com/GonokhovDm/react-confer">
                      Code
                      <img src={gitSvg} alt="git" />
                    </a>
                  </li>
                  <li>
                    <a href="https://gonokhovdm.github.io/react-confer/">
                      Preview
                      <img src={linkSvg} alt="link" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contacts">
        <div className="container">
          <div className="row">
            <div>
              <div className="col-12"><h2>Всегда готов к Вашим предложениям!</h2></div>
              <div className="col-12">
                <div className="contacts__items">
                  <div className="contacts__items-mail">
                    <img src={mailSvg} alt="mail" />
                    gonokhov.dm@gmail.com
                  </div>
                  <div className="contacts__items-phone">
                    <img src={phoneSvg} alt="phone" />
                    +7(906)909-12-21
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="footer">
            <div className="footer__left">
              <a href="/">
                <img src={gdLogoImg} alt="logo" />
              </a>
              <span>Copyright@2023</span>
            </div>
            <div className="footer__right">
              <ul>
                <li>
                  <a href="https://github.com/GonokhovDm">
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_2_24)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 0C27.1652 0 35 8.03238 35 17.9426C35 25.8684 29.9915 32.5919 23.0422 34.9667C22.155 35.1434 21.84 34.5831 21.84 34.1053C21.84 33.5138 21.861 31.5819 21.861 29.1809C21.861 27.5079 21.301 26.416 20.6728 25.8595C24.57 25.415 28.665 23.8976 28.665 17.0061C28.665 15.0461 27.986 13.4467 26.8625 12.1902C27.0445 11.7369 27.6447 9.91192 26.691 7.44092C26.691 7.44092 25.2245 6.96014 21.8837 9.28064C20.4855 8.88339 18.9875 8.68351 17.5 8.67651C16.0125 8.68351 14.5163 8.88339 13.1198 9.28064C9.7755 6.96014 8.3055 7.44092 8.3055 7.44092C7.35525 9.91192 7.9555 11.7369 8.13575 12.1902C7.0175 13.4467 6.33326 15.0461 6.33326 17.0061C6.33326 23.8801 10.4195 25.4208 14.3063 25.874C13.8058 26.322 13.3525 27.1123 13.195 28.2726C12.1975 28.7311 9.6635 29.5246 8.1025 26.7823C8.1025 26.7823 7.17675 25.0584 5.41975 24.9324C5.41975 24.9324 3.7135 24.9097 5.30075 26.0227C5.30075 26.0227 6.447 26.574 7.24325 28.6477C7.24325 28.6477 8.27051 31.8501 13.139 30.7651C13.1478 32.2649 13.1635 33.6783 13.1635 34.1053C13.1635 34.5796 12.8415 35.1346 11.9682 34.9684C5.01374 32.5971 0 25.8701 0 17.9426C0 8.03238 7.8365 0 17.5 0Z" fill="#fff"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_2_24">
                          <rect width="35" height="35" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://vk.com/gonokhov_d">
                  <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_3_29)">
                      <path d="M17.5 0.699997C8.22151 0.699997 0.700012 8.2215 0.700012 17.5C0.700012 26.7785 8.22151 34.3 17.5 34.3C26.7785 34.3 34.3 26.7785 34.3 17.5C34.3 8.2215 26.7785 0.699997 17.5 0.699997ZM23.961 19.6542C23.961 19.6542 25.4468 21.1207 25.8125 21.8015C25.823 21.8155 25.8283 21.8295 25.8318 21.8365C25.9805 22.0867 26.0155 22.281 25.942 22.4262C25.8195 22.6677 25.3995 22.7867 25.256 22.7972H22.631C22.449 22.7972 22.0675 22.75 21.6055 22.4315C21.2503 22.183 20.9003 21.7752 20.559 21.378C20.0498 20.7865 19.6088 20.2755 19.1643 20.2755C19.1078 20.2754 19.0517 20.2843 18.998 20.3017C18.662 20.4102 18.2315 20.8897 18.2315 22.1672C18.2315 22.5662 17.9165 22.7955 17.6943 22.7955H16.492C16.0825 22.7955 13.9493 22.652 12.0593 20.6587C9.74576 18.2175 7.66326 13.321 7.64576 13.2755C7.51451 12.9587 7.78576 12.789 8.08151 12.789H10.7328C11.0863 12.789 11.2018 13.0042 11.2823 13.195C11.3768 13.4172 11.7233 14.301 12.292 15.295C13.2143 16.9155 13.7795 17.5735 14.2328 17.5735C14.3177 17.5725 14.4012 17.5509 14.476 17.5105C15.0675 17.1815 14.9573 15.0727 14.931 14.6352C14.931 14.553 14.9293 13.692 14.6265 13.279C14.4095 12.9797 14.0403 12.866 13.8163 12.824C13.9069 12.6989 14.0264 12.5974 14.1645 12.5282C14.5705 12.3252 15.302 12.2955 16.0283 12.2955H16.4325C17.22 12.306 17.423 12.3567 17.7083 12.4285C18.2858 12.5667 18.298 12.9395 18.2473 14.2152C18.2315 14.5775 18.2158 14.987 18.2158 15.47C18.2158 15.575 18.2105 15.687 18.2105 15.806C18.193 16.4552 18.172 17.192 18.6305 17.4947C18.6903 17.5322 18.7594 17.5523 18.83 17.5525C18.9893 17.5525 19.4688 17.5525 20.7673 15.3247C21.1677 14.6077 21.5157 13.8626 21.8085 13.0952C21.8348 13.0497 21.9118 12.9097 22.0028 12.8555C22.0699 12.8213 22.1444 12.8038 22.2198 12.8047H25.3365C25.676 12.8047 25.9088 12.8555 25.9525 12.9867C26.0295 13.195 25.9385 13.8302 24.5158 15.757L23.8805 16.5952C22.5908 18.2857 22.5908 18.3715 23.961 19.6542Z" fill="#fff"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_3_29">
                        <rect width="35" height="35" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default RuPage
