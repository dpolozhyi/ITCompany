import { Component } from '@angular/core';

export enum TabType {
    None = 0,
    Projects = 1,
    Employees = 2,
    Customers = 3
}

@Component({
    selector: 'my-app',
    templateUrl: 'app/root/app.component.html',
    styleUrls: ['app/root/app.component.css']
})
export class AppComponent {
    name = '';
    tabType = TabType;
    selectedTab: TabType = TabType.None;
}