import React from 'react';
import styled from 'styled-components';

export default function Produtos() {
    return <div>
        <p>Planetas disponíveis para viagem: 4</p>
        <label>
        Ordenação:
        <select>
            <option value='CRESCENTE'>Crescente</option>
            <option value = 'DECRESCENTE'>Decrescente</option>
        </select>

        </label>
        <button>Adicionar ao Carrinho</button>
    </div>;
}
