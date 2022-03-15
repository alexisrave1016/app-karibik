import React from 'react'

const Card = (props) => {

    const {producto,precio,imagen}=props.card;

    const {handleOnClick}= props;

  return (
    <div className="container_card">
      <div className="card_catalogo">
        <div className="img_producto">
          <img
            className="imagenCard"
            src={imagen}
            alt="no disponible"
            srcset=""
          />
        </div>
        <div className="card">
          <span>$ {producto}</span>
          <span>{precio}</span>
          <button className='bottonAgregar' onClick={()=>handleOnClick(props.card)}>Agregar</button>
        </div>
      </div>

      
    </div>
  )
}

export default Card