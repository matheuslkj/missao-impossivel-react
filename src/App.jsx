import React from 'react'
import { Header } from './components/Header'
import { Card } from './components/Card'
import { Footer } from './components/Footer'

import banner from './imagens/banner.jpg'
import card1 from './imagens/card1.jpg'
import card2 from './imagens/card2.jpg'
import card3 from './imagens/card3.jpg'
import card4 from './imagens/card4.jpg'

import styles from './styles.module.css'
import './styles/global.css'

function App() {

    return (
        <>
            <Header />
            <img width="100%" src={banner} />
            <h1
                style={{
                    margin: 15,
                    textAlign: 'center'
                }}
            >Filmes</h1>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >

                <Card imagem={card1} texto={"Missao Impossivel 2"} />
                <Card imagem={card2} texto={"Missao Impossivel 3"} />
                <Card imagem={card3} texto={"Missao Impossivel 4"} />
                <Card imagem={card4} texto={"Missao Impossivel 5"} />

            </div>

            <Footer/>
        </>
    );
}

export default App;
