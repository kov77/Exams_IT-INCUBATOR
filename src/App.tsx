import React, {ChangeEvent, MouseEvent, useState} from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import SetCounter from "./Counter/SetCounter";


function App() {

    let startValueFromLocalStorage = JSON.parse(localStorage.getItem("StratCounterValue") !)
    let maxValueFromLocalStorage = JSON.parse(localStorage.getItem("MaxCounterValue") !)

    let [startValue, setStartValue]: any = useState(startValueFromLocalStorage)
    let [maxValue, setMaxValue]: any = useState(maxValueFromLocalStorage)
    let [inputValue, setInputValue] = useState(startValue)



    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(e.currentTarget.value)

    }
    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.value)
    }

    const setCounterOnClickHandler = () => {
        localStorage.setItem("StratCounterValue", JSON.stringify(startValue))
        localStorage.setItem("MaxCounterValue", JSON.stringify(maxValue))
        setInputValue(startValue)

    }

    const incBtnHandler = () => {
        inputValue++
        inputValue <= maxValue ? setInputValue(inputValue) : inputValue = maxValue
    }

    const resetBtnHandler = (e: MouseEvent<HTMLButtonElement>) => {
        setInputValue(startValue)
        if(e.altKey === true) {
            localStorage.clear()
            startValue = 0
            setInputValue(startValue)
            setStartValue(e.currentTarget.value)
            setMaxValue(e.currentTarget.value)
        }
    }


    return (
        <div className="App">
            <SetCounter onChangeStartValueHandler={onChangeStartValueHandler}
                        onChagheMaxValueHandler={onChangeMaxValueHandler}
                        setCounterOnClickHandler={setCounterOnClickHandler}
                        startValue={+startValue}
                        maxValue={+maxValue}
            />
            <Counter startValue={+startValue}
                     maxValue={+maxValue}
                     incBtnHandler={incBtnHandler}
                     resetBtnHandler={resetBtnHandler}
                     inputValue={+inputValue}/>

        </div>
    );
}

export default App;
