import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo"></div>
            <div className="header__navigation">
                <NavLink className="header__link" to="/">Главная</NavLink>
                <NavLink className="header__link" to="/lk">Личный кабинет</NavLink>
            </div>
        </header>
    )
}

export default Header;