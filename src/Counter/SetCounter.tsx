import classes from './Counter.module.css';


const SetCounter = (props: any) => {

    // console.log(typeof(props.startValue))
    // console.log(props.maxValue)

    const maxVlaueClassesConditions = props.maxValue < 0 ? classes.inputErroeClass : (props.startValue >= props.maxValue ? classes.inputErroeClass : classes.inputClass)
    const startVlaueClassesConditions = props.maxValue < 0 ? classes.inputErroeClass : (props.startValue >= props.maxValue ? classes.inputErroeClass : classes.inputClass)

    return <div className={classes.counter}>
        <div className={`${classes.mainScreenClass}`}>
            <label className={classes.labelClassName}>max value: </label>
            <input onChange={props.onChagheMaxValueHandler} className={maxVlaueClassesConditions} value={props.maxValue} type="number"/>
            <label className={classes.labelClassName}>start value</label>
            <input onChange={props.onChangeStartValueHandler} className={startVlaueClassesConditions} value={props.startValue} type="number"/>
        </div>
        <div className={classes.buttonsClass}>
            <button onClick={props.setCounterOnClickHandler} disabled={props.startValue < 0 ? true : (props.startValue >= props.maxValue ? true : false)} className={classes.btnClass} >Set</button>
        </div>
    </div>
}

export default SetCounter;
