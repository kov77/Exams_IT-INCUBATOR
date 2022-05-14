import React, {ChangeEvent} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import SetCounter from "./Counter/SetCounter";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/redux-store";
import {incBtnAC, resetBtnAC, SetCounterAC, SetMaxValueAC, SetStartValueAC} from "./redux/counter-reducer";


function App() {

    const startValue = useSelector<AppStateType, number>(state => state.counter.startValue);
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue);
    const inputValue = useSelector<AppStateType, number>(state => state.counter.inputValue);
    const dispatch = useDispatch()

    const setCounter = () => {
        dispatch(SetCounterAC(startValue))

    }

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(SetStartValueAC(+e.currentTarget.value))

    }
    const onChagheMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(SetMaxValueAC(+e.currentTarget.value))
    }



    const incBtn = () => {
        dispatch(incBtnAC(inputValue, maxValue))
    }

    const resetBtn = () => {
        dispatch(resetBtnAC(startValue))
    }


    return (
        <div className="App">
            <SetCounter onChangeStartValue={onChangeStartValue}
                        onChagheMaxValue={onChagheMaxValue}
                        setCounter={setCounter}
                        startValue={+startValue}
                        maxValue={+maxValue}
            />
            <Counter
                incBtn={incBtn}
                resetBtn={resetBtn}
                inputValue={+inputValue}
                startValue={+startValue}
                maxValue={+maxValue}
                />

        </div>
    );
}

export default App;
