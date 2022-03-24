import classes from './Counter.module.css';
import { useState} from "react";

const Counter = () => {

    let[inputValue, setInputValue] = useState(0)

    const incBtnHandler = () => {
        inputValue++
        inputValue <= 5 ? setInputValue(inputValue) : inputValue = 5
    }

    const resetBtnHandler = () => {
        setInputValue(0)
    }



    return <div className={classes.counter}>
        <div className={inputValue < 5 ? classes.numClass : classes.maxNumClass}>{inputValue}</div>
        <div className={classes.buttonsClass}>
            <button className={classes.btnClass} disabled={inputValue === 5} onClick={incBtnHandler}>inc</button>
            <button className={classes.btnClass} disabled={inputValue === 0} onClick={resetBtnHandler}>reset</button>
        </div>
    </div>
}

export default Counter;
