import React from "react";
import './Techs.css'


function Techs() {
    return (
        <section className="techs">
            <div className='techs__title-container'>
               <h2 className='techs__title'>Технологии</h2>
            </div>
        <div className='techs__about-container'>
            <h3 className='techs__subtitle'>7 технологий</h3>
            <p className='techs__text'>
            На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
            </p>
        </div>
        <div className='techs__info-container'>
            <p className='techs__number'>HTML</p>
            <p className='techs__number'>CSS</p>
            <p className='techs__number'>JS</p>
            <p className='techs__number'>React</p>
            <p className='techs__number'>Git</p>
            <p className='techs__number'>Express.js</p>
            <p className='techs__number'>mongoDB</p>
        </div>
        </section>
    )
}

export default Techs