const defaultState = {
    isActive: false,
    data: null
}

export default function currentState(state = defaultState, action){
    switch (action.type) {
        case 'RESET':
            return state
        case 'SET':
            return {
                isActive: true,
                data: action.data
            } 
        default:
            return state
    }
  }