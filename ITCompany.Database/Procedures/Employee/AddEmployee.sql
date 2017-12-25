CREATE PROCEDURE [dbo].[AddEmployee]
	@firstName NVARCHAR(100),
	@lastName NVARCHAR(100),
	@dob DateTime,
	@positionId INT
AS
BEGIN
	INSERT INTO Employee(FirstName, LastName, DateOfBirth, PositionId) 
		VALUES(@firstName, @lastName, @dob, @positionId);
	SELECT CAST(SCOPE_IDENTITY() AS INT);
END