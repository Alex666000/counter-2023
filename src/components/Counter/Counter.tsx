import React, {FC, useEffect} from "react";
import s from "./Counter.module.css";
import {CustomButton} from "../../common/CustomButton/CustomButton";
import {Display} from "./Display/Display";
import {useDispatch, useSelector} from "react-redux";
import {incValuesTC, resetCountValueAC, setCountAC, setValueForLocalStorageTC} from "../../redux/counter-reducer";
import {AppRootStateType} from "../../redux/store";
import {useSetDisplayValue} from "../../hooks/useSetDisplayValue";

type CounterPropsType = { }

export const Counter: FC<CounterPropsType> = ({}) => {
    const dispatch = useDispatch()
    const count = useSelector<AppRootStateType, number>(state => state.counter.count)

    //когда загрузится Counter я буду диспатчить санку и получать значение
    // после перезагрузки ЛС сохранится на экране
    useEffect(() => {
        dispatch(setValueForLocalStorageTC())
    },[])



    const {startInputValue, maxInputValue, setDisplayValues} = useSetDisplayValue()

    const onClickIncrementHandler = () => {
        // dispatch(incrementCountAC())
            // for LS code:
        /*dispatch(incValuesTC(count))*/
        // count + 1 так как на дисплее на 1 больше чем в ЛС всегда = синхронизируем
        /*dispatch(incValuesTC(count + 1))*/

            // 2 способ с использованеим getState
        dispatch(incValuesTC(count))

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
