import React from "react";
import s from "../App.module.css";

type CounterPropsType = {
    count: number
}

export const Counter: React.FC<CounterPropsType> = (props) => {
    return (
        <div className={s.timer}>
            <div
                // условный рендеринг
                className={props.count === 5 ? s.red : ' '}>
                {props.count}
            </div>
        </div>
    );
};

export default Counter;