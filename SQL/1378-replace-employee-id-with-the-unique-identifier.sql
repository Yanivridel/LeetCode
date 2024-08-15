SELECT  unique_id, name
FROM Employees e LEFT JOIN EmployeeUNI eu on (e.id = eu.id);