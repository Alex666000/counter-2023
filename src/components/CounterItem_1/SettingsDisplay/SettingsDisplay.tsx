import React, {ChangeEvent, FC, useState} from "react";
import s from "../../../App/App.module.css";

type DisplayPropsType = {
    setIsDisabled: (value: boolean) => void
}

export const SettingsDisplay: FC<DisplayPropsType> = ({setIsDisabled}) => {
    const [maxInputValue, setMaxInputValue] = useState(5)
    const [startInputValue, seStartInputValue] = useState(0)

    const settingsMaxInput = 0
    const settingsStartInput = 0

    const onMaxValueInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIsDisabled(false)
        setMaxInputValue(Number(e.currentTarget.value))
    }

    const onStartValueInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIsDisabled(false)
        seStartInputValue(Number(e.currentTarget.value))
    }


    return (
        <div className={s.displayContainer}>
            <div className={s.displayValue}>
                <span className={s.value}>max value: </span>

                <input type="number"
                       className={s.input}
                       value={maxInputValue}
                       onChange={onMaxValueInputChange}

                />
            </div>
            <div className={s.displayValue}>
                <span className={s.value}>start value: </span>

                <input type="number"
                       className={s.input}
                       value={startInputValue}
                       onChange={onStartValueInputChange}
                />
            </div>

        </div>
    );
};

// className={count === maxValue ? s.red : ' '}>