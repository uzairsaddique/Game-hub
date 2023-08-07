import React from 'react'
import { Game } from '../Hooks/useGames'
import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react'
import PlatformIconList from "./PlatformIconList"

interface Props {
    game: Game
}

const GameCard = ({game}:Props) => {
    console.log('Props',game.background_image)
  return (
    <Card borderRadius={10} overflow='hinden'>
        <Image src={game.background_image}/>
        <CardBody>
            
            <Heading fontSize='2xl'>{game.name}</Heading>
            <PlatformIconList  platforms={game.parent_platforms.map(p => p.platform)}/>
        
        </CardBody>

    </Card>
  )
}

export default GameCard