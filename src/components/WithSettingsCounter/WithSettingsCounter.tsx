import React, {FC, useEffect, useState} from "react";
import s from "./WithSettingsCounter.module.css"
import {SettingsDisplay} from "./SettingsDisplay/SettingsDisplay";
import {CustomButton} from "../../common/CustomButton/CustomButton";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {setCountAC, setEditModeCounterAC, setIsDisabledAC, setMaxInputValueAC} from "../../redux/counter-reducer";

type WithSettingsCounterPropsType = {}

export const WithSettingsCounter: FC<WithSettingsCounterPropsType> = ({}) => {
    const dispatch = useDispatch()

    const editMode = useSelector<AppRootStateType, boolean>(state => state.counter.editMode)
    const isDisabled = useSelector<AppRootStateType, boolean>(state => state.counter.editMode)
    const startInputValue = useSelector<AppRootStateType, number>(state => state.counter.startInputValue)
    const maxInputValue = useSelector<AppRootStateType, number>(state => state.counter.maxInputValue)

    const isErrorForInputsValues = maxInputValue < 0 || startInputValue < 0 || maxInputValue <= startInputValue
        ? isDisabled : !isDisabled

    const setDisplayValues = () => {
        dispatch(setEditModeCounterAC(!editMode))
        dispatch(setIsDisabledAC(!isDisabled))
        dispatch(setCountAC(startInputValue))
        dispatch(setMaxInputValueAC(maxInputValue))
    }

    return (
        <>
            <div className={s.header}>
                <SettingsDisplay
                    isErrorForInputsValues={isErrorForInputsValues}
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