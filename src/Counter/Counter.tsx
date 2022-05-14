import classes from './Counter.module.css';

type counterPropsType = {
    incBtn: () => void
    resetBtn : () => void
    inputValue: number
    startValue: number
    maxValue: number
}

export const Counter = (props: counterPropsType) => {
    const setDisabletBtn = props.startValue >= props.maxValue ||
        props.startValue< 0 ||
        props.inputValue === 0

    function setScreenValue() {

        if(props.startValue === 0 && props.maxValue === 0) {
            return <span className={classes.screenMessage}>enter value and press "set"</span>
        } else if(props.startValue < 0 || props.maxValue <= props.startValue) {
            return <span className={classes.screenErrorMessage}>incorect value</span>
        } else if (props.inputValue === 0) {
            return <span className={classes.screenMessage}>enter value and press "set"</span>
        } else {
            return props.inputValue
        }
    }
    const incBtnHandler = () => props.incBtn()

    const resetBtnHandler = () => props.resetBtn()

    return <div className={classes.counter}>
        <div
            className={`${classes.mainScreenClass} ${props.inputValue < props.maxValue ? classes.numClass : classes.maxNumClass}`}>{setScreenValue()}</div>
        <div className={classes.buttonsClass}>
            <button className={classes.btnClass} disabled={props.inputValue === props.maxValue || setDisabletBtn}
                    onClick={incBtnHandler}>inc
            </button>
            <button className={classes.btnClass} disabled={setDisabletBtn}
                    onClick={ resetBtnHandler}>reset
            </button>
        </div>
        <span className={classes.noticeClass}>* Press "Alt + reset" to completely reset the counter</span>
    </div>
}
