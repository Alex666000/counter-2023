import React, {useEffect, useState} from "react";
import s from "./App.module.css";
import Counter from "./components/Counter";
import {Button} from "./components/Button";


function App() {
    const maxValue = 5
    const minValue = 0

    const [count, setCount] = useState(0)

    // чтобы после перезагрузке странички был в счетчике не нолик и значение из ЛС,то:
    // получаем значение при первой загрузке = перезагрузке
    useEffect(() => {
        let countString = localStorage.getItem('counterValue')
        if (countString) {
            let newCount = JSON.parse(countString)
            setCount(newCount)
        }
    }, [])

    // чтобы при загрузке приложения мы СРАЗУ получали локал, а не по нажатию
    // на кнопку и так же когда "инкрементим" - добавляем  - оно изменялось в ЛС а не по кнопке
    // чтобы сразу добавлялось значение используем useEffect() без него никак не сделать":
    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(count))
        // каждый раз когда изменяется count - мы установим его в ЛС
    }, [count])

    const onIncCountClickHandler = () => {
        setCount(count + 1)
        localStorage.setItem('counterValue', JSON.stringify(count))
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
