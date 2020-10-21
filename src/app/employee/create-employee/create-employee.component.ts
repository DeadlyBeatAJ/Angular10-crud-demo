import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee:Employee=new Employee();
  submitted=false;

  constructor(private empService:EmployeeService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted=true;
    this.empService.createEmployee(this.employee).subscribe(
      data=>console.log(data),
      error=>console.log(error));
      this.employee=new Employee();
      this.router.navigate(['/employees'])
  }

}
