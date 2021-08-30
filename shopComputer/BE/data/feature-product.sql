SELECT * FROM shoplaptop.feature_product_product;
delimiter //
create procedure insertFeatureProductProduct(in param1 int,in param2 int)
begin
insert into feature_product_product
values(param1,param2);
end //
delimiter ;
call insertFeatureProductProduct(1,10)