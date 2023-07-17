import React from "react";
import './Testimonio.css'




function Testimonio(props) {
    return (
        <div className="seccion_testimonio">
            <img className='imagen_testimonio' src={require(`../img/testimonio-${props.imagen}.png`)} alt="" />

            <div className="testimonio">
                <p className="nombre_testimonio">{props.nombre} en {props.pais}</p>
                <p className="cargo_testimonio">{props.cargo}</p>
                <p className="texto_testimonio">"{props.testimonio}"</p>
            </div>
        </div>
    )
}

export default Testimonio