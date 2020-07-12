var express = require('express');
var router = express.Router();

const employeeDetails = [
    { jobid: 101, firstname: 'Nike', lastname: 'Abiola', department: 'HR', role: 'Manager', salary: '250000', address: '42, Mortgomery, Yaba', email: 'nike@kmberly.com', dob: 'July 3, 1992' },
    { jobid: 102, firstname: 'Babatunde', lastname: 'Adenrele', department: 'ICT', role: 'Software Developer', salary: '250000',  address: '12, Ikota road, Lekki', email: 'babatunde@kmberly.com', dob: 'May 3, 1982' },
    { jobid: 103, firstname: 'Charles', lastname: 'Okocha', department: 'HR', role: 'Manager', salary: '330000', address: '2, Masha, Surulere', email: 'biddy@kmberly.com', dob: 'July 3, 1992' },
    { jobid: 104, firstname: 'Nike', lastname: 'Ogunbanjo', department: 'ADMIN', role: 'Officer', salary: '72000', address: '42, Abbey road, Onike', email: 'nikky@kmberly.com', dob: 'July 22, 1991' },
    { jobid: 105, firstname: 'Kimberly', lastname: 'Ryan', department: 'ADMIN', role: 'Manager', salary: '200000', address: '75C, Railway Compound, Ebute-Metta', email: 'ryan@kmberly.com', dob: 'April 13, 1994' },
    { jobid: 106, firstname: 'Oluwatobi', lastname: 'Ogunlesi', department: 'SUPPLIES', role: 'Manager', salary: '230000', address: 'Abule Egba, Lagos', email: 'oluwatobi@kmberly.com', dob: 'January 3, 1988' }

]

router.get('/', function(req, res, next) {
    res.send(employeeDetails);
});

module.exports = router;