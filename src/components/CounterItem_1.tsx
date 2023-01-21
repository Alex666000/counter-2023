import React, {FC, useEffect, useState} from "react";
import s from "../App.module.css";
import {Display_1} from "./Display_1";
import {CustomButton} from "../common/SuperButton/CustomButton";

type CounterItem_1PropsType = {
    minValue: number
    maxValue: number
    count: number
    onIncCountClickHandler: () => void
    onResetCountClickHandler: () => void
}

export const CounterItem_1: FC<CounterItem_1PropsType> = ({
                                                              minValue,
                                                              maxValue,
                                                              count,
                                                              onIncCountClickHandler,
                                                              onResetCountClickHandler
                                                          }) => {
    return (
        <>
            <div className={s.header}>
                <Display_1 maxValue={maxValue} count={count} />
            </div>
            <div className={s.footer}>
                <CustomButton
                className={s.button}
                name={"SET"}
                isDisabled={count === maxValue}
                onClick={onIncCountClickHandler}
                />
            </div>
        </>
    )
}