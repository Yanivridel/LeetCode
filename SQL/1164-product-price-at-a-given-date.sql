-- SLOW
SELECT p1.product_id,
max(case when maxDate is NULL then 10 else p1.new_price end) as price
FROM Products p1 LEFT JOIN
(SELECT product_id, max(change_date) maxDate FROM Products p WHERE change_date <= '2019-08-16'
GROUP BY p.product_id) as p2
ON (p1.product_id = p2.product_id)
WHERE maxDate is NULL OR p1.change_date = maxDate
GROUP BY p1.product_id;

-- FAST
select
 product_id,
 isnull((
    select top 1 new_price
    from Products p2
    where p1.product_id = p2.product_id and change_date <= '2019-08-16'
    order by change_date desc
 ), 10) as price
from Products p1
group by product_id