import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeUpdateComponent } from './employee/employee-update/employee-update.component';

const routes: Routes = [
  { path: "employees", component: EmployeeListComponent },
  { path: "employee-create", component: EmployeeCreateComponent},
  { path: "employee-update/:id", component: EmployeeUpdateComponent},
  { path: "", redirectTo: "employees", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
