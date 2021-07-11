import React from 'react'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { incrementCounter, decrementCounter } from '../../Redux/CounterReducer/counterAction'



const Counter = (props) => {
    const { incrementCounter, decrementCounter} = props;
    return (
        <div>
            <Button onClick={incrementCounter} >+</Button>
            <h1> ------- { props.value} ------- </h1>
            <Button onClick={decrementCounter} >-</Button>
            
        </div>
    );
}


const mapStateToProps = state => {
    return {
        value: state.value
    }
}

const mapDispatchToProps = dispatch => ({
    incrementCounter: () => dispatch(incrementCounter()),
    decrementCounter:()=> dispatch(decrementCounter())
    
})

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
