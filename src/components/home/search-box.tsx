import React from 'react'
import '../../styles/search-box.css'

interface SearchBoxProps {
    onSearch(text: string): void
}

function SearchBox (props: SearchBoxProps) {
    let inputRef: any

    const setInputRef = (ref: any) => {
        inputRef = ref
    }

    const onSearch = () => {
        const value = inputRef ? inputRef.value.trim() : ''
        props.onSearch(value)
    }

    const onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter') {
            onSearch()
        } else if(event.key === 'Escape') {
            if(inputRef) {
                inputRef.value = ''
                inputRef.blur()
            }
        }
    }
    return (
        <div className='searchBox'>
            <input
                type='text'
                ref={setInputRef}
                onKeyUp={onKeyUp}
                placeholder={'Search for cryptocurrency'}
            />
        </div>
    )
}

export default SearchBox