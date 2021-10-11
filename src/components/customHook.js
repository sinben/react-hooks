import { useState, useEffect } from "react";
const getSize = () => ({
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
})
export const useWindowSize = () => {
    let [size, setSize] = useState(getSize());
    const updateSize = () => setSize(getSize());
    useEffect(() => {
        window.addEventListener('resize', updateSize);
        return () => {
            window.removeEventListener('resize', updateSize);
        };
    });
    return size;
}