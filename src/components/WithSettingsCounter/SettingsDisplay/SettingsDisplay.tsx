import React, {ChangeEvent, FC, useState} from "react";
import s from "./SettingsDisplay.module.css";
import CustomInput from "../../../common/CustomInput/CustomInput";
import {isDisabled} from "@testing-library/user-event/dist/utils";
import {useDispatch, useSelector} from "react-redux";
import {setIsDisabledAC, setMaxInputValueAC, setStartInputValueAC} from "../../../redux/counter-reducer";
import {AppRootStateType} from "../../../redux/store";
import {useSettingsDisplayValue} from "../../../hooks/useSettingsDispalay";

type SettingsDisplayPropsType = {
    isErrorForInputsValues: boolean
}

export const SettingsDisplay: FC<SettingsDisplayPropsType> = ({isErrorForInputsValues}) => {
   const {maxInputValue,onMaxValueInputChange,isErrorStartInputClassName,startInputValue,onStartValueInputChange} = useSettingsDisplayValue()


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
