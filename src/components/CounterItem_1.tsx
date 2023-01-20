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

export const CounterItem_1: FC<CounterItem_1PropsType> = ({minValue, maxValue, count, onIncCountClickHandler, onResetCountClickHandler}) => {

    return (
        <>
            <div className={s.app}>
                <div className={s.displaysContainer}>
                    <div className={s.displays}>
                        <div className={s.display}>
                            <Display maxValue={maxValue} count={count}/>
                        </div>
                    </div>
                </div>

                <div className={s.buttons}>
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