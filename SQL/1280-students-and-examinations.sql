SELECT st.student_id, student_name, sb.subject_name, count(e.subject_name) as attended_exams
FROM Students st CROSS JOIN Subjects sb
LEFT JOIN Examinations e ON (st.student_id = e.student_id 
AND sb.subject_name = e.subject_name)
GROUP BY st.student_id, student_name, sb.subject_name
ORDER BY st.student_id, student_name;