import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import EmployeeFullDetails from './employeeFullDetails'
import nike from './assets/Abiola.jpeg'
import rele from './assets/rele.jpeg'
import biddy from './assets/biddy.jpeg'
import tobi from './assets/tobi.jpeg'





const employeeDetails = [
    { jobid: 101, firstname: 'Nike', lastname: 'Abiola', department: 'HR', role: 'Manager', salary: '250000', image: `${nike}`, address: '42, Mortgomery, Yaba', email: 'nike@kmberly.com', dob: 'July 3, 1992' },
    { jobid: 102, firstname: 'Babatunde', lastname: 'Adenrele', department: 'ICT', role: 'Software Developer', salary: '250000', image: `${rele}`, address: '12, Ikota road, Lekki', email: 'babatunde@kmberly.com', dob: 'May 3, 1982' },
    { jobid: 103, firstname: 'Charles', lastname: 'Okocha', department: 'HR', role: 'Manager', salary: '330000', image: `${biddy}`, address: '2, Masha, Surulere', email: 'biddy@kmberly.com', dob: 'July 3, 1992' },
    { jobid: 104, firstname: 'Nike', lastname: 'Ogunbanjo', department: 'ADMIN', role: 'Officer', salary: '72000', image: `${nike}`, address: '42, Abbey road, Onike', email: 'nikky@kmberly.com', dob: 'July 22, 1991' },
    { jobid: 105, firstname: 'Kimberly', lastname: 'Ryan', department: 'ADMIN', role: 'Manager', salary: '200000', image: `${nike}`, address: '75C, Railway Compound, Ebute-Metta', email: 'ryan@kmberly.com', dob: 'April 13, 1994' },
    { jobid: 106, firstname: 'Oluwatobi', lastname: 'Ogunlesi', department: 'SUPPLIES', role: 'Manager', salary: '230000', image: `${tobi}`, address: 'Abule Egba, Lagos', email: 'oluwatobi@kmberly.com', dob: 'January 3, 1988' }

]



const Employee = () => {
    const [details, setDetails] = useState()
    const [jobid, setJobid] =useState('')
    const [firstname, setFirstname] =useState('')
    const [lastname, setLastname] =useState('')
    const [department, setDepartment] =useState('')
    const [role, setRole] =useState('')
    const [salary, setSalary] =useState('')
    const [pension, setPension] =useState('')
    const [value, setValue] = useState()
    const [employee, setEmployee] = useState(employeeDetails)


//  const handleChange = (event) => {
//         setValue({[event.target.name]: event.target.value});
//      }

useEffect(() => {
 var userData = JSON.parse(localStorage.getItem('newEmployee')); 
 setEmployee(userData)
}, [])
    
    const handleSubmit = (event) => {
        const data = { jobid, firstname, lastname, department, role, salary, pension}
        let a = employee; 
       
        a.push(data); 
        setEmployee(a)
        localStorage.setItem('newEmployee', JSON.stringify(employee))
        alert('A name was submitted: ' + data);
        console.log("EMMM ", employee)

        //const data = new FormData(event.target);
    
        // fetch('/api/form-submit-url', {
        //   method: 'POST',
        //   body: data,
        // });
    }

  

    return (
        <div className='text-center'>
            <Navbar />



            <h2>Employees</h2>

            <div class="btn-group my-2 align-items-left mr-lg-4 float-lg-right">
                <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#exampleModal">
                    + Add Employee</button>

            </div>
            {/* Button trigger modal */}


            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Employee details</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group row">
                                    <label for="exampleInputEmail1" className='col-sm-3 col-form-label text-left'>JOB ID</label>
                                    <div class="col-sm-9"><input type="text" name='jobid' value={jobid}   onChange={e => {setJobid(e.target.value)
                                }} required class="form-control" id="exampleInputJobID1" aria-describedby="emailHelp" placeholder="Enter Job ID" /></div>
                                </div>
                                <div class="form-group row">
                                    <label for="exampleInputPassword1" className='col-sm-3 col-form-label text-left'>Firstname</label>
                                    <div class="col-sm-9"><input type="text" name="firstname" value={firstname} onChange={e => {setFirstname(e.target.value)}}
                                        class="form-control" id="exampleInputPassword1" placeholder="Enter Firstname" /></div>
                                </div>
                                <div class="form-group row">
                                    <label for="exampleInputPassword1" className='col-sm-3 col-form-label text-left'>Lastname</label>
                                    <div class="col-sm-9"><input type="text" name='lastname' value={lastname} onChange={e => {setLastname(e.target.value)}} class="form-control" id="exampleInputPassword1" placeholder="Enter Lastname" /></div>
                                </div>
                                <div class="form-group row">
                                    <label for="exampleInputDepartment" className='col-sm-3 col-form-label text-left'>Department</label>
                                    <div class="col-sm-9"><input type="text"  name='department' value={department} onChange={e => {setDepartment(e.target.value)}}class="form-control" id="exampleInputDepartment" placeholder="Enter Department" /></div>
                                </div>
                                <div class="form-group row" >
                                    <label for="exampleInputRole" className='col-sm-3 col-form-label text-left'>Role</label>
                                    <div class="col-sm-9"><input type="text" name='role' value={role} onChange={e => {setRole(e.target.value)}} class="form-control" id="exampleInputRole" placeholder="Enter Role" /></div>
                                </div>
                                <div class="form-group row">
                                    <label for="exampleInputSalary" className='col-sm-3 col-form-label text-left'>Salary</label>
                                    <div class="col-sm-9"><input type="text" name='salary'value={salary} onChange={e => {setSalary(e.target.value)}}class="form-control" id="exampleInputSalary" placeholder="Enter Salary" /></div>
                                </div>
                                <div class="form-group row" >
                                    <label for="exampleInputPension" className='col-sm-3 col-form-label text-left'>Pension</label>
                                    <div class="col-sm-9"><input type="text" name='pension' value={pension} onChange={e => {setPension(e.target.value)}} class="form-control" id="exampleInputPension" placeholder="Enter Pension" /></div>
                                </div>



                            </form>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="table-responsive">
                <table class="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Job ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Department</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    {employee.map((item, id) => {
                        return (
                            <tbody>
                                <tr onClick={() => {
                                    setDetails({ item })
                                    console.log('Item found is ', details)
                                }}>
                                    <td>{item.jobid}</td>
                                    <td>{item.firstname}</td>
                                    <td>{item.lastname}</td>
                                    <td>{item.department}</td>
                                    <td>{item.role}</td>
                                </tr>
                            </tbody>
                        )
                    })}

                </table>
            </div>

            <EmployeeFullDetails details={details} />

        </div>
    )
}

export default Employee
