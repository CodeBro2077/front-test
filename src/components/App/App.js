import React from "react";
import '../../styles/index.scss'
import '../../styles/normalize.scss'
import logo from '../../assets/logo/codebrologo.svg'

import Registration from "/Users/vladimir/Desktop/ frontend/src/components/Authorization/Registration/Registration.js";
import Login from "/Users/vladimir/Desktop/ frontend/src/components/Authorization/Login/Login.js";

import { Routes, Route, Link } from 'react-router-dom'
import MainPage from "../MainPage/MainPage";

function App() {
    const [authStatus, setAuthStatus] = React.useState(false)

    // auth log / reg
    const [auth, setAuth] = React.useState(false)
    const changeAuth = () => {
        setAuth(!auth)
        setcheckPassword(false);
    }

    // Скрытие / открытие пароля
    const [checkPassword, setcheckPassword] = React.useState(false);
    const clickCheckPassword = () => {
        setcheckPassword(!checkPassword);
    }

    return (
        <div className="wrapper relative">
            <div className={`authorization ${authStatus ? 'none' : ''}`}>
                <img src={logo} alt="" className="authorization__logo" />
                {auth ? (
                    <Login
                        changeAuth={changeAuth}
                        clickCheckPassword={clickCheckPassword}
                        checkPassword={checkPassword}
                        authStatus={authStatus}
                        setAuthStatus={setAuthStatus} />
                ) : (
                    <Registration
                        changeAuth={changeAuth}
                        clickCheckPassword={clickCheckPassword}
                        checkPassword={checkPassword}
                    />
                )}

            </div>
            <MainPage />
        </div>
    );
}

export default App;
