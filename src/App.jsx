import { useState, useEffect } from 'react'
import './App.css'

function Test() {
  return <p>Test</p>
}

function App() {
  const [data, setData] = useState([])
  const [stateValue, setStateValue] = useState('')
  const [capitalValue, setCapitalValue] = useState('')
  
  function addState() {
    setData(old => [...old, { state: stateValue, capital: capitalValue }])
    setCapitalValue('')
    setStateValue('')
  }
  
  return (
    <Test/>
  )
}

export default App