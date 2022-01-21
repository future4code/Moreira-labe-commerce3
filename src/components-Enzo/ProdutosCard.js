
import React from "react"
import styled from "styled-components";

const CardsDosProdutos = styled.div`
 display:flex;
 background-color: red;
 justify-content: center;
 
`

class ProdutosCard extends React.Component {
    render() {
        return <div>
            <CardsDosProdutos>
                <p>Viagem para Marte.</p>
                <p>Preço: R$:1.000000</p>
            </CardsDosProdutos>

            <CardsDosProdutos>
                <p>Viagem para Júpiter.</p>
                <p>Preço: R$:2.000000</p>
            </CardsDosProdutos>

            <CardsDosProdutos>
                <p>Viagem para Netuno.</p>
                <p>Preço: R$:5.000000</p>
            </CardsDosProdutos>

            <CardsDosProdutos>
                <p>Viagem para Saturno.</p>
                <p>Preço: R$:10</p>
            </CardsDosProdutos>
        </div>;
    }
}

export default ProdutosCard






