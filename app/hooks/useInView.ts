import { useRef, useState, useEffect } from "react";

export default function useInView<T extends HTMLElement>(threshold = 0.15) {
    const ref = useRef<T>(null);
    const [isVisible, setisVisible] = useState(false);
    
    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                setisVisible(entries[0].isIntersecting)
            },
            { threshold: threshold }
        )
        observer.observe(ref.current!)

        return () => observer.disconnect()
    }, [threshold])
    return [ref, isVisible] as const
}