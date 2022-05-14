import classes from './Counter.module.css';
import {ChangeEvent} from "react";

type setCounterPropsType = {
    onChangeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
    onChagheMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    setCounter: () => void
    startValue: number
    maxValue: number
}

const SetCounter = (props: setCounterPropsType) => {
    const onCangeStartValueHandler = (e:ChangeEvent<HTMLInputElement>) => {
        props.onChangeStartValue(e)
    }
    const onChagheMaxValueHandler = (e:ChangeEvent<HTMLInputElement>) => {
        props.onChagheMaxValue(e)
    }
    const setCounterHandler = () => {
        props.setCounter()
    }

    const maxVlaueClassesConditions = props.maxValue < 0 ? classes.inputErroeClass : (props.startValue >= props.maxValue ? classes.inputErroeClass : classes.inputClass)
    const startVlaueClassesConditions = props.maxValue < 0 ? classes.inputErroeClass : (props.startValue >= props.maxValue ? classes.inputErroeClass : classes.inputClass)

    return <div className={classes.counter}>
        <div className={`${classes.mainScreenClass}`}>
            <label className={classes.labelClassName}>max value: </label>
            <input onChange={(e) => onChagheMaxValueHandler(e)} className={maxVlaueClassesConditions} value={props.maxValue}
                   type="number"/>
            <label className={classes.labelClassName}>start value</label>
            <input onChange={(e) => onCangeStartValueHandler(e)} className={startVlaueClassesConditions}
                   value={props.startValue} type="number"/>
        </div>
        <div className={classes.buttonsClass}>
            <button onClick={setCounterHandler}
                    disabled={props.startValue < 0 ? true : (props.startValue >= props.maxValue ? true : false)}
                    className={classes.btnClass}>Set
            </button>
        </div>
    </div>
}

export default SetCounter;
