
import { MenuButton ,Menu, Button, MenuList, MenuItem} from '@chakra-ui/react'
import {BsChevronDown} from 'react-icons/bs'

interface Props {
onselectSortOrder : (sortOrder: string) => void
sortOrder: string
} 

const SortSelector = ({onselectSortOrder, sortOrder}: Props) => {
    const sortOrders = [
        {value: "", lable: 'Relevance'},
        {value: "-added", lable: 'Date added'},
        {value: "name", lable: 'Name'},
        {value: "-released", lable: 'Release date '},
        {value: "-metacritic", lable: 'Popularity'},
        {value: "-rating", lable: 'Average rating'},
    ]

    const currentSortOrder = sortOrders.find(order => order.value === sortOrder )

  return (
   <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Order By:{currentSortOrder?.lable || ""}</MenuButton>
    <MenuList>
       {sortOrders.map((order)=><MenuItem onClick={() => onselectSortOrder(order.value)} key={order.value} value={order.value}>{order.lable}</MenuItem>)}
    </MenuList>
   </Menu>
  )
}


export default SortSelector