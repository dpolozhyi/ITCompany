import { PositionModel } from "./position.model";

export class EmployeeModel {
    constructor() { }

    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    position: PositionModel
}