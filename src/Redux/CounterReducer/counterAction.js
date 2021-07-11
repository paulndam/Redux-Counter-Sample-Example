import { counterTypes } from "./counterTypes";

export const incrementCounter = (count) => ({
    type: counterTypes.INCREMENT_COUNTER,
    payload:count,
})

export const decrementCounter = (count) => ({
    type: counterTypes.DECREMENT_COUNTER,
    payload:count,
})