import React from "react";
import Page from '../Components-Geral/img/construção.jpg'
import styled from "styled-components";
import Theme from '../Components-Geral/img/musicTematica.mp3'


const Fundo = styled.div`
    background: url(${Page})no-repeat bottom center scroll;
    display: table;
    width: 100%;
    height: 100vh;
    background-size: cover;
    justify-content: right;
`
const Butt = styled.h1`
    text-align: center;
    background-color: black;
    opacity:0.7;
    color: white;
    cursor: pointer;
    &:hover {
        background-color: orangered;
        transition: 0.3s;
        color: white;
    }
`

function Compras(){

    return (
        <Fundo>
            <Butt>Sorry, but Página em construção!</Butt>
            <audio src={Theme} autoPlay></audio>
        </Fundo>
    )
}
export default Compras;