import {useEffect, useState} from "react";

export let useLocalStorage = (key: string, initialValue: any) => {
    const [startInputValue, setStartInputValue] = useState(initialValue)
    const [maxInputValue, setMaxInputValue] = useState(initialValue)

    const getFromLocalStorage = () => {
        try {
            const maxInputValueString = localStorage.getItem(key) || ""
            setMaxInputValue(JSON.parse(maxInputValueString))
        } catch (error) {
            return null
        }
    };

    useEffect(() => {
        getFromLocalStorage()

        let startInputValueString = localStorage.getItem(key) || ""
        setStartInputValue(JSON.parse(startInputValueString))
    }, [])

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(startInputValue))
        localStorage.setItem(key, JSON.stringify(maxInputValue))
    }, [startInputValue, maxInputValue])

    return [startInputValue, setStartInputValue, maxInputValue, setMaxInputValue]
}