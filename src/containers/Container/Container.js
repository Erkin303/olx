import './Container.css';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import React from 'react'

export const Container = (props) => {
    return (
        <div>
            <Header></Header>
            {props.children}
            <Footer></Footer>
        </div>
    )
}
