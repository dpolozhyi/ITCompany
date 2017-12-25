import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './root/app.component';
import { EmployeeComponent } from './employee/employee.component';

import { EmployeeService } from './shared/services/employee.service';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [AppComponent, EmployeeComponent],
    providers: [EmployeeService],
    bootstrap: [AppComponent]
})
export class AppModule { }