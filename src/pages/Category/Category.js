import './Category.css'

import React from 'react'
import { Container } from '../../containers/Container/Container'
import datas from '../../data'
import { Link, useParams } from 'react-router-dom'

const viloyat = [
    { toun: "Ташкентская область (5 503)" },
    { toun: "Каракалпакстан (42)" },
    { toun: "Андижанская область  (7)" },
    { toun: "Самаркандская область (236)" },
    { toun: "Сырдарьинская область (20)" },
    { toun: "Джизакская область  (7)" },
    { toun: "Бухарская область (127)" },
    { toun: "Хорезмская область (19)" },
    { toun: "Сурхандарьинская область (7)" },
    { toun: "Ферганская область (127)" },
    { toun: "Кашкадарьинская область (18)" }
]

export const Category = () => {
    const { category } = useParams();

    // asosiy map

    const obj = datas.filter(v => v.category == category)[0];
    const data = obj.data;

    console.log(datas);
    console.log(obj);
    console.log(data);

    return (

        <div className="section1">

            <div className="section111">

                <div className='formCard'>
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


                <div class='section77'>
                    <div className="select5">
                        <div class='select4'>
                            <label htmlFor="exampleSelect" className='mb-3 '>Рубрика</label>
                            <select name="select" id="exampleSelect" className='form-control ghk me-1'>
                                <option value="select">Игрушки</option>
                                <option value="select">Wears</option>
                                <option value="select">Sweets</option>
                            </select>
                        </div>

                        <div class='select4'>
                            <label htmlFor="uexampleSelect" className='mb-3'>Состояние</label>
                            <select name="select" id="uexampleSelect" className='form-control ghk'>
                                <option value="select">Все</option>
                                <option value="select">Wears</option>
                                <option value="select">Sweets</option>
                            </select>
                        </div>
                    </div>

                    <div class='d-inline-block'>
                        <p>Цена</p>
                        <div class='d-flex'>
                            <input type="number" placeholder='от' className='form-control llk' />
                            <input type="number" placeholder='до' className='form-control llk' />
                        </div>
                    </div>

                </div>


            </div>


            <div className="section121">
                <h2 className='mt-3 mb-3 ms-3'>Топ-объявления</h2>
                <div className="row">
                    <section className='section8 col-lg-9 col-md-12'>

                        {data.map(v => {
                            return <div>
                                <div className='card2'>
                                    <div>
                                        <img src={v.img} alt="" className='mainImg img-fluid' />
                                    </div>
                                    <div className='card3'>
                                        <div className='ghjkl w-100 '>
                                            <p className='tovarName'>{v.title}</p>
                                            <p className='narxik'>{v.price}</p>
                                        </div>
                                        <p className='time'>{v.time}</p>
                                    </div>
                                </div>

                            </div>
                        })}
                    </section>
                    <div className="col-lg-3 col-md-12">
                        <div className='aksiya text-center'>
                            <img src="https://tpc.googlesyndication.com/simgad/14648128467082575446?sqp=4sqPyQQrQikqJwhfEAEdAAC0QiABKAEwCTgDQPCTCUgAUAFYAWBfcAJ4AcUBLbKdPg&rs=AOga4qmXKJYKClNQWic9Z7Gn3LPyTMk08g" alt="" />
                        </div>
                    </div>

                </div>
            </div>

            <div className="section111">
                <div className='pt-5 pb-5'>
                    <p class='viloyatlar'>Основные разделы OLX Рубрики в разделе "Детский мир"</p>
                    <p className='pb-4 viloyatlar'>Узбекистан</p>


                    <div className="row">
                        {viloyat.map(v => {
                            return <div className="col-lg-3 cl-md-4 col-sm-6">
                                <div>
                                    <p class='viloyatlar'>{v.toun}</p>
                                </div>
                            </div>
                        })}

                    </div>
                </div>
            </div>

        </div>


    )
}
