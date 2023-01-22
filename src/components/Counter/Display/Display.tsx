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
    setMaxInputValue: (value: number) => void

}

export const Display: FC<Display> = ({
                                         count,
                                         maxValue, isError,
                                         isDisabled,
                                         startInputValue,
                                         maxInputValue,
                                         setIsDisabled,
                                         setMaxInputValue,
                                     }) => {
    const isErrorForInputsValues = maxInputValue < 0 || startInputValue < 0 || maxInputValue <= startInputValue
        ? isDisabled : !isDisabled

    const isMaxCountValue = count === maxValue ? s.red : " ";

    const isCountErrorClassName = count === maxValue ? s.error : " ";

    if (startInputValue >= 0) {
        setIsDisabled(isDisabled)

    }
    let checkInputsValues = false
    checkInputsValues = startInputValue >= 0 || count > 0


    return (
        <div className={isMaxCountValue}>
            {isErrorForInputsValues
                ? <div
                    className={s.error}>Некорректное значение
                </div>
                : startInputValue >= 0 && maxInputValue > 0
                    ? <div
                        className={isCountErrorClassName}>
                        {checkInputsValues && <b>Установите значение и нажмите кнопку Set</b>}
                    </div>
                    : <div>{startInputValue}</div>
            }
        </div>
    );
};
//
