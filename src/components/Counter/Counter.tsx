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
    maxInputValue: number
    isDisabled: boolean
    setIsDisabled: (value: boolean) => void
    setMaxInputValue: (value: number) => void

}

export const Counter: FC<CounterPropsType> = ({
                                                  minValue,
                                                  maxValue,
                                                  count,
                                                  isError,
                                                  isDisabled,
                                                  startInputValue,
                                                  maxInputValue,
                                                  onClickIncrementHandler,
                                                  onClickResetHandler,
                                                  setIsDisabled,
                                                  setMaxInputValue,
                                              }) => {
    return (
        <>
            <div className={s.header}>
                <Display
                    isDisabled
                    count={count}
                    maxValue={maxValue}
                    isError
                    startInputValue={startInputValue}
                    maxInputValue={maxInputValue}
                    setIsDisabled={setIsDisabled}
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