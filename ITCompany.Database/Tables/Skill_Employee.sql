-- Table: Skill_Employee
CREATE TABLE Skill_Employee (
    Id int  NOT NULL PRIMARY KEY IDENTITY,
    EmployeeId int  NOT NULL,
    SkillId int  NOT NULL,
    SkillLevelId int  NOT NULL
);