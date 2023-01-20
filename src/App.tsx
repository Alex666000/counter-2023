import React, {FC, useEffect, useState} from "react";
import s from "./App.module.css";
import Display from "./components/Counter";
import {CustomButton} from "./common/SuperButton/CustomButton";


const App = () => {

    return (
        <div className={s.main}>
            <div className={s.countersItems}>
                <div className={s.oneCounterItem}>
                    <CounterItem />
                </div>
                <div className={s.twoCounterItem}>
                    <CounterItem />
                </div>
            </div>
        </div>
    );
};

type DisplayPropsType = {}

const CounterItem: FC<DisplayPropsType> = () => {
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
        <>
            <div className={s.app}>
                <div className={s.displaysContainer}>
                    <div className={s.displays}>
                        <div className={s.display}>
                            <Display maxValue={maxValue} count={count}/>
                        </div>
                    </div>
                </div>

                <div className={s.buttons}>
                    <CustomButton
                        className={s.button}
                        name={"inc"}
                        isDisabled={count === maxValue}
                        onClick={onIncCountClickHandler}
                    >
                    </CustomButton>

                    <CustomButton
                        name={"reset"}
                        isDisabled={count === minValue}
                        onClick={onResetCountClickHandler}
                    >
                    </CustomButton>
                </div>
            </div>
        </>
    )
}
export default App;
