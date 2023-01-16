import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react"
import s from "./CustomButton.module.css"

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type CustomButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
    name: string
    isDisabled: boolean
    onClick: () => void
}

const CustomButton: React.FC<CustomButtonPropsType> = (
    {
        red, className, name, isDisabled, onClick,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = `${s.button} ${red ? s.red : s.default} ${className}`

    return (
        <button
            className={finalClassName}
            name={name}
            disabled={isDisabled}
            onClick={() => onClick()}>

            {name}
        </button>
    )
}

export {CustomButton}
