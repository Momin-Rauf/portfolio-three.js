import React, { Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'

import {About,Contact,Hero,Navbar, StarsCanvas,Experience,Tech,Works} from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary' >
        <div className='bg-network bg-cover bg-no-repeat ' >
          <Navbar/>
          <Hero/>
        </div>
        <div>
          <About/>
          <Experience/>
          <Tech/>
          <Works/>
          <div className='relative z-0' >
            <Contact/>
            <StarsCanvas/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
