SELECT distinct l1.num as ConsecutiveNums
FROM Logs l1 JOIN Logs l2 ON (l1.num = l2.num AND l1.id = l2.id - 1)
     JOIN Logs l3 ON (l2.num = l3.num AND l1.id = l3.id - 2);