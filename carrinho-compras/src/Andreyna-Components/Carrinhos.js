import React from "react";
import App from "../App";
import { Img, Meio, Lateral, Container, MeioCont, Teste, But } from "./Style-Carrinho";

import Marte from '../img/planeta-marte.jpg'
import Júpiter from '../img/jupiter.jpg'
import Netuno from '../img/netuno.jpg'
import Saturno from '../img/saturno.jpg'


export default class Carrinho extends React.Component {

    state = {
        total: 0,
        qtd: 0,
        produtos: [{
            id: Date.now(),
            nome: 'Marte',
            preco: 1000000,
            imagem: Marte

        },
        {
            id: Date.now(),
            nome: 'Júpiter',
            preco: 2000000,
            imagem: Júpiter

        },
        {
            id: Date.now(),
            nome: 'Netuno',
            preco: 5000000,
            imagem: Netuno

        },
        {
            id: Date.now(),
            nome: 'Saturno',
            preco: 10,
            imagem: Saturno

        }]
    }

    //Ter como base para fazer a soma
    /*   ContadorLike = () => {
        if(this.state.like == 1) {
            this.setState({like: this.state.like - 1})
        }
        else {
            this.setState({like: this.state.like + 1})
        }
    } */

    adicionarProduto = (indexRecebido) => {
        const add = [...this.state.produtos].filter(
            (prod, index) => {
                return index === indexRecebido
            }
        )
        this.setState({produtos: add})
    }

    render() {

        

        const teste = this.state.produtos.map((teste, id) => {
            return (
                <MeioCont key={id}>
                    <h2>{teste.nome}</h2>
                    <Img src={teste.imagem} alt="Imagem do planeta"></Img>
                    <h3>Por apenas: {teste.preco}</h3>
                    <But onClick={() => this.adicionarProduto(id) }> Adicionar Produto</But>
                </MeioCont>
            )
        })


        return (
            <Container>

                <Lateral>
                    <h1>Eu sou um filtro</h1>
                </Lateral>

                <Meio>
                    {teste}
                </Meio>

                <Lateral>
                    <h1>Eu sou o Carrinho de compras</h1>
                    <div>
                        
                    </div>

                </Lateral>

            </Container>
        )
    }
}