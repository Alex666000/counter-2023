import React, {FC} from "react";
import s from "./Display.module.css";

type Display = {
    count: number
    maxValue: number
    isError: boolean
    startInputValue: number
}

export const Display: FC<Display> = ({count, maxValue, isError, startInputValue}) => {
    const isMaxCountValue = count === maxValue ? s.red : ' ';

    const isCountErrorClassName = count === maxValue ? s.error : ' ';


    return (
        <div className={isMaxCountValue}>
            {startInputValue < 0
                ? <div className={s.error}>Некорректное значение</div>
                : <div className={isCountErrorClassName}>{count}</div>
            }
         </div>
    );
};

