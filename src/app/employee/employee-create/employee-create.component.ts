import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.saveEmployee();
    this.goToEmployeeList();
  }

  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe (data => {
      console.info(data);
    },
    error => console.error(error));
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }

}
