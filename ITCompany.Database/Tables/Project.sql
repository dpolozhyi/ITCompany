-- Table: Project
CREATE TABLE Project (
    Id int  NOT NULL PRIMARY KEY IDENTITY,
    Name nvarchar(150)  NOT NULL,
    Description nvarchar(1000)  NULL,
    Budget int  NULL,
    CustomerId int  NOT NULL,
);
