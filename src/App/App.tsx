import React, {useEffect, useState} from "react";
import s from "./App.module.css";
import {CounterItem_1} from "../components/CounterItem_1/CounterItem_1";
import {CounterItem_2} from "../components/CounterItem_2/CounterItem_2";


const App = () => {
    const maxValue = 5
    const minValue = 0

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
    const onIncCountClickHandler = () => {
        setCount(count + 1)
        setItemLocaleStorage()
    }

    const onResetCountClickHandler = () => {
        setCount(0)
        setItemLocaleStorage()
    }

    return (
            <div className={s.wrapperCounters}>
                <div className={s.wrapperItem}>
                    <CounterItem_1
                        minValue={minValue}
                        maxValue={maxValue}
                        count={count}
                        onIncCountClickHandler={onIncCountClickHandler}
                        onResetCountClickHandler={onResetCountClickHandler}
                    />
                </div>

                <div className={s.wrapperItem}>
                    <CounterItem_2
                        minValue={minValue}
                        maxValue={maxValue}
                        count={count}
                        onIncCountClickHandler={onIncCountClickHandler}
                        onResetCountClickHandler={onResetCountClickHandler}
                    />
                </div>


            </div>
    );
};

export default App;
