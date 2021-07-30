import './child.css'

import React from 'react'
import { Container } from '../../containers/Container/Container'
import { useParams } from 'react-router-dom'
import datas from '../../data'

export const Child = () => {
    // const { to } = useParams();
    // console.log(to);
    // const obj = datas.filter(v => v.to === to)[0];
    // const data = obj.data;

    return (
        <div>
            <div className="container">
                {/* <h1>to:{to}</h1>
                <div className="row">
                    {data.map(v => {
                        return <div className='col-4'>
                            <div>
                                <p> {v.img}</p>
                                <p> {v.price}</p>
                                <p> {v.title}</p>
                            </div>
                        </div>

                    })}
                </div> */}
            </div>
        </div>
    )
}
