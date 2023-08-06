import React from 'react'
import { HStack, Image ,Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp';
 import ColorModeSwitch from './ColorModeSwitch';
// import SearchInput from './SearchInput';
// interface Props {
//     onSearch: (searchText: string) => void;
//   }

const Navbar = () => {
  return (
    <div>
      <>
      <HStack justifyContent='space-between' padding='10px'>
      <Image src={logo} boxSize='60px' />
      <Text>NavBar</Text>
      {/* <SearchInput onSearch={onSearch} /> */}
      <ColorModeSwitch />
    </HStack>
      </>
    </div>
  )
}

export default Navbar
