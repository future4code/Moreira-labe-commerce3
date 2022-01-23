import React from "react";
import { Switch, Route, Link } from 'react-router-dom'
import LoginLoja from "./Pages/LoginLoja";
import Logica from "./Components-Geral/Logica";
import Compras from "./Pages/Compras";
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

export default class App extends React.Component {


    render() {


        return (
            <div>
                <Head>
                    <Nav>
                        <Link to="/" > <Lin>Inicial </Lin></Link> 
                        <Link to="/loja" > <Lin>Loja </Lin> </Link> 
                        <Link to="/compras" > <Lin>Carrinho </Lin> </Link> 
                    </Nav>
                </Head>
                <main>
                    <Switch>
                        <Route exact path='/' component={LoginLoja} />
                        <Route exact path='/loja' component={Logica} />
                        <Route exact path='/compras' component={Compras} />
                    </Switch>
                </main>

                <Foot>
                    <h3>Todos os direitos reservados &copy;</h3>
                </Foot>
            </div>
        )
    }
}