import React, {FC} from "react";
import s from "./Display.module.css";

type Display = {
    count: number
    isError: boolean
    startInputValue: number
    maxInputValue: number
    isDisabled: boolean
}

export const Display: FC<Display> = ({
                                         count,
                                         isDisabled,
                                         startInputValue,
                                         maxInputValue,
                                     }) => {

     return (
        <div className={count === maxInputValue ? s.red : " "}>
            <span>{count ? count : startInputValue}</span>
        </div>
    );
};

// let counterClassName = (count === maxValue) ? `${s.counter} ${s.counterErrorMaxValue}` : s.counter;





/*
<div>
    {isErrorForInputValues
        ? <div className={s.error}><b>Некорректное значение</b></div>
        : count === 0 && startInputValue >= 0 && maxInputValue
            ? <div>{<b>Установите значение и нажмите кнопку Set</b>}</div>
            : correctInputValues && <div className={maxInputValue === count ? s.active : ' '}>{count}</div>
    }
</div>*/
