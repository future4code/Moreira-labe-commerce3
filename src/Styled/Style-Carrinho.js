import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    
    @media(max-width: 800px) {
    flex-direction: column-reverse;
    position: relative;
  }
`
export const Img = styled.img`
    width: 80%;
    height: 140px;
`
export const LateralR = styled.div`
    margin: 0 10px;
    padding-bottom: 15px;
    background-color: white;
    opacity: 0.8;
    width: 25%;
    height: 20%;
    border: solid green 2px;
    text-align: center;

    @media(max-width: 800px) {
        width: 90%;
  }
`

export const MeioCont = styled.div`
    width: 80%;
    padding: 10px 0;
    box-shadow: 3px 6px 5px grey;
    margin: 5px;

    @media(max-width: 800px) {
        display: flex;
        flex-direction: column;
        width: 90%;
        margin: 0 auto;
        align-items: center;
  }
`
export const Meio = styled.div`
    width: 100%;
    background-color: white;
    text-align: center;
    border: solid 2px orangered;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 15px;

    @media(max-width: 800px) {
        width: 90%;
        display: grid;
        grid-template-columns: 1fr;
        margin: 5px 10px;
  }
`
export const But = styled.button`
    cursor: pointer;
    width: 80%;
    height: 25px;
    &:hover {
        background-color: #000080;
        color: white;
        transition: 0.3s;
    }
`
export const Butt = styled.button`
    cursor: pointer;
    height: 20px;
    justify-content: center;
    align-items: center;
    text-align: center;
    &:hover {
        background-color: orangered;
        color: white;
        transition: 0.3s;
    }
`
export const Remov = styled.div`
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
`
export const Espac = styled.div `
    margin: 0 5px;
`
export const Word = styled.span `
    color: orangered;
`
export const Tot = styled.span`
    color: #228B22;
`