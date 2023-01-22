import React, {FC} from "react";
import s from "./Counter.module.css";
import {CustomButton} from "../../common/CustomButton/CustomButton";
import {Display} from "./Display/Display";

type CounterPropsType = {
    minValue: number
    maxValue: number
    count: number
    isError: boolean
    onClickIncrementHandler: () => void
    onClickResetHandler: () => void
    startInputValue: number
}

export const Counter: FC<CounterPropsType> = ({
                                                  minValue,
                                                  maxValue,
                                                  count,
                                                  isError,
                                                  startInputValue,
                                                  onClickIncrementHandler,
                                                  onClickResetHandler,
                                              }) => {
    return (
        <>
            <div className={s.header}>
                <Display
                    count={count}
                    maxValue={maxValue}
                    isError={true}
                    startInputValue={startInputValue}/>
            </div>

            <div className={s.footer}>

                <div className={s.footerButton}>
                    <CustomButton
                        className={s.button}
                        name={"inc"}
                        isDisabled={count === maxValue}
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