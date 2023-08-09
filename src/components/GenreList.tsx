import useGenres, {Genre} from '../Hooks/useGenres'
import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import getCroppedImageUrl from '../services/image-url';

interface Props {
    onselectedGenre: (genre: Genre) => void;
    selectedGenre : Genre | null
}


const GenreList = ({onselectedGenre, selectedGenre}: Props ) => {
    // if (error) return null
    // if (isLoading) return <Spinner>
    const { data } = useGenres();
    return (
        <List>
            {data.map(genre => <ListItem paddingY='8px' key={genre.id}> 
            <HStack> 
                <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                 <Button fontWeight={genre.id  === selectedGenre?.id ? 'bold' : 'normal'} onClick={()=>onselectedGenre(genre)} fontSize={'lg'} variant='link'>{genre.name}</Button></HStack></ListItem>)}
        </List>
    )
}

export default GenreList  