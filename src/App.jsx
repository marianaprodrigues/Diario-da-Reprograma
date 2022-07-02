import { useState } from 'react'
import './App.css'
import Card from './Card'
import Profile from './Profile'
import Titulo from './Titulo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='title'>
    <Titulo title= 'Meu Diário na Reprograma'/>
    </div>
    <Profile />
    <Card />
    
    <footer className='footer'>
    Desenvolvido por Mariana Rodrigues - Aluna da Reprograma
       </footer>
    </>
  )
}

export default App