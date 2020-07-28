import React, { useState, useEffect } from 'react'

const HEIGHT = 70

function StickyHeader (props: any) {
    let scrollY: number;
    const [sticky, setSticky] = useState(true)

    const onScroll = () => {
        const scrollDown = window.scrollY > scrollY
        const newStick = scrollDown || (sticky ? window.scrollY <= HEIGHT : window.scrollY === 0)

        if(newStick !== sticky) {
            setSticky(newStick)
        }
        scrollY =  window.scrollY
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps 
        scrollY = window.scrollY
        window.addEventListener('scroll', onScroll)

        return() => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    return(
        <div className='StickyHeader'>
            <div className='bar'>
                {props.children}
            </div>
        </div>
    )
}

export default StickyHeader