-- Table: Employee
CREATE TABLE Employee (
    Id int  NOT NULL PRIMARY KEY IDENTITY,
    FirstName nvarchar(100)  NOT NULL,
    LastName nvarchar(100)  NOT NULL,
    DateOfBirth datetime  NULL,
    PositionId int  NULL,
);