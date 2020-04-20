import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
            case 'mul':
                this.setState( ( prevState ) => { return { counter: prevState.counter * value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAdditionCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractionCounter}  />
                <CounterControl label="Multiply 10" clicked={this.props.onMultiplicationCounter}  />
                <hr />
                <button onClick={this.props.onStoreResults}>Store Results</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li onClick={this.props.onDeleteResults}>{strResult}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResults: state.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({
            type: 'INCREMENT'
        }),
        onDecrementCounter: () => dispatch({
            type: 'DECREMENT'
        }),
        onAdditionCounter: () => dispatch({
            type: 'ADDITION'
        }),
        onSubtractionCounter: () => dispatch({
            type: 'SUBTRACTION', val: 5
        }),
        onMultiplicationCounter: () => dispatch({
            type: 'MULTIPLICATION', val: 10
        }),
        onStoreResults: () => dispatch({
            type: 'STORE_RESULTS'
        }),
        onDeleteResults: () => dispatch({
            type: 'DELETE_RESULTS'
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);