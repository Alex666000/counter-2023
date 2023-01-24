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
    setDisplayValues: () => void
    setCount: (value: number) => void
    startInputValue: number
    maxInputValue: number
    isDisabledCount: boolean
}

export const Counter: FC<CounterPropsType> = ({
                                                  minValue, maxValue,
                                                  count,
                                                  startInputValue,
                                                  maxInputValue,
                                                  setCount,
                                                  onClickIncrementHandler,
                                                  onClickResetHandler, setDisplayValues,

                                              }) => {

    const disabledInc = 0

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
                    <CustomButton count={count >= 5 && maxInputValue || count}
                                  maxInputValue={maxInputValue}
                                  startInputValue={startInputValue}
                                  className={s.button}
                                  name={"inc"}
                                  isDisabled={count === startInputValue ? false : count === maxInputValue ? true : false}
                                  onClick={onClickIncrementHandler}
                    >
                    </CustomButton>
                </div>

                <div className={s.footerButton}>
                    <CustomButton
                        name={"reset"}
                        isDisabled={!startInputValue ? count === startInputValue : false}
                        onClick={onClickResetHandler}
                    >
                    </CustomButton>
                    <CustomButton
                        name={"set"}
                        isDisabled={false}
                        onClick={setDisplayValues}
                    >
                    </CustomButton>
                </div>

            </div>
        </>
    )
}

//     const disabledInc = maxInputValue? count === maxInputValue : count === maxValue