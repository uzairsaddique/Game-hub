import React, { ReactNode } from 'react'
import { Card, CardBody, Skeleton, SkeletonText, Box } from '@chakra-ui/react'

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={10} overflow='hinden'>

      {children}
    </Box>
  )
}

export default GameCardContainer