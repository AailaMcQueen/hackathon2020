const defaultState = {
    isActive: false,
    formData: null,
    filesCSV: null
}

export default function currentState(state = defaultState, action){
    switch (action.type) {
        case 'RESET':
            return {
                isActive: false,
                formData: null,
                filesCSV: null
            }
        case 'SET':
            return {
                isActive: true,
                formData: action.formData,
                filesCSV: action.filesCSV
            } 
        default:
            return state
    }
  }