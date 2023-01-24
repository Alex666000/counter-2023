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
    const [editMode, setEditMode] = useState(false)

// handles
    const onClickIncrementHandler = () => {
        setCount(count + 1)

    }

    const onClickResetHandler = () => {
        setCount(0)
    }

    useEffect(() => {
        // получаем с LS
        let startInputValueString = localStorage.getItem("startInputValue")
        if (!!startInputValueString) setStartInputValue(JSON.parse(startInputValueString))


        const maxInputValueString = localStorage.getItem("maxInputValue")
        if (!!maxInputValueString) setMaxInputValue(JSON.parse(maxInputValueString))

    }, [])

    const setDisplayValues = () => {
        setEditMode(!editMode)
        setIsDisabled(!isDisabled)

        setCount(startInputValue)
        setMaxInputValue(maxInputValue)

    }
    console.log([startInputValue,maxInputValue])

    return (
        <div className={s.wrapperCounters}>
            <div className={s.wrapperItem}>
                {editMode
                    ? <WithSettingsCounter
                        isDisabled
                        startInputValue={startInputValue}
                        maxInputValue={maxInputValue}
                        setStartInputValue={setStartInputValue}
                        setMaxInputValue={setMaxInputValue}
                        setIsDisabled={setIsDisabled}
                        setDisplayValues={setDisplayValues}
                    />
                    : <Counter
                        isDisabledCount={true}
                        setDisplayValues={setDisplayValues}
                        minValue={minCountValue}
                        maxValue={maxCountValue}
                        count={count}
                        setCount={setCount}
                        startInputValue={startInputValue}
                        maxInputValue={maxInputValue}
                        onClickIncrementHandler={onClickIncrementHandler}
                        onClickResetHandler={onClickResetHandler}
                    />
                }
            </div>
        </div>
    );
};

export default App;

