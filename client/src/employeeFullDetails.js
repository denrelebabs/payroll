import React, { useState, useEffect } from 'react'
import pictureURL from './assets/Abiola.jpeg'



const EmployeeFullDetails = (props) => {
    const [details, setDetails] = useState('')

    // useEffect(() => {
    //     if(props.details !== '')
    //     setDetails(props.details)
    //   console.log('Props found is ', details)
    // }, [''])
   
    return (
        <div className='text-center'>
          
          <nav>
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                    <a class="nav-item nav-link active" id="nav-employee-tab" data-toggle="tab" href="#nav-employee" role="tab" aria-controls="nav-employee" aria-selected="true">Profile</a>
                                    <a class="nav-item nav-link" id="nav-salary-tab" data-toggle="tab" href="#nav-salary" role="tab" aria-controls="nav-salary" aria-selected="false">Salary Details</a>
                                    <a class="nav-item nav-link" id="nav-compensation-tab" data-toggle="tab" href="#nav-compensation" role="tab" aria-controls="nav-compensation" aria-selected="false">Compensation Plans</a>
                                </div>
                            </nav>
                            <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="nav-employee" role="tabpanel" aria-labelledby="nav-employee-tab"> <div class="container">
    <div class="row mt-4">
        <div class="col-xs-12 col-sm-6 col-md-6">
            <div class="well well-sm">
                <div class="row">
                    <div class="col-sm-6 col-md-4">
                        <img src={props.details && props.details.item.image} alt="" class="img-rounded rounded-circle img-responsive" width='150' />
                    </div>
                    <div class="col-sm-6 col-md-8">
                        <h4>
                        {props.details && props.details.item.firstname} &nbsp;<span>{props.details && props.details.item.lastname}</span></h4>
                        <small><cite title="San Francisco, USA">{props.details && props.details.item.address} <i class="glyphicon glyphicon-map-marker">
                        </i></cite></small>
                        <p>
                            <i class="glyphicon glyphicon-envelope"></i>{props.details && props.details.item.email}
                            <br />
                            <i class="glyphicon glyphicon-gift"></i>{props.details && props.details.item.dob}</p>
                       
                        <div class="btn-group">
                            {props.details &&   <button type="button" class="btn btn-primary">
                                Update Info
                            </button> }
                          
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
                                <div class="tab-pane fade" id="nav-salary" role="tabpanel" aria-labelledby="nav-salary-tab">hahahah</div>
                                <div class="tab-pane fade" id="nav-compensation" role="tabpanel" aria-labelledby="nav-compensation-tab">oooooh</div>
                            </div>
        </div>
    )
}

export default EmployeeFullDetails


