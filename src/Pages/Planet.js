import React from "react";
import styled from "styled-components";

const Teste = styled.h3`
    color: black;
    background-color: white;
`
const Teste2 = styled.div`
    width: 500px;
    height: 100vh;
    background-color: blue;
`

function Planeta() {

    return (
        <Teste2>
            <Teste>Hello World</Teste>
            <Teste>Teste</Teste>
        </Teste2>
        
    )
}

export default Planeta;