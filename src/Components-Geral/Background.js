import styled from "styled-components";
import ImgFundo from './img/fundoDaLoja.jpg'

export const Fundo = styled.div`
  background: url(${ImgFundo});
  background-position: 30% 45%;
  background-size: cover;
  display: table;
  width: 100%;
  height: 100vh;

`

export const BotaoCrescenteDecrescente = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  margin: 10px;

  @media(max-width: 800px) {
      margin: 0 auto;
       display: grid;
       grid-template-columns: 1fr 1fr;
  }

`