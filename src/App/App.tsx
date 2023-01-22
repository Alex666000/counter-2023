import React, {useEffect, useState} from "react";
import s from "./App.module.css";
import {WithSettingsCounter} from "../components/WithSettingsCounter/WithSettingsCounter";
import {Counter} from "../components/Counter/Counter";
import {SettingsDisplay} from "../components/WithSettingsCounter/SettingsDisplay/SettingsDisplay";


const App = () => {
    const maxValue = 5
    const minValue = 0
// стал...  startInputValue === -1
    const [startInputValue, setStartInputValue] = useState(0)

    const [isError, setIsError] = useState(false)

    const [count, setCount] = useState(0)



// localStorage logic
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

// handles
    const onClickIncrementHandler = () => {
        setCount(count + 1)
        setItemLocaleStorage()
    }

    const onClickResetHandler = () => {
        setCount(0)
        setItemLocaleStorage()
    }


    return (
        <div className={s.wrapperCounters}>
            <div className={s.wrapperItem}>
                <WithSettingsCounter
                    isError={false}
                    startInputValue={startInputValue}
                    setStartInputValue={setStartInputValue}
                    setIsError={setIsError}
                />
            </div>

            <div className={s.wrapperItem}>
                <Counter
                    minValue={minValue}
                    maxValue={maxValue}
                    count={count}
                    isError={false}
                    startInputValue={startInputValue}
                    onClickIncrementHandler={onClickIncrementHandler}
                    onClickResetHandler={onClickResetHandler}
                />
            </div>


        </div>
    );
};

export default App;
