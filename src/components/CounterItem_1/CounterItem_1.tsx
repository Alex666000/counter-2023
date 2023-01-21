import React, {FC, useEffect, useState} from "react";
import s from "./CounterItem_1.module.css"
import {SettingsDisplay} from "./SettingsDisplay/SettingsDisplay";
import {CustomButton} from "../../common/SuperButton/CustomButton";

type CounterItem_1PropsType = {

}

export const CounterItem_1: FC<CounterItem_1PropsType> = ({}) => {
    const [isDisabled, setIsDisabled] = useState(true)

    return (
        <>
            <div className={s.header}>
                <SettingsDisplay setIsDisabled={setIsDisabled}/>
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