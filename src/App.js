
import React from 'react';
import './App.css';
import Produtos from './components-Enzo/Produtos';
import ProdutosCard from './components-Enzo/ProdutosCard';





export default class App extends React.Component {
  
  state={
    produtos:[{
     id: Date.now(),
     nome: 'Marte',
     preco: 1000000,
     imagem: '../img/planeta-marte.jpg'
  
    },
    {
      id: Date.now(),
     nome: 'Júpiter',
     preco: 2000000,
     imagem: '../img/jupiter.jpg'
  
    },
    {
      id: Date.now(),
     nome: 'Netuno',
     preco: 5000000,
     imagem: '../img/netuno.jpg'
  
    },
    {
      id: Date.now(),
     nome: 'Saturno',
     preco: 10,
     imagem: '../img/saturno.jpg'
  
    }]
  }
  
  
  render(){
    return (
      <div>
        <h1>metaverso</h1>
        <Produtos />
        <ProdutosCard />
      </div>
    );
  }
  
}


