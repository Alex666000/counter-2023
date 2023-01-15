import React from "react";
import s from "./App.module.css";


type IncButtonPropsType = {
    incName: string
    isDisabled: boolean
    onIncCountClickHandler: () => void
}

export const IncButton = (props: IncButtonPropsType) => {

    return (
        <button
            disabled={props.isDisabled}
            onClick={ () => {props.onIncCountClickHandler()} }>{props.incName}</button>
    )
};
