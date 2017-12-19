-- Table: Customer
CREATE TABLE Customer (
    Id int  NOT NULL PRIMARY KEY IDENTITY,
    Name nvarchar(200)  NOT NULL,
    Location nvarchar(150)  NULL
);