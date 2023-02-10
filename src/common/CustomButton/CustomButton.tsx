import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC} from "react"
import s from "./CustomButton.module.css"

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type CustomButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
    name: string
    maxInputValue?: number
    startInputValue?: number
    count?: number
    isDisabled?: boolean
    isDisabledCount?: boolean
    onClick: () => void
}

const CustomButton: FC<CustomButtonPropsType> = (
    {
        red,
        className,
        name, isDisabled,
        onClick, isDisabledCount,
        startInputValue,
        count,
        maxInputValue,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = `${count === maxInputValue} || ${count && count <= 0} 
    ? ${s.errorCount} 
    : ${s.button} ${red ? s.red : s.default} ${className}`

    return (
        <button
            className={finalClassName}
            name={name}
            disabled={isDisabled || count === 5}
            onClick={onClick}
        >
            <span className={s.errorCount}>{name}</span>
        </button>
    )
}

export {CustomButton}
