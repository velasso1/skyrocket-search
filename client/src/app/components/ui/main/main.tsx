import React, { FC } from 'react';

const Main: FC = () => {
    return (
        <main className="main">
                <div className="main__content">
                    <div className="main__greeting">
                        <h1 className="main__title">Приветствуем тебя на <span className='main__name'>Skyrocket Search!</span></h1>
                    </div>
                    <div className="main__description">
                        <p className="main__tagline">
                            *Наш проект - это система, разработнная для помощи в поиске высококвалифицированных и мотивированных специалистов
                        </p>
                    </div>

                    <div className="main__question">
                        <p className="main__question-text">
                            Что бы ты хотел найти?
                        </p>
                        <div className="main__buttons">
                            <button className='main__button main__work'>Работу</button>
                            <button className='main__button main__serv'>Сотрудников</button>
                        </div>
                    </div>
            </div>
        </main>
    )
}

export default Main;