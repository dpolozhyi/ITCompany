CREATE PROCEDURE [dbo].[GetEmployeeList]
AS
BEGIN
	SELECT e.Id, e.FirstName, e.LastName, e.DateOfBirth, p.Id, p.Name
	FROM Employee e
	JOIN Position p
		on e.PositionId = p.Id
END
