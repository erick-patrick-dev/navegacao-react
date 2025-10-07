import React, { use } from "react";
import { useParams } from "react-router-dom";


const Param = props => {
    const { id } = useParams() // Pega os parâmetros da URL
    return (
        <div className="Param">
            <h1>Param</h1>
            <h2>Valor: { id }. </h2>
        </div>
    )
}

export default Param;