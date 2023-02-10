import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";
import {
    setCountAC,
    setEditModeCounterAC,
    setIsDisabledAC,
    setMaxInputValueAC,
    setStartInputValueAC
} from "../redux/counter-reducer";
import {ChangeEvent} from "react";
import {isDisabled} from "@testing-library/user-event/dist/utils";
import s from "../components/WithSettingsCounter/SettingsDisplay/SettingsDisplay.module.css";

export const useSettingsDisplayValue = () => {
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

    return {maxInputValue,onMaxValueInputChange,isErrorStartInputClassName,startInputValue,onStartValueInputChange}
}