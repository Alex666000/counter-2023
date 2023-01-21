import React, {FC} from "react";
import s from "../Display_2/Display_2.module.css";

type Display_2_PropsType = {
    count: number
    maxValue: number
}

export const Display_2: FC<Display_2_PropsType> = ({count, maxValue}) => {
    return (
        <div className={count === maxValue ? s.red : ' '}>
            {count}
        </div>
    );
};

// className={count === maxValue ? s.red : ' '}>