import React, {FC, useEffect, useState} from "react";
import s from "./WithSettingsCounter.module.css"
import {SettingsDisplay} from "./SettingsDisplay/SettingsDisplay";
import {CustomButton} from "../../common/CustomButton/CustomButton";

type WithSettingsCounterPropsType = {
    startInputValue: number
    maxInputValue: number
    isDisabled: boolean
    setStartInputValue: (value: number) => void
    setMaxInputValue: (value: number) => void
    setIsDisabled: (value: boolean) => void
    setDisplayValues: () => void
}

export const WithSettingsCounter: FC<WithSettingsCounterPropsType> = ({
                                                                          isDisabled,
                                                                          startInputValue,
                                                                          maxInputValue,
                                                                          setStartInputValue,
                                                                          setMaxInputValue,
                                                                          setIsDisabled,
                                                                          setDisplayValues,

                                                                      }) => {

    const isErrorForInputsValues = maxInputValue < 0 || startInputValue < 0 || maxInputValue <= startInputValue
       ? isDisabled : !isDisabled


    return (
        <>
            <div className={s.header}>
                <SettingsDisplay
                    isErrorForInputsValues={isErrorForInputsValues}
                    startInputValue={startInputValue}
                    maxInputValue={maxInputValue}
                    setIsDisabled={setIsDisabled}
                    setStartInputValue={setStartInputValue}
                    setMaxInputValue={setMaxInputValue}
                />
            </div>
            <div className={s.footer}>
                <CustomButton
                    isDisabled={isErrorForInputsValues}
                    className={s.button}
                    name={"SET"}
                    onClick={setDisplayValues}
                />
            </div>
        </>
    )
}