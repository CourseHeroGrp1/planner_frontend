import { useState } from "react";


export const useSideBar = () => {
    const width = 300
    const [isMenuOpened, setIsMenuOpened] = useState(false)
    
    const handleClick = () => {
        // toggles the menu opened state
        setIsMenuOpened((isMenuOpened) => !isMenuOpened)
    }

    return {
        width,
        isMenuOpened,
        handleClick,
    }
}