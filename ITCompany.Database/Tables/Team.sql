-- Table: Team
CREATE TABLE Team (
    Id int  NOT NULL PRIMARY KEY IDENTITY,
    Name nvarchar(150)  NOT NULL,
    Desciption nvarchar(500)  NOT NULL,
    ProjectId int  NOT NULL
);