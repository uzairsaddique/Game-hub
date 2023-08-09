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
import PlatformSelected from './components/PlatformSelected'
import { Platform } from './Hooks/useGames'

export interface GameQuery {
  genre: Genre | null;
  platform : Platform | null;
} 

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

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
        <Show above='lg'><GridItem paddingX={5} area='aside'><GenreList selectedGenre={gameQuery.genre} onselectedGenre={(genre) => setGameQuery({...gameQuery, genre})} /></GridItem></Show>

        <GridItem area='main' >
        <PlatformSelected  selectedPlatform ={gameQuery.platform}onSelectedPlatform={(platform)=> setGameQuery({...gameQuery ,platform})}/>
          <GameGrid gameQuery={gameQuery} />
          </GridItem>
      </Grid>
    </>
  )
}

export default App
