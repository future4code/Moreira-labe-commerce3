import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import listaViagens from "./data/viagens.json"
import { Card } from "./components/Card";

export class App extends Component {

state = {
  viagens: listaViagens,
  query: "",
  minPrice: "",
  maxPrice: ""  
}

updateQuery(ev){
  this.setState({
    query: ev.target.value
  })
}
updateMinPrice(ev){
  this.setState({
    minPrice: ev.target.value
  })
}
updateMaxPrice(ev){
  this.setState({
    maxPrice: ev.target.value
  })
}

render() {
  
  return <>

     <div>
       <input 
       placeholder = "Pesquisa"
       value = {this.state.query}
       onChange={this.updateQuery}
       />
    </div>

    <div>
       <input
       type = "number" 
       placeholder = "Preço minimo"
       value = {this.state.query}
       onChange={this.updateMinPrice}
       />
    </div>

    <div>
       <input 
       type = "number" 
       placeholder = "Preço Maximo"
       value = {this.state.query}
       onChange={this.updateMaxPrice}
       />
    </div>

      {this.state.viagens
        .filter(viagem =>{
          return viagem.title.toLowerCase().includes(this.state.query.toLowerCase()) ||
          viagem.description.toLowerCase().includes(this.state.query.toLowerCase())

        })
        .filter(viagem=>{
          return this.state.minPrice === "" || viagem.price >= this.state.minPrice
        })
        .filter(viagem=>{
          return this.state.maxPrice === "" || viagem.price >= this.state.maxPrice
        })
        .map(viagem => {
           return <Card key={viagem.id} viagem={viagem} />
        })}
     
  </>
}
}