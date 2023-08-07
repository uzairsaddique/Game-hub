import React from 'react'
import { Card, CardBody, Heading, Image, Text, Badge } from '@chakra-ui/react'
interface Props  {
    score: number;
}

const CriticScore = ({score}: Props) => {
    let color = score >75 ? 'red' : score > 60 ? 'yellow' : ''
  return ( 
   <Badge colorScheme={color} fontSize='18px' paddingX={2} borderRadius='4px'>{score}</Badge>
  )
}

export default CriticScore