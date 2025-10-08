package com.omi.auth.repository;

import com.omi.auth.domain.UserClinicRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserClinicRoleRepository extends JpaRepository<UserClinicRole, Long> {
}
