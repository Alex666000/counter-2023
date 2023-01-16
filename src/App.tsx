import React, {useState} from "react";
import s from "./App.module.css";
import Counter from "./components/Counter";
import {Button} from "./components/Button";


function App() {
    const maxValue = 5
    const minValue = 0

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
                <Button
                    name={'inc'}
                    // дизейбл по условию
                    isDisabled={count === maxValue}
                    onClick={onIncCountClickHandler}
                />
                <Button
                    name={'reset'}
                    isDisabled={count === 0}
                    onClick={onResetCountClickHandler}
                />
            </div>
        </div>
    );
}

export default App;
