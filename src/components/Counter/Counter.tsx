import React, {FC} from "react";
import s from "./Counter.module.css";
import {CustomButton} from "../../common/CustomButton/CustomButton";
import {Display} from "./Display/Display";

type CounterPropsType = {
    minValue: number
    maxValue: number
    count: number
    onClickIncrementHandler: () => void
    onClickResetHandler: () => void
    startInputValue: number
    maxInputValue: number
}

export const Counter: FC<CounterPropsType> = ({
                                                  minValue,
                                                                                                  count,
                                                  startInputValue,
                                                  maxInputValue,
                                                  onClickIncrementHandler,
                                                  onClickResetHandler,
                                             }) => {
    return (
        <>
            <div className={s.header}>
                <Display
                    isDisabled
                    count={count}
                    isError
                    startInputValue={startInputValue}
                    maxInputValue={maxInputValue}
                />
            </div>

            <div className={s.footer}>

                <div className={s.footerButton}>
                    <CustomButton count={count}
                                  maxInputValue={maxInputValue}
                                  className={s.button}
                                  name={"inc"}
                                  isDisabled={count === maxInputValue}
                                  onClick={onClickIncrementHandler}
                    >
                    </CustomButton>
                </div>

                <div className={s.footerButton}>
                    <CustomButton
                        name={"reset"}
                        isDisabled={count === minValue}
                        onClick={onClickResetHandler}
                    >
                    </CustomButton>
                </div>

            </div>
        </>
    )
}