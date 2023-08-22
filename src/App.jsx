import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='head'>
    <h1>Pratibha</h1>
    </div>
    <div className='image'>
      <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="" />
      </div>
      <div className='para'>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime sapiente error quos perferendis laboriosam vel dolor quod accusantium officiis, iure sed aspernatur natus sunt earum, autem aperiam obcaecati tenetur suscipit nam? Nobis consequuntur nostrum, pariatur voluptates officia perferendis quos eaque. Harum est, esse expedita consectetur veritatis architecto similique quod ratione.</p>
      </div>
    </>
  )
}

export default App
