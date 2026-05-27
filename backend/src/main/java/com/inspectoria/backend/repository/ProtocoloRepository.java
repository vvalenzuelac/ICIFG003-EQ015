package com.inspectoria.backend.repository;

import com.inspectoria.backend.model.Protocolo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface ProtocoloRepository extends JpaRepository<Protocolo, Long> {

    // Buscador avanzado: Si el parámetro viene vacío, lo ignora y busca por los demás
    @Query("SELECT p FROM Protocolo p WHERE " +
           "(:rut IS NULL OR p.rut LIKE %:rut%) AND " +
           "(:nombre IS NULL OR LOWER(p.nombreAlumno) LIKE LOWER(CONCAT('%', :nombre, '%'))) AND " +
           "(:tipo IS NULL OR p.tipoProtocolo = :tipo)")
    List<Protocolo> buscarConFiltros(@Param("rut") String rut, 
                                     @Param("nombre") String nombre, 
                                     @Param("tipo") String tipo);
}