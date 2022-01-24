import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";

import Heman from '../gifs/heman.gif'
import Ranger from '../gifs/ranger.gif'
import Stone from '../gifs/stone.gif'
import Bungo from '../gifs/bungo.gif'
import Escud from '../gifs/escud.gif'
import Kimetsu from '../gifs/kimets.gif'
import Shoku from '../gifs/shoku.gif'
import Radian from '../gifs/radian.gif'
import Bn from '../gifs/bn.gif'
import Vegt from '../gifs/vegt.gif'
import Konoh from '../gifs/konoh.gif'
import Saturn from '../gifs/saturn.jpg'
import Netun from '../gifs/netun.jpeg'
import Jupt from '../gifs/Jupt.jpg'
import Mart from '../gifs/mart.jpg'

const Img = styled.img`
    width: 100%;
    height: 80.9vh;
`
const Text = styled.p`
    margin-left: 10px;
    font-size: 18px;
    padding: 0 20px;

`
const Title = styled.h1`
    margin: 10px auto;
    text-align: center;
`
const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media(max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`
export const But = styled.button`
    cursor: pointer;
    width: 50%;
    height: 25px;
    margin-left: 20%;
    &:hover {
        background-color: #000080;
        color: white;
        transition: 0.3s;
    }
`

const Color = styled.span`
    color: white;
    background-color: orangered;
    opacity: 0.9;
    border: 2px solid orangered;
`


export function Viagem() {

    return (
        <Container>
            <Img src={Mart} alt="mundo/planeta"></Img>
            <div>
                <Title>Viagem para Marte</Title>
                <Text>
                    Já pensou em aproveitar suas férias em outro planeta,
                    Mundo/Universo? Na METAVERSO você pode, viajar para outros
                    planetas do sistema solar e... o mundo de animes!
                    A realidade só depende de você! Aproveite que está em <Color>preço promocional!!</Color>
                </Text>
                <Text>
                    Um planeta semelhante a Terra
                    Aproveite, convide os amigos, famílias e cachorros...
                    Será ofertado toda comodidade possível na viagem, para
                    evitar quaisquer problemas. Você irá aproveitar o mundo
                    no espaço, andar como os astronautas e tirar a sua <Color>'Self'</Color>
                </Text>
                <Text>
                    O que você está esperando??? Aperte no botão abaixo e faça sua viagem para Marte!!
                </Text>

                <Link to="/loja"><But>Garantir minha vaga!</But></Link>

            </div>
        </Container>
    )
}
export function Viagem2() {

    return (
        <Container>
            <Img src={Jupt} alt="mundo/planeta"></Img>
            <div>
                <Title>Viagem para Júpter</Title>
                <Text>
                    Já pensou em aproveitar suas férias em outro planeta,
                    Mundo/Universo? Na METAVERSO você pode, viajar para outros
                    planetas do sistema solar e... mundo de animes!
                    A realidade só depende de você! Aproveite que está em <Color>preço promocional!!</Color>
                </Text>
                <Text>
                    Um plante um "pouco" quente
                    Aproveite, convide os amigos, famílias e cachorros...
                    Será ofertado toda comodidade possível na viagem, para
                    evitar quaisquer problemas. Você irá aproveitar o mundo
                    no espaço, andar como os astronautas e tirar a sua <Color>'Self'</Color>
                </Text>
                <Text>
                    O que você está esperando??? Aperte no botão abaixo e faça sua viagem para Júpter!!
                </Text>

                <Link to="/loja"><But>Garantir minha vaga!</But></Link>

            </div>
        </Container>
    )
}
export function Viagem3() {

    return (
        <Container>
            <Img src={Netun} alt="mundo/planeta"></Img>
            <div>
                <Title>Viagem para Netuno</Title>
                <Text>
                    Já pensou em aproveitar suas férias em outro planeta,
                    Mundo/Universo? Na METAVERSO você pode, viajar para outros
                    planetas do sistema solar e... mundo de animes!
                    A realidade só depende de você! Aproveite que está em <Color>preço promocional!!</Color>
                </Text>
                <Text>
                    Um plante "um pouco" frio
                    Aproveite, convide os amigos, famílias e cachorros...
                    Será ofertado toda comodidade possível na viagem, para
                    evitar quaisquer problemas. Você irá aproveitar o mundo
                    no espaço, andar como os astronautas e tirar a sua <Color>'Self'</Color>
                </Text>
                <Text>
                    O que você está esperando??? Aperte no botão abaixo e faça sua viagem para Netuno!!
                </Text>

                <Link to="/loja"><But>Garantir minha vaga!</But></Link>

            </div>
        </Container>
    )
}
export function Viagem4() {

    return (
        <Container>
            <Img src={Saturn} alt="mundo/planeta"></Img>
            <div>
                <Title>Viagem para Saturno</Title>
                <Text>
                    Já pensou em aproveitar suas férias em outro planeta?
                    Mundo/Universo? Na METAVERSO você pode viajar para outros
                    planetas do sistema solar e... no mundo dos animes!
                    A realidade só depende de você! Aproveite!! que está com <Color>preço promocional!!</Color>
                </Text>
                <Text>
                    Imaginou?? Escorregar pelos Anéis de Saturno?!
                    Aproveite! Convide seus amigos, famílias e cachorros/gatos...
                    Será ofertado toda comodidade possível na viagem, para
                    evitar quaisquer problemas. Você irá aproveitar o mundo
                    no espaço, andar como os astronautas e tirar a sua <Color>'Self'</Color>
                </Text>
                <Text>
                    O que você está esperando??? Aperte no botão abaixo e garanta sua vaga para Saturno!!
                </Text>

                <Link to="/loja"><But>Embarque Conosco</But></Link>

            </div>
        </Container>
    )
}
export function Viagem5() {

    return (
        <Container>
            <Img src={Konoh} alt="mundo/planeta"></Img>
            <div>
                <Title>Viagem para Konoha</Title>
                <Text>
                    Já pensou em aproveitar suas férias em outro planeta,
                    Mundo/Universo? Na METAVERSO você pode, viajar para outros
                    planetas do sistema solar e... mundo de animes!
                    A realidade só depende de você! Aproveite que está em <Color>preço promocional!!</Color>
                </Text>
                <Text>
                    Viver como um ninja de verdade, ajudar o Naruto em suas missões
                    Dar uma linção no Danzou! e ainda poder tirar aquela <Color>'Self'</Color>
                    com os personangens! Tudo isso é possível no METAVERSO!!!!
                </Text>
                <Text>
                    O que você está esperando??? Aperte no botão abaixo e faça sua viagem para Konoha!!
                </Text>

                <Link to="/loja"><But>Garantir minha vaga!</But></Link>

            </div>
        </Container>
    )
}
export function Viagem6() {

    return (
        <Container>
            <Img src={Vegt} alt="mundo/planeta"></Img>
            <div>
                <Title>Viagem para Vegeta</Title>
                <Text>
                    Já pensou em aproveitar suas férias em outro planeta,
                    Mundo/Universo? Na METAVERSO você pode, viajar para outros
                    planetas do sistema solar e... mundo de animes!
                    A realidade só depende de você! Aproveite que está em <Color>preço promocional!!</Color>
                </Text>
                <Text>
                    Receio que você verá o planeta apenas de longe, uma vez
                    que o Frreza destruiu, musica triste... Pelo menos você poderá
                    tirá uma <Color>'Self'</Color> com o Freeza minutos antes de se encontrar com
                    Goku (espero que tu tenha entendido a piada)... ps. Goku morreu em algumas versões
                </Text>
                <Text>
                    O que você está esperando??? Aperte no botão abaixo e faça sua viagem para Vegeta!!
                </Text>

                <Link to="/loja"><But>Garantir minha vaga!</But></Link>

            </div>
        </Container>
    )
}
export function Viagem7() {

    return (
        <Container>
            <Img src={Bn} alt="mundo/planeta"></Img>
            <div>
                <Title>Viagem para o anime Boku no Hero</Title>
                <Text>
                    Já pensou em aproveitar suas férias em outro planeta,
                    Mundo/Universo? Na METAVERSO você pode, viajar para outros
                    planetas do sistema solar e... mundo de animes!
                    A realidade só depende de você! Aproveite que está em <Color>preço promocional!!</Color>
                </Text>
                <Text>
                    Já imaginou e entrar na escola de Heróis?! E poder ver de perto o AllMigth!!
                    além de poder tirar uma <Color>'Self'</Color> poderá participar com os alunos,
                    garanto que você terá uma boa recepção.
                </Text>
                <Text>
                    O que você está esperando??? Aperte no botão abaixo e faça sua viagem para Boku no Hero!!
                </Text>

                <Link to="/loja"><But>Garantir minha vaga!</But></Link>

            </div>
        </Container>
    )
}
export function Viagem8() {

    return (
        <Container>
            <Img src={Radian} alt="mundo/planeta"></Img>
            <div>
                <Title>Viagem para o anime Radiant</Title>
                <Text>
                    Já pensou em aproveitar suas férias em outro planeta,
                    Mundo/Universo? Na METAVERSO você pode, viajar para outros
                    planetas do sistema solar e... mundo de animes!
                    A realidade só depende de você! Aproveite que está em <Color>preço promocional!!</Color>
                </Text>
                <Text>
                    Eu sei que Radiant ainda não foi descoberta e o anime não foi renovado, porémmm
                    você pode tirar uma <Color>'Self'</Color> com os personangens e ajudar ele a procurar
                    Radiant... Spin-off uaiii
                </Text>
                <Text>
                    O que você está esperando??? Aperte no botão abaixo e faça sua viagem para Radiant!!
                </Text>

                <Link to="/loja"><But>Garantir minha vaga!</But></Link>

            </div>
        </Container>
    )
}
export function Viagem9() {

    return (
        <Container>
            <Img src={Shoku} alt="mundo/planeta"></Img>
            <div>
                <Title>Viagem para o anime Shokugeki</Title>
                <Text>
                    Já pensou em aproveitar suas férias em outro planeta,
                    Mundo/Universo? Na METAVERSO você pode, viajar para outros
                    planetas do sistema solar e... mundo de animes!
                    A realidade só depende de você! Aproveite que está em <Color>preço promocional!!</Color>
                </Text>
                <Text>
                    Como diria os Reviews do Mustach comer é bom demais neh Rapezi??!
                    Então nada melhor do que assistir os top ever master da cozinha japonesa
                    competindo numa escola para cozinheiros que serão os melhores chefs futuros!
                    Além disso, você poderá tirar uma <Color>'Self'</Color> com o(a) primeira-cadeira.
                </Text>
                <Text>
                    O que você está esperando??? Aperte no botão abaixo e faça sua viagem para Shokugeki!!
                </Text>

                <Link to="/loja"><But>Garantir minha vaga!</But></Link>

            </div>
        </Container>
    )
}
export function Viagem10() {

    return (
        <Container>
            <Img src={Kimetsu} alt="mundo/planeta"></Img>
            <div>
                <Title>Viagem para o anime Kimetsu No Yaba</Title>
                <Text>
                    Já pensou em aproveitar suas férias em outro planeta,
                    Mundo/Universo? Na METAVERSO você pode, viajar para outros
                    planetas do sistema solar e... mundo de animes!
                    A realidade só depende de você! Aproveite que está em <Color>preço promocional!!</Color>
                </Text>
                <Text>
                    Eu sei que é perigoso, porém nessa versão os pilares ainda estão vivos!!,
                    aproveite essa viagem e tire uma <Color>'Self'</Color> com eles!
                </Text>
                <Text>
                    O que você está esperando??? Aperte no botão abaixo e faça sua viagem para Kimetsu No Yaba!!
                </Text>

                <Link to="/loja"><But>Garantir minha vaga!</But></Link>

            </div>
        </Container>
    )
}
export function Viagem11() {

    return (
        <Container>
            <Img src={Escud} alt="mundo/planeta"></Img>
            <div>
                <Title>Viagem para o anime Tate No Yuusha No Nagari</Title>
                <Text>
                    Já pensou em aproveitar suas férias em outro planeta,
                    Mundo/Universo? Na METAVERSO você pode, viajar para outros
                    planetas do sistema solar e... mundo de animes!
                    A realidade só depende de você! Aproveite que está em <Color>preço promocional!!</Color>
                </Text>
                <Text>
                    O herói do escudo irá convocar todos para o mundo de história onde ele também
                    foi convocado, aproveite para tirar uma <Color>'Self'</Color> com a Raptália!
                </Text>
                <Text>
                    O que você está esperando??? Aperte no botão abaixo e faça sua viagem para Tate No Yuusha No Nagari!!
                </Text>

                <Link to="/loja"><But>Garantir minha vaga!</But></Link>

            </div>
        </Container>
    )
}
export function Viagem12() {

    return (
        <Container>
            <Img src={Bungo} alt="mundo/planeta"></Img>
            <div>
                <Title>Viagem para o anime Bungou Stray Dogs</Title>
                <Text>
                    Já pensou em aproveitar suas férias em outro planeta,
                    Mundo/Universo? Na METAVERSO você pode, viajar para outros
                    planetas do sistema solar e... mundo de animes!
                    A realidade só depende de você! Aproveite que está em <Color>preço promocional!!</Color>
                </Text>
                <Text>
                    Só tenho algo a dizer, tire uma <Color>'Self'</Color> com o detetive.
                </Text>
                <Text>
                    O que você está esperando??? Aperte no botão abaixo e faça sua viagem para  Bungou Stray Dogs!!
                </Text>

                <Link to="/loja"><But>Garantir minha vaga!</But></Link>

            </div>
        </Container>
    )
}
export function Viagem13() {

    return (
        <Container>
            <Img src={Stone} alt="mundo/planeta"></Img>
            <div>
                <Title>Viagem para o anime Dr. Stone</Title>
                <Text>
                    Já pensou em aproveitar suas férias em outro planeta,
                    Mundo/Universo? Na METAVERSO você pode, viajar para outros
                    planetas do sistema solar e... mundo de animes!
                    A realidade só depende de você! Aproveite que está em <Color>preço promocional!!</Color>
                </Text>
                <Text>
                    Para os cientistas de plantão essa viagem será excelente
                    num mundo que voltou a Idade da Pedra, Senku, apaixonado pela ciência
                    tem como missão retornar para a socidade de antes e descobrir
                    o que causou esse problema. Nessa jornada ajuda ele e aproveite para tirar uma
                    <Color>'Self'</Color>
                </Text>
                <Text>
                    O que você está esperando??? Aperte no botão abaixo e faça sua viagem para  Dr. Stone!!
                </Text>

                <Link to="/loja"><But>Garantir minha vaga!</But></Link>

            </div>
        </Container>
    )
}
export function Viagem14() {

    return (
        <Container>
            <Img src={Ranger} alt="mundo/planeta"></Img>
            <div>
                <Title>Viagem para o mundo dos Power Rangers</Title>
                <Text>
                    Já pensou em aproveitar suas férias em outro planeta,
                    Mundo/Universo? Na METAVERSO você pode, viajar para outros
                    planetas do sistema solar e... mundo de animes!
                    A realidade só depende de você! Aproveite que está em <Color>preço promocional!!</Color>
                </Text>
                <Text>
                    "É hora de morfar!!" Aproveite essa oportunidade para você
                    fazer parte dos Power Rangers e salvar o mundo. Não esqueça da<Color>'Self'</Color>
                </Text>
                <Text>
                    O que você está esperando??? Aperte no botão abaixo e faça sua viagem para Power Rangers!!
                </Text>

                <Link to="/loja"><But>Garantir minha vaga!</But></Link>

            </div>
        </Container>
    )
}
export function Viagem15() {

    return (
        <Container>
            <Img src={Heman} alt="mundo/planeta"></Img>
            <div>
                <Title>Viagem para o mundo do He-Man</Title>
                <Text>
                    Já pensou em aproveitar suas férias em outro planeta,
                    Mundo/Universo? Na METAVERSO você pode, viajar para outros
                    planetas do sistema solar e... mundo de animes!
                    A realidade só depende de você! Aproveite que está em <Color>preço promocional!!</Color>
                </Text>
                <Text>
                    "Pelos poderes de Grayskull! Eu tenho a força!". Um clássico 
                    esse você não pode perder a oportunidade de tirar uma <Color>'Self'</Color> com 
                    eles emm!!
                </Text>
                <Text>
                    O que você está esperando??? Aperte no botão abaixo e faça sua viagem para He-Man!!
                </Text>

                <Link to="/loja"><But>Garantir minha vaga!</But></Link>

            </div>
        </Container>
    )
}














