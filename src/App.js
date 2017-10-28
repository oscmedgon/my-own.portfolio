import React, { Component } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar.js'
import Content from './Components/Content/Content.js'
import Footer from './Components/Footer/Footer'

class App extends Component {
  render () {
    return (
      <div className='main'>
        <Navbar />
        <Content />
        <Footer />
      </div>
    )
  }
}

export default App
