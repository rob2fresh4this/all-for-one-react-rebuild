import React from 'react'
import './App.css'
import yunjin from './assets/Assets_All-for-one/yunjin.png'

function App() {


  return (
    <>
      <header className="header">
        <div className="header-text">All for One</div>
        <div className="header-text">Please Select One:</div>
      </header>

      <div className="container">
        <div className="row">
          <a href="/say_hello"><button className="default-btn">Hello World</button></a>
          <a href="/asking_question"><button className="default-btn">Asking Questions</button></a>
          <a href="/add_two_numbers"><button className="default-btn">Adding 2 Numbers</button></a>
          <a href="/madlib"><button className="default-btn">MadLib</button></a>
          <a href="/odd_or_even"><button className="default-btn">Odd or Even</button></a>
        </div>
        <div className="row">
          <a href="/reverse_it_anything"><button className="default-btn">Reverse It(alphaNumeric)</button></a>
          <a href="/reverse_it_numbers"><button className="default-btn">Reverse It (numbersOnly)</button></a>
          <a href="/eight_ball"><button className="default-btn">Magic 8 Ball</button></a>
          <a href="/greater_or_less"><button className="default-btn">Greater or Less</button></a>
          <a href="/restaurant_picker"><button className="default-btn">Restaurant Picker</button></a>
        </div>
      </div>
      <footer className='static-footer'>
        <button className="invisible-btn"></button>
        <img src={yunjin} alt="yunjin" />
      </footer>
    </>
  )
}

export default App
