import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {addToLocalStorage, loadFromLocalStorage} from "../utils/localStorage-utils";

const reducers = combineReducers({
    counter: counterReducer
})


let preloadedState = {};

    preloadedState = {
    startValue: loadFromLocalStorage("StratCounterValue"),
    maxValue: loadFromLocalStorage("MaxCounterValue")
}

const store = createStore(reducers, preloadedState);

store.subscribe(() => {
    addToLocalStorage("StratCounterValue", store.getState().counter.startValue)
    addToLocalStorage("MaxCounterValue", store.getState().counter.maxValue)
})

export type AppStateType = ReturnType<typeof reducers>
export default store

// @ts-ignore
window.store = store;
