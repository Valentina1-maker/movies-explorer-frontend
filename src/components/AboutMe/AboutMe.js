import React from "react";
import myPhoto from "../../images/my-foto.png";
import './AboutMe.css'

function AboutMe() {
  return (
    <section className="aboutme" id="about-me">
      <div className='aboutme__title-container'>
        <h2 className='aboutme__title'>Студент</h2>
      </div>
      <div className="aboutme__info-container">
        <div className="aboutme__info-me">
          <h2 className="aboutme__name">Валентина</h2>
          <h3 className="aboutme__profession">Фронтенд-разработчик&#44;40 лет</h3>
          <p className="aboutme__info-text">Я родилась и живу в Саратове&#44;закончила педагогический институт СГУ&#46;
            Люблю слушать музыку и читать классическую литературу&#44;увлекаюсь велоспортом&#46;
            Веб&#8209;разработкой увлеклась при прохождении курса на&nbsp;платформе Яндекс&#46;Практикум&#46;</p>
          <ul className="aboutme__links">
            <li className="aboutme__links-item">
              <a href="https://github.com/Valentina1-maker" className="aboutme__link">GitHub</a>
            </li>
            <li className="aboutme__links-item">
              <a href="https://t.me/sarasvatj" className="aboutme__link">
                Facebook
              </a>
            </li>
          </ul>
        </div>
        <div>
          <img className="aboutme__photo" src={myPhoto} alt="Фотография Валентины" />
        </div>
      </div>
    </section>
  )
}

export default AboutMe