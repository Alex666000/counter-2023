import React, {useEffect, useState} from "react";
import s from "./App.module.css";
import Counter from "./components/Counter";
import {CustomButton} from "./common/SuperButton/CustomButton";


function App() {
    const maxValue = 5
    const minValue = 0

    const [count, setCount] = useState(0)

    const setItemLocaleStorage = () => {
        return localStorage.setItem("countValue", JSON.stringify(count))
    }

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
            <Counter
                maxValue={maxValue}
                count={count}/>
            <div className={s.buttons}>

                <CustomButton
                    name={"inc"}
                    isDisabled={count === maxValue}
                    onClick={onIncCountClickHandler}
                >
                </CustomButton>

                <CustomButton
                    name={"reset"}
                    isDisabled={count === minValue}
                    onClick={onResetCountClickHandler}
                />
            </div>
        </div>
    );
}

export default App;
