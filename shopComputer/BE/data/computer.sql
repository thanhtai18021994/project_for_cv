SELECT * FROM shoplaptop.computer;
delimiter //
create procedure searchLaptop(in idLaptop int)
begin
select * from computer 
where id_type_computer=idLaptop;
end //
delimiter ;
call searchLaptop(1);