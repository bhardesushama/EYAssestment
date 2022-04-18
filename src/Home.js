

import { Container, Divider, Button } from 'semantic-ui-react';
import MainHeader from './component/employee/MainHeader'
import { useState, useEffect } from 'react';
import EmplyoeeForm from './component/employee/EmployeeFrom';
import { useSelector, useDispatch } from 'react-redux'
import ButtonAdd from './component/employee/ButtonAdd';
import DetailsTable from './component/employee/DetailsTable';
import {
  loadEmployee,
  addEmployeeAction,
  editEmployeeAction,
  deleteEmployeeAction
} from './redux/employee/actions';


function Home() {
  const employee = useSelector(state => state.employee)
  const dispatch = useDispatch()

  const [isEdit, setEdit] = useState(false);
  const [currentEmp, setCurrentEmp] = useState({});
  const [empId, setId] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    dispatch(loadEmployee())
  }, []);


  const addEmployee = (payload) => {
    if (isEdit) {
      const emplyoees = employeeDetailsData.filter(x => x.id === empId);
      const empData = emplyoees.length ? emplyoees[0] : null;
      if (currentEmp) {
        setCurrentEmp(empData);
        //setIsOpen(true);
      }
      const { id, name, email, address } = payload;
      const index = employeeDetailsData.findIndex(x => x.id === empId);
      let newemployee = employeeDetailsData;

      if (index > -1) {
        newemployee[index].name = name;
        newemployee[index].email = email;
        newemployee[index].address = address;
      }
      //return newemployee
      dispatch(editEmployeeAction(newemployee))
    }
    else {
      dispatch(addEmployeeAction(employeeDetailsData.concat(payload)))
    }
    setIsOpen(false)
    resetEntry()

  }


  const editEmployee = (id) => {
    setId(id)
    const Emplyoees = employeeDetailsData.filter(x => x.id == id);
    const empData = Emplyoees.length ? Emplyoees[0] : null;
    if (empData) {
      setCurrentEmp(empData);
      setIsOpen(true);
      setEdit(true)
    }

  }

  const deleteEmployee = (employeeId) => {

    const newemployee = employeeDetailsData.filter(x => x.id !== employeeId)
    dispatch(deleteEmployeeAction(newemployee))
  }

  const resetEntry = () => {
    setIsOpen(false);
    setCurrentEmp('');
    setId('')
  }

  const updateEmployee = () => {
    const payload = {

    }

    dispatch(editEmployeeAction(payload))
    resetEntry()
  }

  const employeeDetailsData = employee?.results


  const handleAdd = () => {
    setEdit(false)
    setIsOpen(true)
  }
  return (
    <Container>

      <MainHeader size="h1" title="Employee Dashboard" />
      <ButtonAdd handleAdd={handleAdd}></ButtonAdd>
      {isOpen ? <EmplyoeeForm currentEmp={currentEmp}  isEdit={isEdit} addEmployee={addEmployee}></EmplyoeeForm> : <>
        <DetailsTable employee={employeeDetailsData} editEmployee={editEmployee} deleteEmployee={deleteEmployee} ></DetailsTable>

      </>}
    </Container >
  );
}

export default Home;
