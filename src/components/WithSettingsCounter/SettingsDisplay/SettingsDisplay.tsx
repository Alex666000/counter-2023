import React, {ChangeEvent, FC, useState} from "react";
import s from "./SettingsDisplay.module.css";
import CustomInput from "../../../common/CustomInput/CustomInput";
import {isDisabled} from "@testing-library/user-event/dist/utils";
import {useDispatch, useSelector} from "react-redux";
import {setIsDisabledAC, setMaxInputValueAC, setStartInputValueAC} from "../../../redux/counter-reducer";
import {AppRootStateType} from "../../../redux/store";

type SettingsDisplayPropsType = {
    isErrorForInputsValues: boolean
}

export const SettingsDisplay: FC<SettingsDisplayPropsType> = ({
                                                                  isErrorForInputsValues,
                                                              }) => {
    const dispatch = useDispatch()

    const startInputValue = useSelector<AppRootStateType, number>(state => state.counter.startInputValue)
    const maxInputValue = useSelector<AppRootStateType, number>(state => state.counter.maxInputValue)

    const isError = startInputValue < 0 || maxInputValue <= startInputValue

    const onMaxValueInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setIsDisabledAC(!isDisabled))
        const newSetMaxInputValue = Number(e.currentTarget.value)
        dispatch(setMaxInputValueAC(newSetMaxInputValue))
    }

    const onStartValueInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setIsDisabledAC(!isDisabled))
        const newStartInputValue = Number(e.currentTarget.value)

        dispatch(setStartInputValueAC(newStartInputValue))
    }

    const isErrorStartInputClassName = startInputValue < 0 && isError || startInputValue === maxInputValue
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
                    className={isErrorStartInputClassName}
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