export const LOAD_EMPLOYEE = 'LOAD_EMPLOYEE';
export const LOAD_EMPLOYEE_SUCCESS = 'LOAD_EMPLOYEE_SUCCESS';
export const LOAD_EMPLOYEE_ERROR = 'LOAD_EMPLOYEE_ERROR';

export const LOAD_ADD_EMPLOYEE = "LOAD_ADD_EMPLOYEE";
export const SUCCESS_ADD_EMPLOYEE = "SUCCESS_ADD_EMPLOYEE";
export const ERROR_ADD_EMPLOYEE = "ERROR_ADD_EMPLOYEE";

export const LOAD_EDIT_EMPLOYEE = "LOAD_EDIT_EMPLOYEE";
export const SUCCESS_EDIT_EMPLOYEE = "SUCCESS_EDIT_EMPLOYEE";
export const ERROR_EDIT_EMPLOYEE = "ERROR_EDIT_EMPLOYEE";

export const LOAD_DELETE_EMPLOYEE = "LOAD_DELETE_EMPLOYEE";
export const SUCCESS_DELETE_EMPLOYEE = "SUCCESS_DELETE_EMPLOYEE";
export const ERROR_DELETE_EMPLOYEE = "ERROR_DELETE_EMPLOYEE";

export const loadEmployee = (payload) => ({type:LOAD_EMPLOYEE,payload})
export  const addEmployeeAction = (payload) => ({type:LOAD_ADD_EMPLOYEE,payload})
export  const editEmployeeAction = (payload) => ({type:LOAD_EDIT_EMPLOYEE,payload})
export  const deleteEmployeeAction = (payload) => ({type:LOAD_DELETE_EMPLOYEE,payload})