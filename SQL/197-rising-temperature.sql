SELECT w1.id
FROM Weather w1, Weather w2
WHERE DATEDIFF(d, w2.recordDate, w1.recordDate) = 1 /* w1 - w2 = 1*/
AND w1.temperature > w2.temperature;