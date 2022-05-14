import {loadFromLocalStorage} from "../utils/localStorage-utils";

const initialState = {
    startValue: loadFromLocalStorage("StratCounterValue"),
    maxValue: loadFromLocalStorage("MaxCounterValue"),
    inputValue: 0
}

export type initialStateType = {
    startValue: number
    maxValue: number
    inputValue: number
}
export const counterReducer = (state: initialStateType = initialState, action: counterReducerType): initialStateType => {
    switch (action.type) {
        case "SET_START_VALUE":
            return {...state, startValue: action.value}
        case "SET_MAX_VALUE":
            return {...state, maxValue: action.value}
        case "SET_COUNTER":
            return {...state, inputValue: action.value}
        case "INC-BTN":
            return {
                ...state,  inputValue: action.inputValue <= action.maxValue ? action.inputValue+1 : action.maxValue
            }
        case "RESET-BTN":
            return {
                ...state, inputValue: action.startValue
            }

        default: return state

    }
}


type counterReducerType = setScreenValueType | setMaxValueType | setCounterType | incBtnType | resetBtnType
type setScreenValueType = ReturnType<typeof SetStartValueAC>
type setMaxValueType = ReturnType<typeof SetMaxValueAC>
type setCounterType = ReturnType<typeof SetCounterAC>
type incBtnType = ReturnType<typeof incBtnAC>
type resetBtnType = ReturnType<typeof resetBtnAC>

export const SetStartValueAC = (value: number) => {
    return {
        type: "SET_START_VALUE",
        value
    } as const
}

export const SetMaxValueAC = (value: number) => {
    return {
        type: "SET_MAX_VALUE",
        value
    } as const
}
export const SetCounterAC = (value: number) => {
    return {
        type: "SET_COUNTER",
        value
    } as const
}
export const incBtnAC = (inputValue: number, maxValue: number) => {
    return {
        type: "INC-BTN",
        inputValue,
        maxValue
    } as const
}
export const resetBtnAC = (startValue: number) => {
    return {
        type: "RESET-BTN",
        startValue,

    } as const
}


