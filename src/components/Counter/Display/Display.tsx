import React, {FC} from "react";
import s from "./Display.module.css";

type Display = {
    count: number
    maxValue: number
    isError: boolean
    startInputValue: number
    maxInputValue: number
    isDisabled: boolean
    setIsDisabled: (value: boolean) => void

}

export const Display: FC<Display> = ({
                                         count,
                                         maxValue, isError,
                                         isDisabled,
                                         startInputValue,
                                         maxInputValue,
                                         setIsDisabled,
                                     }) => {
    const isErrorForInputValues = maxInputValue < 0 || startInputValue < 0 || maxInputValue <= startInputValue
        ? isDisabled : !isDisabled

    const correctInputValues = count >= 0 && maxInputValue > 0 && count >= 0 && count !== maxInputValue
    // const viewCount = (count === startInputValue) && correctInputValues && count

    return (
        <div >
            {isErrorForInputValues
                ? <div className={s.error}><b>Некорректное значение</b></div>
                : count === 0 && startInputValue >= 0 && maxInputValue
                ? <div>{<b>Установите значение и нажмите кнопку Set</b>}</div>
                : correctInputValues && <div>{count}</div>
                    // ? <div>{<b>Установите значение и нажмите кнопку Set</b>}</div>

            }
        </div>
    );
};

