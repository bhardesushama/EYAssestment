import { call, put, takeLatest } from 'redux-saga/effects';
import {
    LOAD_ADD_EMPLOYEE, ERROR_ADD_EMPLOYEE, SUCCESS_ADD_EMPLOYEE,
    LOAD_DELETE_EMPLOYEE, SUCCESS_DELETE_EMPLOYEE, ERROR_DELETE_EMPLOYEE,
    LOAD_EDIT_EMPLOYEE, ERROR_EDIT_EMPLOYEE, SUCCESS_EDIT_EMPLOYEE,
    LOAD_EMPLOYEE, LOAD_EMPLOYEE_SUCCESS, LOAD_EMPLOYEE_ERROR
} from './actions';
import { getEmployeeData} from './query';
    


export function* loadEmployee() {
  
    try {
        const results = yield call(getEmployeeData)
        yield put({ type: LOAD_EMPLOYEE_SUCCESS, results })
    } catch (error) {
        yield put({ type: LOAD_EMPLOYEE_ERROR, error })
    }
}
export function* addEmployee(payload) {
    try {
        const results = payload?.payload
        yield put({ type: SUCCESS_ADD_EMPLOYEE, results })
    } catch (error) {
        yield put({ type: ERROR_ADD_EMPLOYEE, error: error })
    }
}


export function* deleteEmployee(payload ) {
    try {
        const results=payload.payload
        yield put({ type: SUCCESS_DELETE_EMPLOYEE, results })
    } catch (error) {
        yield put({ type: ERROR_DELETE_EMPLOYEE, error: error })
    }
}


export function* editEmployee(payload ) {
    try {
       // const results = yield call(updateEmployeeData(payload))
     
        const results=payload.payload
        yield put({ type: SUCCESS_EDIT_EMPLOYEE, results })
    } catch (error) {
        yield put({ type: ERROR_EDIT_EMPLOYEE, error: error })
    }
}



export default function* employeesSaga() {
    yield takeLatest(LOAD_EMPLOYEE, loadEmployee)
    yield takeLatest(LOAD_ADD_EMPLOYEE, addEmployee)
    yield takeLatest(LOAD_DELETE_EMPLOYEE, deleteEmployee)
    yield takeLatest(LOAD_EDIT_EMPLOYEE, editEmployee)
}