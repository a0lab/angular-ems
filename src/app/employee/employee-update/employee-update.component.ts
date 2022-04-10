import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {

  id: number;
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.error(error));
  }

  onSubmit() {
    this.updateEmployee();
    this.goToEmployeeList();
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe (data => {
      console.info(data);
    },
    error => console.error(error));
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }

}
