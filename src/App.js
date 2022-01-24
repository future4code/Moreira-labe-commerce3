import React from "react";
import { Switch, Route, Link } from 'react-router-dom'
import LoginLoja from "./Pages/LoginLoja";
import Logica from "./Components-Geral/Logica";
import Compras from "./Pages/Compras";
import {Viagem, Viagem2, Viagem3, Viagem4, Viagem5,
        Viagem6, Viagem7, Viagem8, Viagem9, Viagem10,
        Viagem11,Viagem12,Viagem13,Viagem14,Viagem15} from "./Pages/Viagem";
import styled from "styled-components";

const Lin = styled.span`
    color: white;
    text-decoration: none;
    margin: 0 30px;
    &:hover {
        color: orangered;
        transition: 0.3s;
    }
`
const Nav = styled.nav`
    text-align: center;
`
const Head = styled.header`
    padding: 20px 0;
    background-color: black;
    opacity: 0.9;
`
const Foot = styled.footer `
    width: 100%;
    padding: 2px 0;
    background-color: black;
    opacity: 0.9;
    position: relative;
    bottom:0;
    left:0;
    color: white;
    text-align: center;
`
const ExDig = styled.span`
    display: none;
`

export default class App extends React.Component {


    render() {


        return (
            <div>
                <Head>
                    <Nav>
                        <Link to="/" > <Lin>Inicial </Lin></Link> 
                        <Link to="/loja" > <Lin>Loja </Lin> </Link> 
                        <Link to="/compras" > <Lin>Carrinho </Lin> </Link> 
                        <Link to="/1" > <ExDig>Viagem </ExDig> </Link> 
                        <Link to="/2" > <ExDig>Viagem </ExDig> </Link> 
                        <Link to="/3" > <ExDig>Viagem </ExDig> </Link> 
                        <Link to="/4" > <ExDig>Viagem </ExDig> </Link> 
                        <Link to="/5" > <ExDig>Viagem </ExDig> </Link> 
                        <Link to="/6" > <ExDig>Viagem </ExDig> </Link> 
                        <Link to="/7" > <ExDig>Viagem </ExDig> </Link> 
                        <Link to="/8" > <ExDig>Viagem </ExDig> </Link> 
                        <Link to="/9" > <ExDig>Viagem </ExDig> </Link> 
                        <Link to="/10" > <ExDig>Viagem </ExDig> </Link> 
                        <Link to="/11" > <ExDig>Viagem </ExDig> </Link> 
                        <Link to="/12" > <ExDig>Viagem </ExDig> </Link> 
                        <Link to="/13" > <ExDig>Viagem </ExDig> </Link> 
                        <Link to="/14" > <ExDig>Viagem </ExDig> </Link> 
                        <Link to="/15" > <ExDig>Viagem </ExDig> </Link> 

                    </Nav>
                </Head>
                <main>
                    <Switch>
                        <Route exact path='/' component={LoginLoja} />
                        <Route exact path='/loja' component={Logica} />
                        <Route exact path='/compras' component={Compras} />
                        <Route exact path='/1' component={Viagem} />
                        <Route exact path='/2' component={Viagem2} />
                        <Route exact path='/3' component={Viagem3} />
                        <Route exact path='/4' component={Viagem4} />
                        <Route exact path='/5' component={Viagem5} />
                        <Route exact path='/6' component={Viagem6} />
                        <Route exact path='/7' component={Viagem7} />
                        <Route exact path='/8' component={Viagem8} />
                        <Route exact path='/9' component={Viagem9} />
                        <Route exact path='/10' component={Viagem10} />
                        <Route exact path='/11' component={Viagem11} />
                        <Route exact path='/12' component={Viagem12} />
                        <Route exact path='/13' component={Viagem13} />
                        <Route exact path='/14' component={Viagem14} />
                        <Route exact path='/15' component={Viagem15} />


                    </Switch>
                </main>

                <Foot>
                    <h3>Todos os direitos reservados &copy;</h3>
                </Foot>
            </div>
        )
    }
}