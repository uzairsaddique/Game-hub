import React from 'react'
import { Game } from '../Hooks/useGames'
import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react'

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
        {game.parent_platforms.map(({platform})=> <Text>{platform.name}</Text>)}
        </CardBody>

    </Card>
  )
}

export default GameCard