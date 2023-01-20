import React, {FC} from "react";
import s from "../App.module.css";

type DisplayPropsType = {
    count: number
    maxValue: number
}

export const Display: FC<DisplayPropsType> = ({count, maxValue}) => {
    return (
        <div className={s.count}>
            <div
                className={count === maxValue ? s.red : ' '}>
                {count}
            </div>
        </div>
    );
};
