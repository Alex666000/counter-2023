import React, {useEffect, useState} from "react";
import s from "./App.module.css";
import {WithSettingsCounter} from "../components/WithSettingsCounter/WithSettingsCounter";
import {Counter} from "../components/Counter/Counter";


const App = () => {
    const maxCountValue = 5
    const minCountValue = 0

    let [count, setCount] = useState(0)
    const [isDisabled, setIsDisabled] = useState(false)
    const [startInputValue, setStartInputValue] = useState(0)
    const [maxInputValue, setMaxInputValue] = useState(5)


// localStorage logic


// handles
    const onClickIncrementHandler = () => {
        setCount(count + 1)
    }

    const onClickResetHandler = () => {
        setCount(0)
    }

    useEffect(() => {
        // получаем с LS
        let startInputValueString = localStorage.getItem("startInputValue") || "";
        setStartInputValue(JSON.parse(startInputValueString))

        const maxInputValueString = localStorage.getItem("maxInputValue") || ""
        setMaxInputValue(JSON.parse(maxInputValueString))

    },[])

    const setDisplayValues = () => {
        setStartInputValue(startInputValue)
        setMaxInputValue(maxInputValue)
        setCount(startInputValue)

        // установить LS...
        localStorage.setItem("startInputValue", JSON.stringify(startInputValue))
        localStorage.setItem("maxInputValue", JSON.stringify(maxInputValue))

    }

    return (
        <div className={s.wrapperCounters}>
            <div className={s.wrapperItem}>
                <WithSettingsCounter
                    isDisabled
                    startInputValue={startInputValue}
                    maxInputValue={maxInputValue}
                    setStartInputValue={setStartInputValue}
                    setMaxInputValue={setMaxInputValue}
                    setIsDisabled={setIsDisabled}
                    setDisplayValues={setDisplayValues}
                />
            </div>

            <div className={s.wrapperItem}>
                <Counter
                    minValue={minCountValue}
                    maxValue={maxCountValue}
                    count={count}
                    startInputValue={startInputValue}
                    maxInputValue={maxInputValue}
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
