import { useState } from 'react'

import './App.css'
import { Grid, GridItem,Flex , Box} from '@chakra-ui/react'
import { Show, } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { Genre } from './Hooks/useGenres'
import PlatformSelected from './components/PlatformSelected'
import { Platform } from './Hooks/useGames'
import SortSelector from './components/SortSelector'
import GameHeading from './components/GameHeading'

export interface GameQuery {
  genre: Genre | null;
  platform : Platform | null;
  sortOrder: string;
  searchText: string
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
        <GridItem area='nav' ><Navbar onSearch={(searchText)=> setGameQuery({...gameQuery, searchText})} /></GridItem>
        <Show above='lg'><GridItem paddingX={5} area='aside'><GenreList selectedGenre={gameQuery.genre} onselectedGenre={(genre) => setGameQuery({...gameQuery, genre})} /></GridItem></Show>

        <GridItem area='main' >
          <Box  paddingLeft={2}>
          <GameHeading gameQuery={gameQuery}/>
          <Flex  marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelected  selectedPlatform ={gameQuery.platform}onSelectedPlatform={(platform)=> setGameQuery({...gameQuery ,platform})}/>
              </Box>
        <SortSelector sortOrder={gameQuery.sortOrder} onselectSortOrder={(sortOrder)=>setGameQuery({...gameQuery, sortOrder})}/>
          </Flex>

          </Box>

        
          <GameGrid gameQuery={gameQuery} />
          </GridItem>
      </Grid>
    </>
  )
}

export default App
