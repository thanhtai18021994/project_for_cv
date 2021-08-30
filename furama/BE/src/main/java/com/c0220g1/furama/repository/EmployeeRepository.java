package com.c0220g1.furama.repository;

import com.c0220g1.furama.model.entity.Division;
import com.c0220g1.furama.model.entity.EducationDegree;
import com.c0220g1.furama.model.entity.Employee;
import com.c0220g1.furama.model.entity.Position;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long> {
    @Query("select u from Employee u where u.employeeName like ?1")
    List<Employee> searchName(String name);
    @Query("select u from Employee u where u.position=?1")
    List<Employee> searchPosition(Position position);
    @Query("select u from Employee u where u.division=?1")
    List<Employee> searchDivision(Division division);
    @Query("select u from Employee u where u.employeeAddress=?1")
    List<Employee> searchEducation(EducationDegree educationDegree);
    @Query("select u from Employee u where u.employeePhone like ?1")
    List<Employee> searchByPhone(String phone);

    @Query(value = "SELECT * FROM employee where (?1 is null or employee_name like %?1%) " +
            "and (?2 is null or employee_phone like %?2%) " +
            "and (?3 is null or position_id = ?3) " +
            "and (?4 is null or education_id = ?4) " +
            "and (?5 is null or division_id = ?5)",nativeQuery = true)
    List<Employee> findAllField(String name,String phone,String positionId,String educationId,String divisionId);
}
