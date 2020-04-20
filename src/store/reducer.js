const initialState = {
    counter: 0,
    results: []
}
const reducer = (state = initialState, action) => {
    // if(action.type === 'INCREMENT') {
    //     return {
    //         counter: state.counter + 1
    //     }
    // } else if(action.type === 'DECREMENT') {
    //     return {
    //         counter: state.counter - 1
    //     }
    // } else if(action.type === 'ADDITION') {
    //     return {
    //         counter: state.counter + 5
    //     }
    // } else if(action.type === 'SUBTRACTION') {
    //     return {
    //         counter: state.counter - action.val
    //     }
    // } else if(action.type === 'MULTIPLICATION') {
    //     return {
    //         counter: state.counter * action.val
    //     }
    // }

//---------OR-----------

    switch(action.type) {
        case 'INCREMENT':
            const newState = Object.assign({}, state); //Coping the state in new satte
            newState.counter = state.counter + 1;
            return newState 
        case 'DECREMENT': 
            return {
                ...state, //Here doing the same using spread operator (Copy the state)
                counter: state.counter - 1
            }
        case 'ADDITION': 
            return {
                ...state,
                counter: state.counter + 5
            }
        case 'SUBTRACTION': 
            return {
                ...state,
                counter: state.counter - action.val
            }
        case 'MULTIPLICATION': 
            return {
                ...state,
                counter: state.counter * action.val
            }
        case 'STORE_RESULTS':
            return {
                ...state,
                results: state.results.concat(state.counter)
            }
        case 'DELETE_RESULTS': 
            return {
                ...state,
                results: state.results.concat(state.counter)
            }
    }

    return state;
} 

export default reducer;