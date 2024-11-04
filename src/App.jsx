import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Instructors from './components/Instructors'
import Courses from './components/Courses'

const App = () => {
  return (
    <>
      <Header/>
      <div>
        <Banner/>
        <Instructors/>
        <Courses/>
      </div>
      <Footer/>
    </>
  )
}

export default App