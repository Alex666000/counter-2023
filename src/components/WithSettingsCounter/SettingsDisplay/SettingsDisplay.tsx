import React, {ChangeEvent, FC, useState} from "react";
import s from "./SettingsDisplay.module.css";
import CustomInput from "../../../common/CustomInput/CustomInput";

type SettingsDisplayPropsType = {
    startInputValue: number
    isError: boolean
    setIsDisabled: (value: boolean) => void
    setStartInputValue: (value: number) => void
    setIsError?: (value: boolean) => void
}

export const SettingsDisplay: FC<SettingsDisplayPropsType> = ({
                                                                  isError,
                                                                  startInputValue,
                                                                  setIsDisabled,
                                                                  setStartInputValue,
                                                                  setIsError
                                                              }) => {
    const [maxInputValue, setMaxInputValue] = useState(5)
// сюда пришел -1 - isError станет true
    isError = startInputValue < 0 || maxInputValue <= startInputValue

    const onMaxValueInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIsDisabled(false)
        setMaxInputValue(Number(e.currentTarget.value))
    }
// редактировать согласно строки 11-12 App.tsx
    const onStartValueInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIsDisabled(false)
        const newStartInputValue = +e.currentTarget.value
        setStartInputValue(newStartInputValue)

        if (newStartInputValue < 0) {
            setIsDisabled(true)
        }

    }
// т.к isError === true - применится класс к CustomInput у SettingsDisplay
    const isErrorClassName = startInputValue < 0 && isError ? s.error : s.input

    return (
        <div className={s.displayContainer}>
            <div className={s.displayValue}>
                {/* max value*/}
                <CustomInput
                    title={"max value"}
                    className={s.input}
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
// className={error ? s.input + '' + s.error : ``}

// className={count === maxValue ? s.red : ' '}>

// <span className={error ? classes.error : ""}>{error}</span>

//  const isError: boolean = value < 0 || startValue < 0 || value <= startValue

//  {error && <div className={s.error}>Некорректное значение</div>}}