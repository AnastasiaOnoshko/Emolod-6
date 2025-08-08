import data from './fixtures/newsData'
import { blogData } from './fixtures/labsData'

import './App.css'

import Card from './components/Card'
import Labs from './components/Labs'


function App() {
  

  return (
    <>
      <Card {...data[0]} />
      <Card {...data[1]} />
      <Card {...data[2]} />
      <Card {...data[3]} />
      <Card {...data[4]} />
      <Labs {...blogData[0]} />
    </>
  )
}

export default App
