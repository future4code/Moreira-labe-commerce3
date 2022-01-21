import React from "react";
import { Img, Meio, Container, MeioCont, But, LateralL, LateralR, Butt, Remov } from "./carrinhoComprasDrica/Style-Carrinho";

import { Fundo } from './Background'
import './App.css'

import Marte from './img/planeta-marte.jpg'
import Júpiter from './img/jupiter.jpg'
import Netuno from './img/netuno.jpg'
import Saturno from './img/saturno.jpg'


export default class App extends React.Component {

    state = {

        query: "",
        minPrice: "",
        maxPrice: "",
        arrayProdutos: [],
        total: 0,
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
        }]
    }

    updateQuery=(ev)=>{
        this.setState({
          query: ev.target.value
        })
      }
      updateMinPrice=(ev)=>{
        this.setState({
          minPrice: ev.target.value
        })
      }
    updateMaxPrice=(ev)=>{
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

    render() {

        /* const produtosMeio = this.state.produtos.map((produtos, index) => {
            return (
                <MeioCont key={index}>
                    <h2>{produtos.nome}</h2>
                    <Img src={produtos.imagem} alt="Imagem do planeta"></Img>
                    <h3>Por apenas: {produtos.preco}</h3>
                    <But onClick={() => this.addProdutoCarrinho(produtos.id)}>Adicionar Produto </But>
                </MeioCont>
            )
        }) */
        const lateralCarrinho = this.state.arrayProdutos.map((carrinho, id) => {
            return (
                <div>
                    <Remov key={id}>
                        <h4>Nome: {carrinho.nome} quantidade: {carrinho.qtd}</h4>
                        <Butt onClick={() => this.removeProdutoCarrinho(carrinho.id)}>X</Butt>
                    </Remov>
                </div>
            )
        })

        const filtroFinal = this.state.produtos.filter((produto)=>
        { return produto.nome.toLowerCase().includes(this.state.query.toLowerCase())
        })
        .filter((produto)=>{
            return this.state.minPrice === "" || produto.preco >= this.state.minPrice
        })
        .filter((produto)=>{
            return this.state.maxPrice === "" || produto.preco >= this.state.maxPrice
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
                <h1 className="h1">METAVERSO</h1>
                <Container>

                    <LateralL>
                        <h1>FILTRO</h1>
    <div>
       <input 
       placeholder = "Pesquisa"
       value={this.state.query}
       onChange={this.updateQuery}
       />
    </div>

    <div>
       <input
       type = "number" 
       placeholder = "Preço minimo"
       value={this.state.minPrice}
       onChange={this.updateMinPrice}
       />
    </div>

    <div>
       <input 
       type = "number" 
       placeholder = "Preço Maximo"
       value={this.state.maxPrice}
       onChange={this.updateMaxPrice}
       />
    </div>
         
                    </LateralL>

                    <Meio>
                        {filtroFinal}
                    </Meio>

                    <LateralR>
                        <h3> Seu Carrinho: </h3>
                        {lateralCarrinho}
                        <h4>O total é: U${this.somaTotalCarrinho()},00</h4>
                    </LateralR>


                </Container>
            </Fundo>
        )
    }
}