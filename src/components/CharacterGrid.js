import React from 'react';
import CharacterItem from './CharacterItem';
import Spinner from './Spinner';


const CharacterGrid = ({ isLoading, data }) => {
    return (
        isLoading ? <Spinner /> : (
        <section className='cards'>
            {data.map((item) => (
                <CharacterItem key={item.char_id} item={item}></CharacterItem>
            ))}
        </section>
        )
    )
}

export default CharacterGrid
