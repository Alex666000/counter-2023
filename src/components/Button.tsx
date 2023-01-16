import React, {FC} from "react";


type IncButtonPropsType = {
    name: string
    isDisabled: boolean
    onClick: () => void
}

export const Button: FC<IncButtonPropsType> = ({name,isDisabled,onClick}) => {

    return (
        <button
            name={name}
            disabled={isDisabled}
            onClick={ () => onClick() }>{name}</button>
    )
};
