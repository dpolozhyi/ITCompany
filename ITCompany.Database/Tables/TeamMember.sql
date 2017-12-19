-- Table: TeamMember
CREATE TABLE TeamMember (
    Id int  NOT NULL PRIMARY KEY IDENTITY,
    EmployeeId int  NOT NULL,
    ProjectPositionId int  NOT NULL,
    TeamId int  NOT NULL,
    Employee_Id int  NOT NULL
);