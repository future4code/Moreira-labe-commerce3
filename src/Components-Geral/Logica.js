import React from "react";
import { Img, Meio, Container, MeioCont, But, Espac, LateralR, Butt, Remov, Word, Tot } from "../Styled/Style-Carrinho";

import { BotaoCrescenteDecrescente, Fundo } from './Background'
import '../App.css'

import { Switch, Route, Link } from 'react-router-dom'
import Compras from "../Pages/Compras";

import Marte from './img/planeta-marte.jpg'
import Júpiter from './img/jupiter.jpg'
import Netuno from './img/netuno.jpg'
import Saturno from './img/saturno.jpg'
import Bnh from './img/bnh.jpeg'
import Konoha from './img/konoha.jpeg'
import Radiant from './img/radiante.jpeg'
import Vegeta from './img/vegeta.jpeg'
import Shoku from './img/shokugeki.png'
import Kimetsu from './img/kimetsu.jpeg'
import Tate from './img/Tate.jpg'
import Bungou from './img/bungou.jpeg'
import Stone from './img/drStone.jpeg'
import Power from './img/power.jpeg'
import HeMan from './img/heman.jpeg'


export default class Logica extends React.Component {

    state = {
        ordenar: "",
        query: "",
        minPrice: "",
        maxPrice: "",
        arrayProdutos: [],
        produtos: [{
            id: 1,
            nome: 'Marte',
            preco: 1200000,
            imagem: Marte,
            qtd: 0,
        },
        {
            id: 2,
            nome: 'Júpiter',
            preco: 2800000,
            imagem: Júpiter,
            qtd: 0,
        },
        {
            id: 3,
            nome: 'Netuno',
            preco: 5700000,
            imagem: Netuno,
            qtd: 0,
        },
        {
            id: 4,
            nome: 'Saturno',
            preco: 10,
            imagem: Saturno,
            qtd: 0,
        },
        {
            id: 5,
            nome: 'Konoha',
            preco: 299,
            imagem: Konoha,
            qtd: 0,
        },
        {
            id: 6,
            nome: 'Vegeta',
            preco: 299,
            imagem: Vegeta,
            qtd: 0,
        },
        {
            id: 7,
            nome: 'Boku no Hero',
            preco: 297,
            imagem: Bnh,
            qtd: 0,
        },
        {
            id: 8,
            nome: 'Radiant',
            preco: 97,
            imagem: Radiant,
            qtd: 0,
        },
        {
            id: 9,
            nome: 'Shokugueki',
            preco: 997,
            imagem: Shoku,
            qtd: 0,
        },
        {
            id: 10,
            nome: 'KimetsuNoYaba',
            preco: 1,
            imagem: Kimetsu,
            qtd: 0,
        },
        {
            id: 11,
            nome: 'TateNoYuusha',
            preco: 397,
            imagem: Tate,
            qtd: 0,
        },
        {
            id: 12,
            nome: 'BungouStrayDogs',
            preco: 97,
            imagem: Bungou,
            qtd: 0,
        },
        {
            id: 13,
            nome: 'Dr.Stone',
            preco: 5,
            imagem: Stone,
            qtd: 0,
        },
        {
            id: 14,
            nome: 'Rangers',
            preco: 1995,
            imagem: Power,
            qtd: 0,
        },
        {
            id: 15,
            nome: 'He Man',
            preco: 1987,
            imagem: HeMan,
            qtd: 0,
        },
        ]
    }


    setOrdenar = (ev) => {
        this.setState({
            ordenar: ev.target.value
        })
    }
    updateQuery = (ev) => {
        this.setState({
            query: ev.target.value
        })
    }
    updateMinPrice = (ev) => {
        this.setState({
            minPrice: ev.target.value
        })
    }
    updateMaxPrice = (ev) => {
        this.setState({
            maxPrice: ev.target.value
        })
    }

    addProdutoCarrinho = (id) => {
        //Adiciono o produto pelo ID
        const newLista = this.state.produtos.filter((produto) => {
            return id === produto.id
        })
        this.state.arrayProdutos.push(newLista[0])
        this.setState({ arrayProdutos: this.state.arrayProdutos })

        //Removo para não ficar repetindo o mesmo nome e apenas somar
        const removeRepetidos = this.state.arrayProdutos.filter((remove, i) => {
            return this.state.arrayProdutos.indexOf(remove) === i;
        })
        this.state.arrayProdutos.push(removeRepetidos[0])
        this.setState({ arrayProdutos: removeRepetidos })

        //Adiciono por soma no carrinho 
        let addNoCarrinho = this.state.produtos.map((valor) => {
            if (id === valor.id) {
                return valor.qtd++
            }
        })
    }

    removeProdutoCarrinho = (id) => {
        //Faço um filtro p/ deixar retornado os diferentes do selecionado
        const newLista = this.state.produtos.filter((produto) => {
            return id !== produto.id
        })
        this.setState({ arrayProdutos: newLista })

        //Removo para não ficar repetindo o mesmo nome e apenas soma
        const removeRepetidos = this.state.arrayProdutos.filter((remove, i) => {
            return this.state.arrayProdutos.indexOf(remove) === i;
        })
        this.setState({ arrayProdutos: removeRepetidos })

        //Removo por subtração no carrinho 
        let removDoCarrinho = this.state.produtos.map((valor) => {
            if (id === valor.id) {
                return valor.qtd--
            }
        })
        this.setState({ arrayProdutos: removDoCarrinho })

        //Faço um filtro para retornar apenas os maiores que um
        let remove = this.state.arrayProdutos.filter((remov) => {
            return remov.qtd >= 1
        })
        this.setState({ arrayProdutos: remove })
    }

    somaTotalCarrinho = () => {
        const total = this.state.arrayProdutos;
        let valotTotal = 0;

        for (let produto of total) {
            valotTotal += produto.preco * produto.qtd
        }
        return valotTotal
    }

    salvarLocal = () => {
        localStorage.setItem('ordenar', this.state.ordenar);
    }

    buscarLocal = () => {
        const ordem = localStorage.getItem('ordenar')

        this.setState({
            ordenar: ordem,
        })
    }

    componentDidMount() {
        this.buscarLocal();
    };

    render() {

        const lateralCarrinho = this.state.arrayProdutos.map((carrinho, id) => {
            return (
                <div>
                    <Remov key={id}>
                        <h4>Viagem para: <Word>{carrinho.nome}</Word>  quantidade: <Word>{carrinho.qtd}</Word></h4>
                        <Butt onClick={() => this.removeProdutoCarrinho(carrinho.id)}>X</Butt>
                    </Remov>
                </div>
            )
        })

        const filtroFinal = this.state.produtos.filter((produto) => {
            return produto.nome.toLowerCase().includes(this.state.query.toLowerCase())
        })
            .filter((produto) => {
                return this.state.minPrice === "" || produto.preco >= this.state.minPrice
            })
            .filter((produto) => {
                return this.state.maxPrice === "" || produto.preco >= this.state.maxPrice
            })
            .sort((a, b) => {
                if (this.state.ordenar === "decrescente") {
                    return a.preco - b.preco
                } else if (this.state.ordenar === "crescente") {
                    return b.preco - a.preco
                }


            })
            .map((produtos, index) => {
                return (
                    <MeioCont key={index}>
                        <h2>{produtos.nome}</h2>
                        <Img src={produtos.imagem} alt="Imagem do planeta"></Img>
                        <h3>Por apenas: {produtos.preco}</h3>
                        <But onClick={() => this.addProdutoCarrinho(produtos.id)}>Adicionar Produto </But>
                    </MeioCont>
                )
            })


        return (
            <Fundo>
                <h1 className="h1">METAVERSO Viagens</h1>
                <h2 className="h1"> Filtros: </h2>
                <BotaoCrescenteDecrescente>
                    <select value={this.state.ordenar} onChange={this.setOrdenar}>
                        <option>Nenhum</option>
                        <option value="decrescente"  >Crescente</option>
                        <option value="crescente"  >Decrescente</option>
                    </select>
                    <Espac>
                        <input placeholder="Pesquisa" value={this.state.query} onChange={this.updateQuery} />
                    </Espac>

                    <Espac>
                        <input type="number" placeholder="Preço minimo" value={this.state.minPrice} onChange={this.updateMinPrice} />
                    </Espac>

                    <Espac>
                        <input type="number" placeholder="Preço Maximo" value={this.state.maxPrice} onChange={this.updateMaxPrice} />
                    </Espac>
                </BotaoCrescenteDecrescente>

                <Container>
                    <Meio>
                        {filtroFinal}
                    </Meio>

                    <LateralR>
                        <h3> Seu Carrinho: </h3>
                        {lateralCarrinho}
                        <h4>O total é: <Tot>U${this.somaTotalCarrinho()},00</Tot></h4>
                        <Link to="/compras"><But>Finalizar Compra</But></Link>
                    </LateralR>
                </Container>
                <Switch>
                    <Route exact path='/compras' component={Compras} />
                </Switch>
            </Fundo>
        )
    }
}