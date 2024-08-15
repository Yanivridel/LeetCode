SELECT FORMAT(trans_date, 'yyyy-MM') as month, country,
count(*) as trans_count,
sum(appNum) as approved_count,
sum(amount) as trans_total_amount,
sum(appNum * amount) as approved_total_amount
FROM (SELECT country, amount, trans_date,
t.state,
    CASE
        WHEN t.state = 'approved' THEN 1
        ELSE 0
    END AS appNum
    FROM Transactions t) as temp
GROUP BY FORMAT(trans_date, 'yyyy-MM'), country;