import React, {FC, useEffect, useState} from "react";
import s from "../App.module.css";
import {Display} from "./Display";
import {CustomButton} from "../common/SuperButton/CustomButton";

type CounterItem_2PropsType = {
    minValue: number
    maxValue: number
    count: number
    onIncCountClickHandler: () => void
    onResetCountClickHandler: () => void
}

export const CounterItem_2: FC<CounterItem_2PropsType> = ({minValue, maxValue, count, onIncCountClickHandler, onResetCountClickHandler}) => {

    return (
        <>
            <div className={s.app}>
                <div className={s.containerCounterItem_1}>
                    <div className={s.displays}>
                        <div className={s.displayCounter_1}>
                            <Display maxValue={maxValue} count={count}/>
                        </div>
                    </div>
                </div>

                <div className={s.customButtons}>
                    <CustomButton
                        className={s.button}
                        name={"inc"}
                        isDisabled={count === maxValue}
                        onClick={onIncCountClickHandler}
                    >
                    </CustomButton>

                    <CustomButton
                        name={"reset"}
                        isDisabled={count === minValue}
                        onClick={onResetCountClickHandler}
                    >
                    </CustomButton>
                </div>
            </div>
        </>
    )
}