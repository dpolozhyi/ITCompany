CREATE PROCEDURE [dbo].[GetPositionList]
AS
BEGIN
	SELECT p.Id, p.Name
	FROM Position p
END
