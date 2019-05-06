const initialState = {
    count: 0
}

const reducer = (state = initialState, action) => {
    const newState = {...state};

    switch(action.type) {
        case 'UP': 
            newState.count+= action.value;
            break;
        
        case 'DOWN': 
            newState.count-= action.value;
            break;
        case 'CLEAR':
            newState.count = 0;
            break;
    }

    return newState;
}

export default reducer;