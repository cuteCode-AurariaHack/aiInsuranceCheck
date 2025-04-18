import React from 'react'
import Button from './Button'
import Logo from './images/Logo.png'
const Home = () => {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
        <img src={Logo} alt="Insurai Logo" className="w-56 h-auto mb-6" />
      <h1 className="text-4xl font-bol mb-6" style={{ color: '#183f4f' }}>Bringing empathy to algorithms - and clarity to coverage</h1>
      <p className="text-lg text-gray-800 max-w-xl mb-8">
        Welcome to InsurAI — your smart insurance assistant. Our application streamlines your insurance needs with AI-driven tools to match you with a policy that works for you
        </p>
      <Button
              text="Launch Application"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
    </div>
  )
}

export default Home