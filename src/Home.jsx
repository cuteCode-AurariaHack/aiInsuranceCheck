import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/interface')
      }
    
  return (
    <div>
       <h1>Home Page</h1>
       <button onClick={handleClick}>Go to Interface</button>
</div>

  )
}

export default Home