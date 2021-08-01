import './Home.css'
import { Container } from '../../containers/Container/Container'
import { Link } from 'react-router-dom';
import data2 from '../../data/detskiy-mir';


import React from 'react'


const catigories = [
    {
        img: "https://categories.olxcdn.com/assets/categories/olxuz/detskiy-mir-36-2x.png",
        bc: "#ffce32",
        title: "Детский мир",
        to: "/detskiy-mir"
    },
    {
        img: "https://categories.olxcdn.com/assets/categories/olxuz/nedvizhimost-1-2x.png",
        bc: "#3a77ff",
        title: "Недвижимость ",
        to: "/uy"
    },
    {
        img: "https://categories.olxcdn.com/assets/categories/olxuz/transport-3-2x.png",
        bc: "#23e5db ",
        title: "Транспорт",
        to: "/transport"
    },
    {
        img: "https://categories.olxcdn.com/assets/categories/olxuz/rabota-6-2x.png",
        bc: "#ff5636",
        title: "Работа",
        to: "/ish"
    },
    {
        img: "https://categories.olxcdn.com/assets/categories/olxuz/zhivotnye-35-2x.png",
        bc: "#fff6d9",
        title: "Животные",
        to: "/jonivorlar"
    },
    {
        img: "https://categories.olxcdn.com/assets/categories/olxuz/dom-i-sad-899-2x.png",
        bc: "#ceddff",
        title: "Дом и сад",
        to: "/uy-va-bog"
    },
    {
        img: "https://categories.olxcdn.com/assets/categories/olxuz/elektronika-37-2x.png",
        bc: "#c8f8f6 ",
        title: "Электроника",
        to: "/elektronika"
    },
    {
        img: "https://categories.olxcdn.com/assets/categories/olxuz/uslugi-7-2x.png",
        bc: "#ffd6c9",
        title: "Бизнес и услуги",
        to: "/biznes"
    },
    {
        img: "https://categories.olxcdn.com/assets/categories/olxuz/moda-i-stil-891-2x.png",
        bc: "#ffce32",
        title: "Мода и стиль",
        to: "/moda"
    },
    {
        img: "https://categories.olxcdn.com/assets/categories/olxuz/hobbi-otdyh-i-sport-903-2x.png",
        bc: "#ceddff",
        title: "Хобби, отдых  и спорт",
        to: "/hobbi"
    },
    {
        img: "https://categories.olxcdn.com/assets/categories/olxuz/otdam-darom-1151-2x.png",
        bc: "#c8f8f6",
        title: "Отдам даром",
        to: "/tekin"
    },
    {
        img: "https://categories.olxcdn.com/assets/categories/olxuz/obmen-barter-1153-2x.png",
        bc: "#ffd6c9",
        title: "Обмен",
        to: "/ayirboshlash"
    }
]


export const Home = () => {
    return (
        <div>
            <div className="section111">
                <div className='kattamenu'>
                    <div className='formCard container'>
                        <input type="text" className='form-control mt-2' placeholder='Поиск...' />
                        <input type="text" className='form-control mt-2' placeholder='Весь Узбекистан' />
                        <div className='d-flex align-items-center'>
                            <button className='tugma mt-2'>Найти</button>
                        </div>
                    </div>



                    <div className='tvch'>
                        <div className='umumiyradio'>
                            <div>
                                <input type="checkbox" className='form-check-input tt' id="flexCheckDefault" />
                                <label class="form-check-label labell" for="flexCheckDefault">
                                    Искать в тексте объявлений
                                </label>
                            </div>

                            <div>
                                <input type="checkbox" className='form-check-input tt' id="rflexCheckDefault" />
                                <label class="form-check-label labell" for="rflexCheckDefault">
                                    Только с фото
                                </label>
                            </div>
                        </div>
                        <button className=' tugma2'>
                            Добавить в избранное
                        </button>

                    </div>



                </div>



                <h1 className='pt-2 mb-5 pb-2 text-center mt-5'>Главные категории</h1>
                <div className='d-flex justify-content-center'>
                    <div className='bigcard'>
                        {catigories.map(v => {
                            return <Link to={v.to} key={v.to}>

                                <div className='d-inline-block maincard2'>
                                    <div style={{ backgroundColor: v.bc }} className='icon'>
                                        <img src={v.img} alt="" className='img-fluid m-auto' />
                                    </div>
                                    <div>
                                        <p className='text-center w-100 mainwords'> {v.title}</p>
                                    </div>
                                </div>

                            </Link>
                        })}
                    </div>
                </div>

                <section className='ikkikatta'>


                    <h1 className='pt-2 mb-5 pb-2 text-center mt-5'>Премиум объявления</h1>
                    <div className="container">
                        <div className="row">
                            {data2.map(v => {
                                return <div className="mainCard col-lg-3 col-md-6 col-sm-12">
                                    <div className='bg-white m-1'>
                                        <div className='card2'>
                                            <div className=' maincard3 '>
                                                <img src={v.img} alt="" className='mainImg  img-fluid' />
                                            </div>

                                        </div>
                                        <div className='yozuv'>
                                            <p className='tovarName'>{v.title}</p>
                                            <div>
                                                <p className='time p-0 m-0'>{v.time}</p>
                                                <p>{v.price}</p>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            })}
                        </div>
                    </div>


                    <div className="d-flex justify-content-center pt-3 pb-5">
                        <button className=' tugma2 text-center'>Посмотреть все</button>
                    </div>
                </section>
            </div>

            <div className="section6">
                <div className="container d-flex justify-content-center">
                    <div className="row ">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className='d-flex justify-content-center'>
                                <img src="https://static.olx.uz/static/olxuz/packed/font/2fbd23c39bff0aee6c0c84aaf60e66347d.svg" alt="" className='rasmdiagramm' />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <p className='fs-6 fw-bold text-light text-center pt-5'>
                                Начните бизнес в интернете с OLX!
                            </p>

                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className='tugma9'>
                                <button className=' btn btn-light text-start'>Посмотреть все</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <section className='section7'>
                <div className="container">
                    <div className="row">
                        <div className="col-8 offset-2">
                            <div className='text-center'>
                                <img src="https://static.olx.uz/static/olxuz/packed/font/2f245edf8d709c906bd6c4b03d1623d647.svg" alt="" className='img7' />

                            </div>
                            <div>
                                <p className='text-center'>Cервис объявлений № 1 в Узбекистане</p>
                                <p className='text-center'>Частные объявления Узбекистана на OLX (бывший torg.uz) - здесь вы найдете то, что искали.
                                    Нажав на кнопку "Подать объявление", вы сможете разместить онлайн-объявление на любую необходимую тематику - поиск работы, услуги, продажа автомобилей, недвижимости, электроники и многое другое.
                                    С помощью сервиса OLX в Узбекистане вы можете найти, продать или купить практически все, что угодно. Воспользовавшись функцией поиска, вы без труда найдете уже опубликованные объявления интересующей вас тематики.
                                    OLX в Узбекистане - ваш надежный и незаменимый помощник</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="section111">
                <div className='container pt-5 pb-5'>
                    <div className="row">
                        <div className="col-12">
                            <div>
                                <img src="https://static.olx.uz/static/olxuz/packed/font/2fc1ef4e9c6a6dc640b6feb727836fabc7.svg" alt="" className='d-block' />

                            </div>
                        </div>
                        <div className="col-12">
                            <p>Разделы на сервисе OLX: Детский мир, Недвижимость, Транспорт, Работа, Животные, Дом и сад, Электроника, Бизнес и услуги, Мода и стиль, Хобби, отдых и спорт, Отдам даром, Обмен</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}
