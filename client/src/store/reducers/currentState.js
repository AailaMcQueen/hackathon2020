const defaultState = {
    isActive: false,
    data: null
}

export default function currentState(state = defaultState, action){
    switch (action.type) {
        case 'RESET':
            return {
                isActive: false,
                data: null
            }
        case 'SET':
            return {
                isActive: true,
                data: action.data
            } 
        default:
            return state
    }
  }