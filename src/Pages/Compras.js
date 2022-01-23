import React from "react";
import Page from '../Components-Geral/img/construção.jpg'
import styled from "styled-components";
import Theme from '../Components-Geral/img/musicTematica.mp3'

//Código inspirado da atividade da Labenu 

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
const CartaoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Cartao = styled.div`
  background-color: black;
  color: #c3dde4;
  width: 300px;
  height: fit-content;
  border-radius: 15px;
  text-align: left;
  padding: 10px;
`
const Inp = styled.input`
    width: 250px;
    padding: 0 8px;
    height: 25px;
    margin: 5px 0;
`
const Bot = styled.button`
    width: 270px;
    padding: 0 8px;
    height: 25px;
    margin: 5px 0;
    cursor: pointer;
    &:hover {
        background-color: orangered;
        opacity: 0.7;
        transition: 0.3s;
        color: white;
    }
`

class Compras extends React.Component {
    state = {
        valorNome: "",
        valorNumero: "",
        valorCvv: ""
    };

    onChangeNome = (event) => {
        this.setState({ valorNome: event.target.value });
    };
    onChangeNumero = (event) => {
        this.setState({ valorNumero: event.target.value });
    };
    onChangeCvv = (event) => {
        this.setState({ valorCvv: event.target.value });
    };

    onClickEnviar = () => {
        console.log("Nome", this.state.valorNome);
        console.log("Numero", this.state.valorNumero);
        console.log("Cvv", this.state.valorCvv);

        this.setState({
            valorNome: "",
            valorNumero: "",
            valorCvv: ""
        });
    };

    render() {


        return (
            <Fundo>
                <Butt>Sorry, but Página em construção!</Butt>
                <audio src={Theme} autoPlay></audio>


                <CartaoContainer>
                    <Cartao>
                        <h3>METAVERSO COMPRAS</h3>
                        <h4>Nome: {this.state.valorNome}</h4>
                        <h4>Número: {this.state.valorNumero}</h4>
                        <h4>Cvv: {this.state.valorCvv}</h4>
                    </Cartao>

                    <Butt>Insira os dados do seu cartão</Butt>

                    <Inp
                        value={this.state.valorNome}
                        onChange={this.onChangeNome}
                        placeholder="Nome"
                    />
                    <Inp
                        value={this.state.valorNumero}
                        onChange={this.onChangeNumero}
                        placeholder="Número do Cartão"
                    />
                    <Inp
                        value={this.state.valorCvv}
                        onChange={this.onChangeCvv}
                        placeholder="Código de Segurança"
                    />
                    <Bot onClick={this.onClickEnviar}>Enviar</Bot>
                </CartaoContainer>

            </Fundo>
        )
    }
}
export default Compras;