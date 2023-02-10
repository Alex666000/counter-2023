import React, {useEffect, useState} from "react";
import s from "./App.module.css";
import {WithSettingsCounter} from "../components/WithSettingsCounter/WithSettingsCounter";
import {Counter} from "../components/Counter/Counter";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";

const App = () => {
    const editMode = useSelector<AppRootStateType,boolean>(state => state.counter.editMode)

    return (
        <div className={s.wrapperCounters}>
            <div className={s.wrapperItem}>
                {editMode
                    ? <WithSettingsCounter />
                    : <Counter />
                }
            </div>
        </div>
    );
};

export default App;

