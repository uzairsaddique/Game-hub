import React from 'react'
import { Platform } from "../Hooks/useGames";
import { Card, CardBody, Heading, Image, Text, Icon, HStack } from '@chakra-ui/react'
import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa'   
 import {MdPhoneIphone} from 'react-icons/md'  
import {SiNintendo} from 'react-icons/si'  
import {BsGlobe} from 'react-icons/bs'  
import { IconType } from 'react-icons';

interface Props {
    platforms : Platform[]

}

const PlatformIconList = ({platforms}: Props) => {
  const iconeMap: {[key: string]:IconType} = {
    pc: FaWindows,
    playstation : FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux : FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    Android: FaAndroid
  }

  return (
<HStack marginY = {2}>

{platforms.map((platform)=><Icon as={iconeMap[platform.slug]} color='gray.500' /> )}
</HStack>
    )
}

export default PlatformIconList