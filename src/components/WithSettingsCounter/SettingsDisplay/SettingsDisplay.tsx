import React, {ChangeEvent, FC, useState} from "react";
import s from "./SettingsDisplay.module.css";
import CustomInput from "../../../common/CustomInput/CustomInput";
import {isDisabled} from "@testing-library/user-event/dist/utils";

type SettingsDisplayPropsType = {
    startInputValue: number
    maxInputValue: number
    isError: boolean
    isErrorForInputsValues: boolean
    setIsDisabled: (value: boolean) => void
    setStartInputValue: (value: number) => void
    setMaxInputValue: (value: number) => void
    setIsError?: (value: boolean) => void
}

export const SettingsDisplay: FC<SettingsDisplayPropsType> = ({
                                                                  isError,
                                                                  isErrorForInputsValues,
                                                                  startInputValue,
                                                                  maxInputValue,
                                                                  setIsDisabled,
                                                                  setStartInputValue,
                                                                  setMaxInputValue,
                                                                  setIsError
                                                              }) => {

// сюда пришел -1 - isError станет true
    isError = startInputValue < 0 || maxInputValue <= startInputValue

    const onMaxValueInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIsDisabled(false)
        setMaxInputValue(Number(e.currentTarget.value))
    }
// редактировать согласно строки 11-12 App.tsx
    const onStartValueInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIsDisabled(!isDisabled)
        const newStartInputValue = +e.currentTarget.value
        setStartInputValue(newStartInputValue)
    }
// т.к isError === true - применится класс к CustomInput у SettingsDisplay
    const isErrorClassName = startInputValue < 0 && isError || startInputValue === maxInputValue
        ? s.error
        : s.input


    return (
        <div className={s.displayContainer}>
            <div className={s.displayValue}>
                {/* max value*/}
                <CustomInput
                    title={"max value"}
                    className={isErrorForInputsValues ? s.error : s.input}
                    value={maxInputValue}
                    onChange={onMaxValueInputChange}
                />
            </div>
            <div className={s.displayValue}>
                {/* start value*/}
                <CustomInput
                    title={"start value"}
                    className={isErrorClassName}
                    value={startInputValue}
                    onChange={onStartValueInputChange}
                />
            </div>

        </div>
    );
};
// isErrorForInputsValues ? s.error :

// className={error ? s.input + '' + s.error : ``}

// className={count === maxValue ? s.red : ' '}>

// <span className={error ? classes.error : ""}>{error}</span>

//  const isError: boolean = value < 0 || startValue < 0 || value <= startValue

//  {error && <div className={s.error}>Некорректное значение</div>}}