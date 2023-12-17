import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
            <header className="header">
                <div className="container">
                    <div className="header__logo"><NavLink className="header__link-logo" to="/">SKYROCKET | Search</NavLink></div>
                    <div className="header__navigation">
                        <NavLink className="header__link" to="/">Главная</NavLink>
                        <NavLink className="header__link" to="/stock">Биржа</NavLink>
                        <NavLink className="header__link" to="/support">Поддержка</NavLink>
                        <NavLink to="/mode">NIGHTMODE</NavLink>
                        {/* при наведении на "биржа" будет popup с "Портфолио" и "Стартапы" */}
                    </div>
                    <div className="header__personal">
                        <NavLink className="header__link" to="/personal">Личный кабинет</NavLink>
                    </div>
                </div>
            </header>
    )
}

export default Header;