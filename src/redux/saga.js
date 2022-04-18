import { all } from 'redux-saga/effects';
import EmployeeSaga from './employee/saga'
export default function* appSaga(){
   yield all([EmployeeSaga()])
}
