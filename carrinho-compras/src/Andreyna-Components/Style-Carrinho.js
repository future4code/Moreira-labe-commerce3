import styled from "styled-components";


export const Container = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    @media(max-width: 800px) {
    flex-direction: column;
    position: relative;
  }
`
export const Img = styled.img `
    width: 80%;
    height: 140px;
`
export const Lateral = styled.div `
    margin: 0 10px;
    width: 25%;
    border: solid green 2px;
`
export const MeioCont = styled.div`
    width: 80%;
`
export const Meio = styled.div `
    width: 50%;
    text-align: center;
    border: solid 2px orangered;
    display: grid;
    grid-template-columns: 1fr 1fr;
`
export const But = styled.button `
    cursor: pointer;
    width: 80%;
    height: 25px;

    &:hover {
        background-color: #000080;
        color: white;
        transition: 0.3s;
    }
`


