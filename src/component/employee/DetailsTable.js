import React, {Component} from 'react'
import {Table,Icon} from 'semantic-ui-react'
//import { deleteEmployee } from '../../redux/employee/saga';

const TableHeader = () => {
    return (
            <Table.Header>
                <Table.Row>
                <Table.HeaderCell>Employee ID</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Address</Table.HeaderCell>
                <Table.HeaderCell>Action</Table.HeaderCell>
            
                </Table.Row>
                </Table.Header>
    ); 
}

const TableBody = props => {
    const {employee, editEmployee,deleteEmployee} = props;

    const rows = props.employee.map((row, index) => {
        return (
            <Table.Row>
            <Table.Cell>{row.id}</Table.Cell>
            <Table.Cell>{row.name}</Table.Cell>
            <Table.Cell>{row.email}</Table.Cell>
            <Table.Cell Creatine>{row.address}</Table.Cell>
            <Table.Cell><Icon name="edit" onClick={() => props.editEmployee(row.id)}></Icon>
                    <Icon name="trash" onClick={() => props.deleteEmployee(row.id)}></Icon></Table.Cell>
          </Table.Row>
        );
    });

    return (
        <Table.Body>
            {rows}
        </Table.Body>
    );
}

const DetailsTable=(props)=>{
        //const characterData = this.props.characterData;
        const {employee, editEmployee,deleteEmployee} = props;

        return (
            <Table celled>
                <TableHeader />
                <TableBody employee={employee} editEmployee={editEmployee} deleteEmployee={deleteEmployee}/>
                </Table>
        );
    
}

export default DetailsTable