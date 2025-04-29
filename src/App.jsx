import { useState } from 'react'
import CardList from './components/CardList'
import Heading from './components/Heading'
import Button from './components/Button'

function App() {
  // Challenge-1: Create a reusable Card Component

  const [count, setCount] = useState(0) // Components internal data that can change over time

  // this function's reference is passed down as prop (HOF)
  function handleClick() {
    setCount(prev => prev + 1)
  }

  return (
    <>
      <Heading title="Famous Pizza of the quarter" />
      <CardList />

      <Button onClick={handleClick}>
        <h1>{count}</h1>
      </Button>
    </>
  )
}

export default App
