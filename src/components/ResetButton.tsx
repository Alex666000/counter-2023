import React from "react";

type ResetButtonPropsType = {
    count: number
    resetName: string
    isDisabled: boolean
    onResetCountClickHandler: () => void
}

export const ResetButton = (props: ResetButtonPropsType) => {
    return (
        <button
            disabled={props.isDisabled}
            onClick={ () => {props.onResetCountClickHandler()} }>
            {props.resetName}
        </button>
    )
};
