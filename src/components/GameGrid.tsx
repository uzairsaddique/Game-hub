import React, { useEffect, useState } from "react";
import { HStack, Image, Text, SimpleGrid, Skeleton } from '@chakra-ui/react'
import useGames, { Platform } from "../Hooks/useGames";
import GameCard from './GameCard'
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import {Genre} from '../Hooks/useGenres'
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
   
}



const GameGrid = ({gameQuery}: Props) => {
  const { data, error, isLoading } = useGames(gameQuery)
  const skeletons = [1, 2, 3, 4, 5, 6, 7];


  return (
    <>{error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3 }} padding='10px' spacing={5}>
        {isLoading && skeletons.map(skeleton => <GameCardContainer key={skeleton}><GameCardSkeleton  /></GameCardContainer>)}
        {data.map((game) => (<GameCardContainer key={game.id}><GameCard  game={game} /></GameCardContainer>))}
      </SimpleGrid>
    </>
  )
}

export default GameGrid

