import React from 'react'


export const Navbar = () => {
  return (
    <div className="Navbar_container">
            <div className="navbar_superior">
               
                <div className="menu">
                
                    <div className="opciones">
                        <h5 className="Selecion Nuevo">NUEVO</h5>
                        <h5 className="Selecion Rebajas">REBAJAS</h5>     
                    </div>

                    <div className="titulo">
                    <h4>karibik</h4>
                    </div>

                    
                    <div className="icon">
                        <img className="img_logo" src="user.png" alt="Imagen no disponible" srcset="" />    
                        <img className="img_logo" src="carritoMobile.png" alt="Imagen no disponible" srcset=""/>  
                    </div>
                    
                   
                </div>
            </div>


            
        </div>
  )
}
