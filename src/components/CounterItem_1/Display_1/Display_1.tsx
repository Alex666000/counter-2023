import React, {FC} from "react";
import s from "../../../App/App.module.css";

type DisplayPropsType = {
    count: number
    maxValue: number
}

export const Display_1: FC<DisplayPropsType> = ({count, maxValue}) => {
    return (
        <div className={s.displayContainer}>
            <div className={s.displayValue}>
                <span className={s.value}>max value: </span> <input className={s.input} type="number"/>
            </div>
            <div className={s.displayValue}>
                <span className={s.value}>start value: </span> <input className={s.input} type="number"/>
            </div>

        </div>
    );
};

// className={count === maxValue ? s.red : ' '}>