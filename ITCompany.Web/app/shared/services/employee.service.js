"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/toPromise");
var http_1 = require("@angular/http");
var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    EmployeeService.prototype.getEmployees = function () {
        return this.http.get('api/employees', { headers: this.headers }).toPromise().then(function (data) {
            return JSON.parse(data.json());
        });
    };
    EmployeeService.prototype.addEmployee = function (employee) {
        return this.http.post('api/employees', employee, { headers: this.headers }).toPromise();
    };
    EmployeeService.prototype.deleteEmployee = function (employeeId) {
        return this.http.delete('api/employees/' + employeeId, { headers: this.headers }).toPromise();
    };
    EmployeeService.prototype.getPositions = function () {
        return this.http.get('api/employees/positions', { headers: this.headers }).toPromise().then(function (data) {
            return JSON.parse(data.json());
        });
    };
    EmployeeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map