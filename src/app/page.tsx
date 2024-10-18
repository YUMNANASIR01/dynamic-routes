import Navbar from '@/components/navbar/Navbar';
import React from 'react'

function Home() {
  const name:string = "Yumna";
  return (
    <>
      <p> Hello, {name} Here</p>
      <Navbar /> 
    </>
  )
}

export default Home

