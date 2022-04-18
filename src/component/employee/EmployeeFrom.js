import React, { useState } from 'react';


import { Button, Card, CardActions, CardContent, CardHeader, Checkbox, FormControl, FormControlLabel, FormLabel, Grid, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@material-ui/core';
import {  Formik, Field, Form, ErrorMessage } from 'formik';


import { useDispatch } from 'react-redux';

const EmployeeFrom = (props) => {
  const dispatch = useDispatch()
  const [error, setError] = useState({ field: '', msg: '' })
  const [formValues, setFormValues] = useState(props.isEdit ? props.currentEmp :
    {
      id: '',
      name: '',
      email: '',
      address: ''
    })

  // const validationSchema = Yup.object().shape({

  //   id: Yup.string()
  //     .required('Employee ID is required'),
  //   name: Yup.string().required('Name is required'),
  //   email: Yup.string()
  //     .email('Email is invalid')
  //     .required('Email is required'),

  //   address: Yup.string(),
  // });

  const handleSubmit = (event) => {
    event.preventDefault();
    //dispatch(editEmployeeAction(formValues))
    props.addEmployee(formValues)
  }
  const handleChange = (e) => {
    //const { formValues } = this.state;
    const { name, value } = e.target;
    validateForm(name)
    setFormValues(prevState => ({
      ...prevState,
      [name]: value
    }));

  }
  const validateForm = (name) => {
    switch (name) {
      // case 'id':
      //   if (formValues.id == '') {
      //     setError({field:'id',msg:'Please fill employeeId'})
      //   }
      //   break;
      case 'name':
        if (formValues.id == '') {
          setError({ field: 'id', msg: 'Please fill employeeId' })
        }
        else if (formValues.name == '') {
          setError({ field: 'name', msg: 'Please fill name' })
        }
        break;
      case 'email':
        if (formValues.id == '') {
          setError({ field: 'id', msg: 'Please fill employeeId' })
        }
        else if (formValues.name == '') {
          setError({ field: 'name', msg: 'Please fill name' })
        }
        break;
      case 'address':
        if (formValues.id == '') {
          setError({ field: 'id', msg: 'Please fill employeeId' })
        }
        else if (formValues.name == '') {
          setError({ field: 'name', msg: 'Please fill name' })
        }
        else {
          if (formValues.email == '') {
            setError({ field: 'email', msg: 'Please fill email' })
          }
          else {
            var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
            if (!regexEmail.test(formValues.email)) {
              setError({ field: 'email', msg: 'Please enter valid email' })
            }
          }
        }
            break;
      default: setError({ field: '', msg: '' })
    }




  }
  // validationSchema={validationSchema} 
  return (
    <Formik initialValues={formValues} onChange={handleChange} >
      <Form onSubmit={handleSubmit}>
        <Card >
          <CardHeader
            title="Employee Details"
          ></CardHeader>
          <CardContent>
            <Grid container direction="column" spacing={4}>

              {/* <Grid item container justify="space-between"  alignItems="center"> */}
              <Grid item xs={4}>
                <div className='form-group'>
                  <Field className='form-control' validate={validateForm} disabled={props.isEdit} label='Employee ID' name="id" value={formValues.id} onChange={handleChange} as={TextField} variant="outlined" fullWidth></Field>
                  {error.field == 'id' && <label>{error.msg}</label>}
                </div>
              </Grid>

              <Grid item xs={4}>
                <div className='form-group'>
                  <Field label='Name' name="name" value={formValues.name} onChange={handleChange} as={TextField} variant="outlined" fullWidth></Field>
                  {error.field == 'name' && <label>{error.msg}</label>}
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className='form-group'>
                  <Field label='Email' name="email" value={formValues.email} onChange={handleChange} as={TextField} variant="outlined" fullWidth></Field>
                  {error.field == 'email' && <label>{error.msg}</label>}
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className='form-group'>
                  <Field label='Address' name="address" value={formValues.address} onChange={handleChange} as={TextField} variant="outlined" fullWidth></Field>
                  <ErrorMessage name="address" component="div" className="invalid-feedback" />
                </div>
              </Grid>
            </Grid>
            {/* </Grid> */}
            <CardActions>
             <Button disabled={!error.msg==''} variant="contained" color="primary" size="large" type="submit">Submit</Button>
            </CardActions>
          </CardContent>
        </Card>





      </Form>
    </Formik >
  );
};
export default EmployeeFrom;