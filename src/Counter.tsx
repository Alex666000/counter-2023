import React, {FC} from "react";
import s from "../App.module.css";

type CounterPropsType = {
    count: number
    maxValue: number
}

export const Counter: FC<CounterPropsType> = ({count, maxValue}) => {
    return (
        <div className={s.count}>
            <div
                className={count === maxValue ? s.red : ' '}>
                {count}
            </div>
        </div>
    );
};

export default Counter;