import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC} from "react"
import s from "./CustomButton.module.css"

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type CustomButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
    name: string
    maxInputValue?: number
    count?: number
    isDisabled: boolean
    onClick: () => void
}

const CustomButton: FC<CustomButtonPropsType> = (
    {
        red,
        className,
        name, isDisabled,
        onClick,
        count,
        maxInputValue,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = `${s.button} ${red ? s.red : s.default} ${className}`

    return (
        <button
            className={count === maxInputValue ? s.errorCount : ' '}
            name={name}
            disabled={isDisabled}
            onClick={onClick}
        >
            <span className={s.errorCount}>{name}</span>
        </button>
    )
}

export {CustomButton}
