import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SayHello from './components/pages/say_hello.jsx'
import AskingQuestion from './components/pages/asking_question.jsx'
import AddTwoNumbers from './components/pages/add_two_numbers.jsx'
import MadLib from './components/pages/madlib.jsx'
import OddOrEven from './components/pages/odd_or_even.jsx'
import ReverseItAnything from './components/pages/reverse_it_anything.jsx'
import ReverseItNumbers from './components/pages/reverse_it_numbers.jsx'
import EightBall from './components/pages/eight_ball.jsx'
import GreaterOrLess from './components/pages/greater_or_less.jsx'
import RestaurantPicker from './components/pages/restaurant_picker.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/say_hello" element={<SayHello />} />
        <Route path="/asking_question" element={<AskingQuestion />} />
        <Route path="/add_two_numbers" element={<AddTwoNumbers />} />
        <Route path="/madlib" element={<MadLib />} />
        <Route path="/odd_or_even" element={<OddOrEven />} />
        <Route path="/reverse_it_anything" element={<ReverseItAnything />} />
        <Route path="/reverse_it_numbers" element={<ReverseItNumbers />} />
        <Route path="/eight_ball" element={<EightBall />} />
        <Route path="/greater_or_less" element={<GreaterOrLess />} />
        <Route path="/restaurant_picker" element={<RestaurantPicker />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
