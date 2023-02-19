import {AppRootStateType} from "../redux/store";
// подгружаем с ЛС значения
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem("app-state");
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};
//для сохранения стейта
export const saveState = (state: AppRootStateType) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('app-state', serializedState);
    } catch {
        // ignore write errors
    }
};