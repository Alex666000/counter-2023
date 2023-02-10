import React, {FC, useEffect, useState} from "react";
import s from "./WithSettingsCounter.module.css"
import {SettingsDisplay} from "./SettingsDisplay/SettingsDisplay";
import {CustomButton} from "../../common/CustomButton/CustomButton";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {setCountAC, setEditModeCounterAC, setIsDisabledAC, setMaxInputValueAC} from "../../redux/counter-reducer";
import {useSetDisplayValue} from "../../hooks/useSetDisplayValue";

type WithSettingsCounterPropsType = { }

export const WithSettingsCounter: FC<WithSettingsCounterPropsType> = ({ }) => {
   const {isErrorForInputsValues,setDisplayValues} = useSetDisplayValue()

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
                    name={"SET"}
                    onClick={setDisplayValues}
                />
            </div>
        </>
    )
}