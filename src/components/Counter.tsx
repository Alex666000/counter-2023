import React from "react";
import s from "../App.module.css";

type CounterPropsType = {
    count: number
    maxValue: number
}

export const Counter: React.FC<CounterPropsType> = ({count, maxValue}) => {
    return (
        <div className={s.timer}>
            <div
                className={count === maxValue ? s.red : ' '}>
                {count}
            </div>
        </div>
    );
};

export default Counter;