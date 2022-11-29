import React from "react";
import '/Users/vladimir/Desktop/ frontend/src/styles/header.scss'

import logo from '/Users/vladimir/Desktop/ frontend/src/assets/logo/codebrologo.svg'
import search from '/Users/vladimir/Desktop/ frontend/src/assets/header/search.svg'
import sun from '/Users/vladimir/Desktop/ frontend/src/assets/header/sun.svg'
import profile from '/Users/vladimir/Desktop/ frontend/src/assets/header/profile.svg'

function Header() {

    return (
        <div className="header">
            <div className="header__container">
                <div className="header__logo logo-header">
                    <img src={logo} alt="" className="logo-header__item" />
                </div>
                <div className="header__nav nav-header">
                    <ul className="nav-header__list">
                        <li className="nav-header__item"><a href="">Лента</a></li>
                        <li className="nav-header__item"><a href="">Тесты</a></li>
                        <li className="nav-header__item"><a href="">Курсы</a></li>
                        <li className="nav-header__item"><a href="">Вакансии</a></li>
                        <li className="nav-header__item"><a href="">Мероприятия</a></li>
                    </ul>
                </div>
                <div className="header__buttons buttons-header">
                    <button className="buttons-header__create">Create blog</button>
                    <img src={profile} alt="" className="buttons-header__profile" />
                    <img src={search} alt="" className="buttons-header__search" />
                    <img src={sun} alt="" className="buttons-header__theme" />
                    <div className="burger"><span className="burger-item"></span></div>
                </div>
            </div>
        </div>
    )
}

export default Header;

