import './Header.css';

import React from 'react'
import { Link } from 'react-router-dom';
import { Container } from '../Container/Container';
import { useContext } from 'react';
import ThemeG from '../../theme-context';
import HeaderWrapper from './HeaderWrapper'
import { render } from 'react-dom';

export const Header = () => {
    const { theme, Toggletheme } = useContext(ThemeG)
    console.log(theme, Toggletheme);


    return (
        <div>
            <HeaderWrapper className={`Heeader ${theme}`}>
                <div className="container">
                    <div className='chaprasm'>
                        <img src="https://static.olx.uz/static/olxuz/naspersclassifieds-regional/olxeu-atlas-web-olxuz/static/img/fb/fb-image_redesign.png?t=21-07-29" className='headerImg' alt="" />
                    </div>
                    <div className='ongmenu'>
                        <div className='btnsoz'>
                            <span className='btnsoz2'>O'Z | RU</span>
                            <span className='btnsoz1'>Мой профиль</span>
                        </div>
                        <div className='tugma12'>
                            <button className='btn btn-light'>Подать объявление</button>
                        </div>
                        <button onClick={Toggletheme} className={`ms-1 btn btn-${theme == "light" ? "light" : "dark"}`} >{theme == "light" ? "Light" : "Dark"} </button>

                    </div>
                </div>
            </HeaderWrapper>

        </div>
    )
}
