import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../shared/services/employee.service';

import { EmployeeModel } from '../shared/models/employee.model';
import { PositionModel } from '../shared/models/position.model';

@Component({
    selector: 'employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css']
})
export class EmployeeComponent implements OnInit {
    private addingEmployee: boolean = false;

    private employees: EmployeeModel[];

    private positions: PositionModel[];

    private newEmployee: EmployeeModel = new EmployeeModel();

    private newEmployeeValid: boolean = true;

    constructor(private employeeService: EmployeeService) { }

    ngOnInit() {
        this.employeeService.getEmployees().then((employees) => this.employees = employees);
        this.employeeService.getPositions().then((positions) => this.positions = positions);
        console.log(this.newEmployee.position);
    }

    chooseNewEmployeePosition(position: PositionModel) {
        this.newEmployee.position = position;
        console.log(this.newEmployee);
    }

    onAddNewEmployee() {
        if (this.isValidEmployee(this.newEmployee)) {
            this.newEmployeeValid = true;
            this.employeeService.addEmployee(this.newEmployee).then(() => {
                this.employeeService.getEmployees().then((employees) => this.employees = employees);
                this.addingEmployee = false;
                this.newEmployee = new EmployeeModel();
            });
        }
        else {
            this.newEmployeeValid = false;
        }
    }

    onDeleteEmployee(employeeId: number) {
        this.employeeService.deleteEmployee(employeeId).then(() => {
            this.employeeService.getEmployees().then((employees) => this.employees = employees);
        });
    }

    private isValidEmployee(employee: EmployeeModel) {
        if (employee.firstName && employee.lastName && employee.firstName.length > 0
            && employee.lastName.length > 0 && employee.position)
            return true;
    }
}