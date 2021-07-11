
import { counterTypes } from './counterTypes'
import {incrementCounter} from './counterAction'


//  first start by defining initial state.

// track a single number with the current value of a counter

const initialState = {
    value: 0,
}



const counterReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case counterTypes.INCREMENT_COUNTER:
            return {
                ...state,
                value: state.value + 1
            }
        case counterTypes.DECREMENT_COUNTER:
            return {
                ...state,
                value: state.value - 1
            }
            
        
        default:
            return state
    }
}


export default counterReducer;