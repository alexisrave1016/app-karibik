import React from 'react'
// import { useForm } from '../hooks/useForm'
// import { useDispatch } from 'react-redux'
// import { loginEmailPassword } from '../actions/actionLogin'
// import { loginGoogle, loginFacebook } from '../actions/actionLogin'


const Login = () => {

    // const dispatch = useDispatch()
    // const [ values, handleInputChange]= useForm({
    //     email:'',
    //     password:''
    // })

    // const {email, password}= values;

    // const handleLogin= (e)=>{
    //     e.preventDefault();
    //     dispatch(loginEmailPassword(email,password))
    // }

    // const handleGoogle= () =>{
    //     dispatch(loginGoogle())
    // }

    // const handleFacebook= ()=>{
    //     dispatch(loginFacebook())
    // }

    return (
        <form>
            <div className="container-login">
                <div className="login_logo">
                   <h1>KARIBIK</h1> 
                </div>
               <div className="login">
                    <div className="login_container">
                        <h1>Iniciar sesión</h1>
                        <form >
                        <h5>Email</h5>
                        <input className="texto" 
                        type="email" 
                        name="email" 
                        // value={email}
                        // onChange={handleInputChange}
                        />

                        <h5>Password</h5>
                        <input className="texto" 
                        type="password" 
                        name="password"
                        // value={password}
                        // onChange={handleInputChange}
                        />

                        <button type="submit" variant="primary" className="login_button">Continuar</button>
                        </form>
                        <button className="login_google" > <img className="logo_google" src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1632601095/sprint3/google-logo_cqfi6y.png" alt="" srcset="" /> Sign In Google </button>
                        <button className="login_facebook" ><img className="logo_face" src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1636559179/logo-facebook_yvwgc5.png" alt="no disponible" srcset="" />Sign In Facebook</button>
                        <p>Al continuar, aceptas las Condiciones de uso y el Aviso de privacidad de KARIBIK.</p>

                    </div>
        
                        <hr className="linea"/> <span className="title_nuevo_amazon">¿Eres nuevo en KARIBIK?</span>
        
                       <button className="login_registro">Crea tu cuenta de KARIBIK</button>
                </div>
            </div>    
       
        </form> 

    )
}

export default Login