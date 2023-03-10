import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from 'react'
import s from './CustomInput.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
// typesProps:
type SuperInputTextPropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
}
// present component:
const CustomInput: React.FC<SuperInputTextPropsType> = (
    {
        type,
        title,// достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeText,
        onKeyPress, onEnter,
        error, className, spanClassName,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange // если есть пропс onChange
        && onChange(e) // то передать ему е (поскольку onChange не обязателен)
// свой универсальный пропс:
        onChangeText && onChangeText(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);

        onEnter // если есть пропс onEnter
        && e.key === 'Enter' // и если нажата кнопка Enter
        && onEnter() // то вызвать его
    }

    const finalSpanClassName = `${s.error} ${spanClassName ? spanClassName : ''}`
    const finalInputClassName = `${error ? s.errorInput : s.superInput}  ${className}` // need to fix with (?:) and s.superInput

    return (
        <>
            <span className={s.value}>{title}: </span>
            <input
                type={'number'}
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                className={finalInputClassName}

                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
            {error && <span className={finalSpanClassName}>{error}</span>}
        </>
    )
}

export default CustomInput
