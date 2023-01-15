import React, {useState} from "react";
import s from "./App.module.css";
import Counter from "./components/Counter";
import {IncButton} from "./components/IncButton";
import {ResetButton} from "./components/ResetButton";

function App() {
    const [count, setCount] = useState(0)

    const onIncCountClickHandler = () => {
        setCount(count + 1)
    }

    const onResetCountClickHandler = () => {
        setCount(0)
    }

    return (
        <div className={s.App}>
            <Counter count={count}/>
            <div className={s.buttons}>
                <IncButton
                    // дизейбл по условию
                    isDisabled={count === 5}
                    incName={"inc"}
                    onIncCountClickHandler={onIncCountClickHandler}
                />
                <ResetButton
                    isDisabled={count === 0}
                    resetName={"reset"}
                    count={count}
                    onResetCountClickHandler={onResetCountClickHandler}
                />
            </div>
        </div>
    );
}

export default App;
