import React, {FC, useEffect, useState} from "react";
import s from "../App.module.css";
import {Display} from "./Display";
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
            <div className={s.containerCounterItem_1}>
                <div className={s.displayCounter_1}>
                    <Display
                        maxValue={maxValue}
                        count={count}/>
                </div>
            </div>

            <div className={s.customButtons}>
                <CustomButton
                    className={s.button}
                    name={"SET"}
                    isDisabled={count === maxValue}
                    onClick={onIncCountClickHandler}
                >
                </CustomButton>
            </div>
        </>
    )
}