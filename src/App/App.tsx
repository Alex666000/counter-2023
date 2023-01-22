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
// 1) если макс значение меняется то установите значение и нажмите кнопку set
// при нажатии на "сет" устанавливается максимальное значение счетчика-настроек
// что ввели в полях инпутов - по нажатию на сет - кнопка сет дизейблится и настройки мин макс применяются
// к счетчику спарва Counter -где работает теперь подсветка по новому исходя из новых значений
