import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Grid, GridItem } from '@chakra-ui/react'
import { Show, Hide } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Grid templateAreas={{base:`'nav ' 'main'`,
lg: `'nav nav ' 'aside main'`
}}>
  <GridItem  area='nav' ><Navbar/></GridItem>
  <Show above='lg'><GridItem  area='aside' bg='gold' >Aside</GridItem></Show>
 
  <GridItem  area='main' ><GameGrid/></GridItem>
</Grid>
    </>
  )
}

export default App
