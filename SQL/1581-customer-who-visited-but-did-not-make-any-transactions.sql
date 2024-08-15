SELECT customer_id, count(*) as count_no_trans
FROM Visits v LEFT JOIN Transactions t ON (v.visit_id=t.visit_id)
WHERE transaction_id is NULL
GROUP BY customer_id;