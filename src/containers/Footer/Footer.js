import './Footer.css';

import React from 'react'
import { Link } from 'react-router-dom';
import ThemeG from '../../theme-context';
import FooterWrapper from './FooterWrapper';
import { useContext } from 'react';

const NewLink = [
    { to: "/", word: "Home", exact: true },
    { to: "/detskiy-mir", word: "Детский мир" },
    { to: "/uy", word: "Недвижимость " },
    { to: "/transport", word: "Транспорт " },
    { to: "/ish", word: "Работа " },
    { to: "/jonivorlar", word: "Животные " },
]

const NewLink2 = [
    { to: "/uy-va-bog", word: "Дом и сад" },
    { to: "/biznes", word: "Бизнес и услуги" },
    { to: "/moda", word: "Мода и стиль" },
    { to: "/hobbi", word: "Хобби, отдых и спорт" },
    { to: "/tekin", word: "Отдам даром " },
    { to: "/ayirboshlash", word: "Обмен " }
]


export const Footer = () => {
    const { theme, Toggletheme } = useContext(ThemeG)
    console.log(theme, Toggletheme);
    return (
        <FooterWrapper className={`foterd ${theme}`}>
            <div>
                <div className="container2 d-flex justify-content-between ">
                    <div className="row">
                        <div className="klm col-lg-4 col-md-6 col-sm-12">

                            {NewLink.map(v => {
                                return <div className=''>
                                    <Link to={v.to} key={v.to} exact={v.exact} className='dfg'><p>{v.word}</p></Link>

                                </div>

                            })}
                        </div>

                        <div className="klm col-lg-4 col-md-6 col-sm-12">

                            {NewLink2.map(v => {
                                return <div className=''>
                                    <Link to={v.to} key={v.to} exact={v.exact} className='dfg'><p>{v.word}</p></Link>

                                </div>

                            })}
                        </div>


                        <div className="klm col-lg-4 col-md-6 col-sm-12">
                            <img src="https://static.olx.uz/static/olxuz/packed/font/2fc9f37e6707acfc0e1255cec57c49a986.svg" alt="" className='rasm33 mt-2' />
                            <img src="https://static.olx.uz/static/olxuz/packed/font/2fccd2faa9395d5faed1011516c64dc929.svg" alt="" className='rasm33 mt-2' />
                            <p className='text-secondary'>Бесплатное приложение для твоего телефона</p>

                        </div>



                    </div>




                </div>

            </div>
        </FooterWrapper>
    )
}
