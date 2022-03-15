import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Login from '../components/Login'
import { Navbar } from '../components/Navbar'

const url='https://api-alexisrave-anime.herokuapp.com/karibik'

const App = () => {

  const [productos,setProductos]= useState([])

  const peticionGet= async()=>{
    await axios.get(url)
    .then(resp=>{
      setProductos(resp.data)
    }).catch(error=>{
      console.log(error)
    })
  }



  useEffect(()=>{
    peticionGet()
  },[])

  return (
    <div className='App-containers'>
    <Navbar/>
    <div className='productos_container'>
      <h1>Productos</h1>
      <div className='productos_pintar'>
        {
          productos.map(item=>(
            <Card
            key={item.titulo}
            productos={productos}
            card={item}
            
            />
          ))
        }
      </div>
      <Login/>
    </div>
    </div>
  )
}

export default App