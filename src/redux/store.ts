import {combineReducers, legacy_createStore,applyMiddleware} from 'redux';
import {counterReducer} from './counter-reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    counter: counterReducer,
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))


export type AppRootStateType = ReturnType<typeof rootReducer>

// типизация store
type AppStoreType = typeof store