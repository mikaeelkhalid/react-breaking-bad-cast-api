import React from 'react';
import { useState } from 'react'

const SearchCharacter = ( {getQuery} ) => {
    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q);
        getQuery(q);

    }

    return (
        <section className='search'>
            <input 
            type='text' 
            className='form-control'
            placeholder='Search Character..'
            value={text}
            onChange={e => onChange(e.target.value)}
            autoFocus 
             />
        </section>
    )
}

export default SearchCharacter
