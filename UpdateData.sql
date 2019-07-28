
GO

/****** Object:  StoredProcedure [dbo].[UpdateRecord]    Script Date: 29-07-2019 00:00:25 ******/
DROP PROCEDURE [dbo].[UpdateRecord]
GO

/****** Object:  StoredProcedure [dbo].[UpdateRecord]    Script Date: 29-07-2019 00:00:25 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE procedure [dbo].[UpdateRecord]
(
    @EmployeeID int, -- cannot be NULL
    @Name varchar(max) = null,
	@City varchar(max) = null,
	@Email varchar(max) = null,
	@Phone varchar(max) = null
)
as
begin
    set nocount on
    
	update Employee set Name = @Name,  
	Phone = @Phone,City = @City, Email = @Email where EmployeeID = @EmployeeID
 
end
GO


