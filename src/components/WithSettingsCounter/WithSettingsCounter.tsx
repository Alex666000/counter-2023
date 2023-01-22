import React, {FC, useEffect, useState} from "react";
import s from "./WithSettingsCounter.module.css"
import {SettingsDisplay} from "./SettingsDisplay/SettingsDisplay";
import {CustomButton} from "../../common/CustomButton/CustomButton";

type WithSettingsCounterPropsType = {
    startInputValue: number
    isError: boolean
    setStartInputValue: (value: number) => void
    setIsError: (value: boolean) => void
}

export const WithSettingsCounter: FC<WithSettingsCounterPropsType> = ({
                                                                          isError,
                                                                          startInputValue,
                                                                          setStartInputValue,
                                                                          setIsError
                                                                      }) => {
    const [isDisabled, setIsDisabled] = useState(true)

    return (
        <>
            <div className={s.header}>
                <SettingsDisplay
                    startInputValue={startInputValue}
                    isError={true}
                    setIsDisabled={setIsDisabled}
                    setStartInputValue={setStartInputValue}
                    setIsError={setIsError}
                />
            </div>
            <div className={s.footer}>
                <CustomButton
                    isDisabled={isDisabled}
                    className={s.button}
                    name={"SET"}
                    onClick={() => {
                    }}
                />
            </div>
        </>
    )
}