import React from 'react'
import Button from './Button'
const Home = () => {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
      <h1 className="text-5xl font-bold text-indigo-700 mb-6">Insurai</h1>
      <p className="text-lg text-gray-800 max-w-xl mb-8">
        Welcome to Insurai — your smart insurance assistant. Our application streamlines your insurance needs with AI-driven tools for quotes, claims, and policy management.
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