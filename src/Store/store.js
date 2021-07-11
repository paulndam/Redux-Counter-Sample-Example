import { createStore } from "redux";
import counterReducer from '../Redux/CounterReducer/counterReducer'


export const store = createStore(counterReducer)


export default store