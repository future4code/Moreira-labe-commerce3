import React from "react";
import Page from '../Components-Geral/img/metaverso.jpeg'
import styled from "styled-components";
import Theme from '../Components-Geral/img/musicTematica.mp3'
import { Switch, Route, Link } from 'react-router-dom'
import Logica from "../Components-Geral/Logica";

const Fundo = styled.div`
    background: url(${Page})no-repeat bottom center scroll;
    display: flex;
    width: 100%;
    height: 100vh;
    background-size: cover;
    justify-content: right;

    @media(max-width: 800px) {
        background: black;
    }
`
const Text = styled.h3 `
    color: white;
`

const Butt = styled.button`
    height: 40px;
    width: 200px;
    margin-top: 10px;
    margin-right: 10px;
    cursor: pointer;
    &:hover {
        background-color: orangered;
        transition: 0.3s;
        color: white;
    }
`

function LoginLoja() {

    return (
        <Fundo>
            <Link to="/loja"> <Butt>Ir para as compras</Butt> </Link>

            <audio src={Theme} autoPlay></audio>
            <Switch>
                <Route exact path='/loja' component={Logica} />
            </Switch>
        </Fundo>
    )
}
export default LoginLoja;