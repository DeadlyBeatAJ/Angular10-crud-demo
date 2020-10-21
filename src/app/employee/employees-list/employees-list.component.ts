import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/model/api.response';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees:Observable<ApiResponse>;
  constructor(private employeeService:EmployeeService, private router:Router) { }

  ngOnInit(): void {
    this.employees=this.employeeService.getEmployees();
    $(function(){
      $('#datatable-example').DataTable();
  });  
  }

  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id).subscribe(
      data=>{console.log(data);
      this.employees=this.employeeService.getEmployees();
    }, error=>console.error(error));
  }

  updateEmployee(id:number){
    this.router.navigate(['update',id]);
  }

}
