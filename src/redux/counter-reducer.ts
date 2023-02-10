const initialState = {
    editMode: false,
    isDisabled: false,
    startInputValue: 0,
    maxInputValue: 5,
    count: 0,

}
// reducer
export const counterReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-EDIT-MODE":
            return {...state, editMode: action.editMode}
        case "SET-IS-DISABLED":
            return {...state, isDisabled: action.isDisabled}
        case "SET-COUNT":
            return {...state, count: action.startInputValue}
        case "SET-MAX-INPUT-VALUE":
            return {...state, maxInputValue: action.value}
        case "SET-START-INPUT-VALUE":
            return {...state, startInputValue: action.value}
        case "INCREMENT-COUNT":
            return {...state, count: action.count}
        case "RESET-COUNTER-VALUE":
            return {...state, count: action.counterValue}
        default:
            return state
    }
}
// actions
export const incrementCountAC = (count: number) => ({type: "INCREMENT-COUNT", count} as const)
export const resetCountValueAC = (counterValue: number) => ({type: "RESET-COUNTER-VALUE", counterValue} as const)
export const setEditModeCounterAC = (editMode: boolean) => ({type: "SET-EDIT-MODE", editMode} as const)
export const setIsDisabledAC = (isDisabled: boolean) => ({type: "SET-IS-DISABLED", isDisabled} as const)
export const setCountAC = (startInputValue: number) => ({type: "SET-COUNT", startInputValue} as const)
export const setMaxInputValueAC = (value: number) => ({type: "SET-MAX-INPUT-VALUE", value} as const)
export const setStartInputValueAC = (value: number) => ({
    type: "SET-START-INPUT-VALUE",
    value
} as const)

// types
type InitialStateType = typeof initialState

export type SetEditModeCounterActionType = ReturnType<typeof setEditModeCounterAC>;
export type SetIsDisabledActionType = ReturnType<typeof setIsDisabledAC>;
export type SetCountActionType = ReturnType<typeof setCountAC>;
export type SetMaxInputValueActionType = ReturnType<typeof setMaxInputValueAC>;
export type SetStartInputValueActionType = ReturnType<typeof setStartInputValueAC>;
export type IncrementCountActionType = ReturnType<typeof incrementCountAC>;
export type ResetCountValueActionType = ReturnType<typeof resetCountValueAC>;

type ActionsType = | SetEditModeCounterActionType | SetIsDisabledActionType
    | SetCountActionType | SetMaxInputValueActionType
    | SetStartInputValueActionType | IncrementCountActionType | ResetCountValueActionType
