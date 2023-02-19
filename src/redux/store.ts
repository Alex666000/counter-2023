import {combineReducers, legacy_createStore, applyMiddleware} from "redux";
import {counterReducer} from "./counter-reducer";
import thunk from "redux-thunk";
import {loadState, saveState} from "../utils/localStorage-utils";

const rootReducer = combineReducers({
    counter: counterReducer,
})

// для LS: loadState( - будем получать сюда данные с ЛС
export const store = legacy_createStore(rootReducer, loadState(), applyMiddleware(thunk))


export type AppRootStateType = ReturnType<typeof rootReducer>

// типизация store
type AppStoreType = typeof store

// для LS - так супер правильно делать по Абрамову - без санок и тд просто:
//   store - издатель а subscribe - слушатель - при изменении стора код этот будет отрабатывать
store.subscribe(() => {
    // каждый раз когда стейт меняется записываем значения нашего счетчика
    saveState({
        counter: store.getState().counter
    })
    localStorage.setItem("app-state", JSON.stringify(store.getState()))
    /*  localStorage.setItem("value", JSON.stringify(store.getState().counter.count))  */
    // смотрим в ЛС в браузер все работает
    // делаем для получения значения из ЛС
})