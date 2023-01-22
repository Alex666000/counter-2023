import React, {FC, useEffect, useState} from "react";
import s from "./WithSettingsCounter.module.css"
import {SettingsDisplay} from "./SettingsDisplay/SettingsDisplay";
import {CustomButton} from "../../common/CustomButton/CustomButton";

type WithSettingsCounterPropsType = {
    startInputValue: number
    maxInputValue: number
    isError: boolean
    isDisabled: boolean
    setStartInputValue: (value: number) => void
    setMaxInputValue: (value: number) => void
    setIsError: (value: boolean) => void
    setIsDisabled: (value: boolean) => void
}

export const WithSettingsCounter: FC<WithSettingsCounterPropsType> = ({
                                                                          isError,
                                                                          isDisabled,
                                                                          startInputValue,
                                                                          maxInputValue,
                                                                          setStartInputValue,
                                                                          setMaxInputValue,
                                                                          setIsError,
                                                                          setIsDisabled,
                                                                      }) => {
    const checkStartInputValue = startInputValue >= 0 ? isDisabled : !isDisabled

    return (
        <>
            <div className={s.header}>
                <SettingsDisplay
                    startInputValue={startInputValue}
                    maxInputValue={maxInputValue}
                    isError
                    setIsDisabled={setIsDisabled}
                    setStartInputValue={setStartInputValue}
                    setMaxInputValue={setMaxInputValue}
                    setIsError={setIsError}
                />
            </div>
            <div className={s.footer}>
                <CustomButton
                    isDisabled={checkStartInputValue}
                    className={s.button}
                    name={"SET"}
                    onClick={() => {
                    }}
                />
            </div>
        </>
    )
}