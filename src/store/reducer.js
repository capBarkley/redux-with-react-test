const initialState = {
    count: 0,
    history: []
}

const reducer = (state = initialState, action) => {
    const newState = {...state};

    switch(action.type) {
        case 'UP': 
            return {
                ...state,
                count: state.count + action.value,
                history: state.history.concat({id: Math.random(), count: state.count + action.value}) 
            };
        
        case 'DOWN': 
            return {
                ...state,
                count: state.count - action.value,
                history: state.history.concat({id: Math.random(), count: state.count - action.value}) 
            };

        case 'CLEAR':
            return {
                ...state,
                count: 0
            }
        
        case 'RESET':
            return {
                count: 0,
                history: []
            }
        
        case 'DEL':
            return {
                ...state,
                history: state.history.filter(el => el.id !== action.key)
            }
    }

    return newState;
}

export default reducer;