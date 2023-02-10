import React, {FC} from "react";
import s from "./Counter.module.css";
import {CustomButton} from "../../common/CustomButton/CustomButton";
import {Display} from "./Display/Display";
import {useDispatch, useSelector} from "react-redux";
import {
    incrementCountAC, resetCountValueAC,
    setCountAC,
    setEditModeCounterAC,
    setIsDisabledAC,
    setMaxInputValueAC
} from "../../redux/counter-reducer";
import {AppRootStateType} from "../../redux/store";

type CounterPropsType = {
    minCountValue: number
    maxCountValue: number
    isDisabledCount: boolean
}

export const Counter: FC<CounterPropsType> = ({
                                                  minCountValue, maxCountValue,
                                              }) => {
    const dispatch = useDispatch()

    const editMode = useSelector<AppRootStateType, boolean>(state => state.counter.editMode)
    const isDisabled = useSelector<AppRootStateType, boolean>(state => state.counter.editMode)
    const startInputValue = useSelector<AppRootStateType, number>(state => state.counter.startInputValue)
    const maxInputValue = useSelector<AppRootStateType, number>(state => state.counter.maxInputValue)
    const count = useSelector<AppRootStateType, number>(state => state.counter.count)

// handlers
    const onClickIncrementHandler = () => {
        dispatch(incrementCountAC(count + 1))
    }

    const onClickResetHandler = () => {
        dispatch(resetCountValueAC(0))
    }

    const setDisplayValues = () => {
        dispatch(setEditModeCounterAC(!editMode))
        dispatch(setIsDisabledAC(!isDisabled))
        dispatch(setCountAC(startInputValue))
        dispatch(setMaxInputValueAC(maxInputValue))
    }

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
                                  isDisabled={count === startInputValue ? false : count === maxInputValue}
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