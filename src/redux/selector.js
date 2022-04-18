import { get } from "lodash";
export const getEmployee =  (state) =>  get(state,"employee.results") 