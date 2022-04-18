
import {
    LOAD_ADD_EMPLOYEE,
    SUCCESS_ADD_EMPLOYEE,
    ERROR_ADD_EMPLOYEE,
    LOAD_EDIT_EMPLOYEE,
    SUCCESS_EDIT_EMPLOYEE,
    ERROR_EDIT_EMPLOYEE,
    LOAD_DELETE_EMPLOYEE,
    SUCCESS_DELETE_EMPLOYEE,
    ERROR_DELETE_EMPLOYEE,
    LOAD_EMPLOYEE,
    LOAD_EMPLOYEE_SUCCESS,
    LOAD_EMPLOYEE_ERROR
} from './actions';



const initialState = {
    results: [],
    message: "",
    isLoading: false
}

function EmployeeReducer(state = initialState, action) {
    const { type } = action;
    switch (type) {
        case LOAD_EMPLOYEE:
            return { ...state, results: [], isLoading: true }
        case LOAD_EMPLOYEE_SUCCESS:
            return { ...state, results: action.results, isLoading: false }
        case LOAD_EMPLOYEE_ERROR:
            return { ...state, error: action.error, isLoading: false }
        case LOAD_ADD_EMPLOYEE:
            return { ...state, isLoading: true }
        case SUCCESS_ADD_EMPLOYEE:
            return { ...state, results: action.results, isLoading: false }
        case ERROR_ADD_EMPLOYEE:
            return { ...state, error: action.error, isLoading: false }
        case LOAD_EDIT_EMPLOYEE:
            return { ...state, isLoading: true }
        case SUCCESS_EDIT_EMPLOYEE:
            return { ...state, results: action.results, isLoading: false }
        case ERROR_EDIT_EMPLOYEE:
            return { ...state, error: action.error, isLoading: false }
        case LOAD_DELETE_EMPLOYEE:
            return { ...state, isLoading: true }
        case SUCCESS_DELETE_EMPLOYEE:
            console.log('sush-reducer delete',action,action.results)
            return { ...state, results: action.results, isLoading: false }
        case ERROR_DELETE_EMPLOYEE:
            return { ...state, error: action.error, isLoading: false }
        default:
            return state;
    }
}
export default EmployeeReducer