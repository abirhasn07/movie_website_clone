import React from 'react'
import Header from './components/Header/index.js'
// global style 
import { GlobalStyle } from './GlobalStyle'
import Home from './Pages/Home/Home.js'


const App = () => {
  return (
    <div className="App">
      <Header/>
     <Home/>
      <GlobalStyle/> 
    </div>
  )
}

export default App
