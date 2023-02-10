import React, {FC} from "react";
import s from "./Counter.module.css";
import {CustomButton} from "../../common/CustomButton/CustomButton";
import {Display} from "./Display/Display";
import {useDispatch, useSelector} from "react-redux";
import {incrementCountAC, resetCountValueAC, setCountAC} from "../../redux/counter-reducer";
import {AppRootStateType} from "../../redux/store";
import {useSetDisplayValue} from "../../hooks/useSetDisplayValue";

type CounterPropsType = { }

export const Counter: FC<CounterPropsType> = ({}) => {
    const dispatch = useDispatch()
    const count = useSelector<AppRootStateType, number>(state => state.counter.count)

    const {startInputValue, maxInputValue, setDisplayValues} = useSetDisplayValue()

    const onClickIncrementHandler = () => {
        dispatch(incrementCountAC(count + 1))
    }

    const onClickResetHandler = () => {
        dispatch(resetCountValueAC(0))
        dispatch(setCountAC(startInputValue))
    }

    return (
        <>
            <div className={s.header}>
                <Display/>
            </div>

            <div className={s.footer}>

                <div className={s.footerButton}>
                    <CustomButton
                        name={"inc"}
                        count={count >= maxInputValue && maxInputValue || count}
                        maxInputValue={maxInputValue}
                        startInputValue={startInputValue}
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
