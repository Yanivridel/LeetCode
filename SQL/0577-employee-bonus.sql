SELECT name, bonus
FROM Employee e LEFT JOIN Bonus b ON (e.empId=b.empId)
WHERE bonus is NULL OR bonus < 1000;
