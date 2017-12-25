CREATE PROCEDURE [dbo].[DeleteEmployee]
	@id INT
AS
BEGIN
	DELETE FROM Employee WHERE Id = @id;
END