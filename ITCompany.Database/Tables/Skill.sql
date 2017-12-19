-- Table: Skill
CREATE TABLE Skill (
    Id int  NOT NULL PRIMARY KEY IDENTITY,
    Name nvarchar(150)  NOT NULL,
    Description nvarchar(500)  NOT NULL
);