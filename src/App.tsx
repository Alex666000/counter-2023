import React, {useEffect, useState} from "react";
import s from "./App.module.css";
import Counter from "./components/Counter";
import {Button} from "./components/Button";


function App() {
    const maxValue = 5
    const minValue = 0

    const [count, setCount] = useState(0)

    const setItemLocaleStorage = () => {
        return localStorage.setItem("countValue", JSON.stringify(count))

    }
// при перезагрузке счечик остается теперь = сохраняется
    useEffect(() => {
        let countString = localStorage.getItem("countValue")
        if (countString) {
            let newCount = JSON.parse(countString)
            setCount(newCount + 1)
        }
        window.addEventListener("storage", setItemLocaleStorage)

        return () => {
            window.removeEventListener("storage", setItemLocaleStorage)
        }

    }, [])

    const onIncCountClickHandler = () => {
        setCount(count + 1)
        setItemLocaleStorage()
    }

    const onResetCountClickHandler = () => {
        setCount(0)
        setItemLocaleStorage()
    }

    return (
        <div className={s.App}>
            <Counter count={count}/>
            <div className={s.buttons}>
                <Button
                    name={"inc"}
                    // дизейбл по условию
                    isDisabled={count === maxValue}
                    onClick={onIncCountClickHandler}
                />
                <Button
                    name={"reset"}
                    isDisabled={count === minValue}
                    onClick={onResetCountClickHandler}
                />
            </div>
        </div>
    );
}

export default App;
