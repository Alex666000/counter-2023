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
        // в качестве значения записываем в стейт - установили локальную переменную в ЛС
        // JSON.stringify - любое значение преобразовывает в строку - даже объект
        localStorage.setItem("counterValue", JSON.stringify(count))
        // получили локальную переменную с ЛС
        const countString = localStorage.getItem("counterValue")
        if (countString) {
            const newCount = JSON.parse(countString)
            // записали в ЛС спаршенную строку в значение
            setCount(newCount)
        }
    }

    const onResetCountClickHandler = () => {
        setCount(0)
        localStorage.setItem('counterValue', JSON.stringify(count))
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
                    isDisabled={count === minValue}
                    onClick={onResetCountClickHandler}
                />
            </div>
        </div>
    );
}

export default App;
