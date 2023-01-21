import React, {FC} from "react";
import s from "./CounterItem_2.module.css";
import {CustomButton} from "../../common/SuperButton/CustomButton";
import {Display_2} from "./Display_2/Display_2";

type CounterItem_2PropsType = {
    minValue: number
    maxValue: number
    count: number
    onIncCountClickHandler: () => void
    onResetCountClickHandler: () => void
}

export const CounterItem_2: FC<CounterItem_2PropsType> = ({
                                                              minValue,
                                                              maxValue,
                                                              count,
                                                              onIncCountClickHandler,
                                                              onResetCountClickHandler,
                                                          }) => {
    return (
        <>
            <div className={s.header}>
                <Display_2 count={count}/>
            </div>

            <div className={s.footer}>

                <div className={s.footerButton}>
                    <CustomButton
                        className={s.button}
                        name={"inc"}
                        isDisabled={count === maxValue}
                        onClick={onIncCountClickHandler}
                    >
                    </CustomButton>
                </div>

                <div className={s.footerButton}>
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