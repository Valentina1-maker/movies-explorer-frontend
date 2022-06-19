import React from 'react';
import './AboutProject.css'

function AboutProject() {
    return (
        <section className='about-project'>
            <div className='about-project__title-container'>
                <h2 className='about-project__title'>О проекте</h2>
            </div>
            <div className='about-project__info-container'>
                <h3 className='about-project__subtitle'>Дипломный проект включал 5 этапов</h3>
                <p className='about-project__text'>
                    Составление плана, работу над бэкендом, вёрстку, добавление
                    функциональности и финальные доработки.
                </p>
                <h3 className='about-project__subtitle'>На выполнение диплома ушло 5 недель</h3>
                <p className='about-project__text'>
                    У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
                    соблюдать, чтобы успешно защититься.
                </p>
            </div>
            <div className='about-project__time-container'>
                <p className='about-project__time-number'>1 неделя</p>
                <p className='about-project__time-about'>Back-end</p>
                <p className='about-project__time-number'>4 недели</p>
                <p className='about-project__time-about'>Front-end</p>
            </div>
        </section>
    )
}

export default AboutProject