import { Injectable, Inject } from "@angular/core";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';

import { EmployeeModel } from '../models/employee.model';
import { PositionModel } from '../models/position.model';

@Injectable()
export class EmployeeService {
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    getEmployees(): Promise<EmployeeModel[]> {
        return this.http.get('api/employees', { headers: this.headers }).toPromise().then(data =>
            JSON.parse(data.json()) as EmployeeModel[]);
    }

    addEmployee(employee: EmployeeModel){
        return this.http.post('api/employees', employee, { headers: this.headers }).toPromise();
    } 

    deleteEmployee(employeeId: number) {
        return this.http.delete('api/employees/' + employeeId, { headers: this.headers }).toPromise();
    } 

    getPositions(): Promise<PositionModel[]> {
        return this.http.get('api/employees/positions', { headers: this.headers }).toPromise().then(data =>
            JSON.parse(data.json()) as PositionModel[]);
    }
}