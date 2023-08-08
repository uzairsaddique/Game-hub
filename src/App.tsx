import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Grid, GridItem } from '@chakra-ui/react'
import { Show, Hide } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { Genre } from './Hooks/useGenres'

function App() {
  const [selectedGenre, setSelectGenre] = useState<Genre | null>(null)

  return (
    <>
      <Grid templateAreas={{
        base: `'nav ' 'main'`,
        lg: `'nav nav ' 'aside main'`
      }}
        templateColumns={{
          base: '1fr',
          lg: '200px 1fr'
        }}
      >
        <GridItem area='nav' ><Navbar /></GridItem>
        <Show above='lg'><GridItem paddingX={5} area='aside'><GenreList selectedGenre={selectedGenre} onselectedGenre={(genre) => setSelectGenre(genre)} /></GridItem></Show>

        <GridItem area='main' ><GameGrid selectedGenre={selectedGenre}/></GridItem>
      </Grid>
    </>
  )
}

export default App
