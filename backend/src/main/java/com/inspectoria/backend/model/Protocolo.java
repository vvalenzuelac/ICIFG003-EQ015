package com.inspectoria.backend.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "protocolos")
public class Protocolo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String rut;
    private String nombreAlumno;
    private String tipoProtocolo; 
    private String descripcion;
    private LocalDate fecha;

    // Constructores
    public Protocolo() {
    }

    // Getters y Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getRut() { return rut; }
    public void setRut(String rut) { this.rut = rut; }

    public String getNombreAlumno() { return nombreAlumno; }
    public void setNombreAlumno(String nombreAlumno) { this.nombreAlumno = nombreAlumno; }

    public String getTipoProtocolo() { return tipoProtocolo; }
    public void setTipoProtocolo(String tipoProtocolo) { this.tipoProtocolo = tipoProtocolo; }

    public String getDescripcion() { return descripcion; }
    public void setDescripcion(String descripcion) { this.descripcion = descripcion; }

    public LocalDate getFecha() { return fecha; }
    public void setFecha(LocalDate fecha) { this.fecha = fecha; }
}