import React, {FC} from "react";
import s from "../../../App/App.module.css";

type Display_2_PropsType = {
    count: number
}

export const Display_2: FC<Display_2_PropsType> = ({count}) => {
    return (
        <div className={s.display}>
            {count}
        </div>
    );
};

// className={count === maxValue ? s.red : ' '}>