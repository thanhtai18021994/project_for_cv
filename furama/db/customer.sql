SELECT * FROM furama.customer;
-- SELECT DATEDIFF(CURRENT_DATE, STR_TO_DATE(t.customer_birthday, '%d-%m-%Y'))/365 AS ageInYears
--   FROM customer t ;
--   select * from customer where floor(datediff (now(), customer_birthday))/365 >20;

 DELIMITER //
 create procedure findCustomer(name_customer varchar(255), phone_customer varchar(255), from_age int, to_age int,customer_type int)
 begin
 select * from customer where (
 (name_customer is null or customer_name like concat('%',name_customer,'%'))
 and (phone_customer is null or customer_phone like concat('%',phone_customer,'%'))
 and ((from_age is null and to_age is null) 
 or (from_age is null and to_age is not null and floor(datediff (now(), customer_birthday))/365 < to_age)
 or (from_age is not null and to_age is null and floor(datediff (now(), customer_birthday))/365 > from_age)
 or (from_age is not null and to_age is not null and ((floor(datediff (now(), customer_birthday))/365) between from_age and to_age)))
 and (customer_type is null or customer_type_id = customer_type));
 end;
// DELIMITER  ;
 call findCustomer(null,null,20,25,null)