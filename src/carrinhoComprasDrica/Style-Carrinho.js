import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    @media(max-width: 800px) {
    flex-direction: column;
    position: relative;
  }
`
export const Img = styled.img`
    width: 80%;
    height: 140px;
`
export const LateralL = styled.div`
    margin: 0 10px;
    background-color: white;
    opacity: 0.8;
    width: 25%;
    border: solid green 2px;
`
export const LateralR = styled.div`
    margin: 0 10px;
    background-color: white;
    opacity: 0.8;
    width: 25%;
    border: solid green 2px;
    text-align: center;
`


export const MeioCont = styled.div`
    width: 80%;
`
export const Meio = styled.div`
    width: 50%;
    height: 600px;
    background-color: white;
    text-align: center;
    border: solid 2px orangered;
    display: grid;
    grid-template-columns: 1fr 1fr;
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
