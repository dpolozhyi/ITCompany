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
var employee_service_1 = require("../shared/services/employee.service");
var employee_model_1 = require("../shared/models/employee.model");
var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(employeeService) {
        this.employeeService = employeeService;
        this.addingEmployee = false;
        this.newEmployee = new employee_model_1.EmployeeModel();
        this.newEmployeeValid = true;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeService.getEmployees().then(function (employees) { return _this.employees = employees; });
        this.employeeService.getPositions().then(function (positions) { return _this.positions = positions; });
        console.log(this.newEmployee.position);
    };
    EmployeeComponent.prototype.chooseNewEmployeePosition = function (position) {
        this.newEmployee.position = position;
        console.log(this.newEmployee);
    };
    EmployeeComponent.prototype.onAddNewEmployee = function () {
        var _this = this;
        if (this.isValidEmployee(this.newEmployee)) {
            this.newEmployeeValid = true;
            this.employeeService.addEmployee(this.newEmployee).then(function () {
                _this.employeeService.getEmployees().then(function (employees) { return _this.employees = employees; });
                _this.addingEmployee = false;
                _this.newEmployee = new employee_model_1.EmployeeModel();
            });
        }
        else {
            this.newEmployeeValid = false;
        }
    };
    EmployeeComponent.prototype.onDeleteEmployee = function (employeeId) {
        var _this = this;
        this.employeeService.deleteEmployee(employeeId).then(function () {
            _this.employeeService.getEmployees().then(function (employees) { return _this.employees = employees; });
        });
    };
    EmployeeComponent.prototype.isValidEmployee = function (employee) {
        if (employee.firstName && employee.lastName && employee.firstName.length > 0
            && employee.lastName.length > 0 && employee.position)
            return true;
    };
    EmployeeComponent = __decorate([
        core_1.Component({
            selector: 'employee',
            templateUrl: 'app/employee/employee.component.html',
            styleUrls: ['app/employee/employee.component.css']
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService])
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map