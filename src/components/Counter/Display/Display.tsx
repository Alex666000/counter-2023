import React, {FC} from "react";
import s from "./Display.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/store";

type Display = {}

export const Display: FC<Display> = () => {
    const startInputValue = useSelector<AppRootStateType, number>(state => state.counter.startInputValue)
    const count = useSelector<AppRootStateType, number>(state => state.counter.count)

    const maxInputValue = useSelector<AppRootStateType, number>(state => state.counter.maxInputValue)


    return (
        <div className={count === maxInputValue ? s.red : " "}>
            <span>{count ? count : startInputValue}</span>
        </div>
    );
};

