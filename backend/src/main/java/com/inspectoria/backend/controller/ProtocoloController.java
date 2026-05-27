package com.inspectoria.backend.controller;

import com.inspectoria.backend.model.Protocolo;
import com.inspectoria.backend.repository.ProtocoloRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/protocolos")
@CrossOrigin(origins = "http://localhost:4200") // Permiso clave para que Angular pueda conectarse
public class ProtocoloController {

    private final ProtocoloRepository repository;

    public ProtocoloController(ProtocoloRepository repository) {
        this.repository = repository;
    }

    // 1. BUSCADOR (Lee los parámetros de la URL)
    @GetMapping("/buscar")
    public List<Protocolo> buscarProtocolos(@RequestParam(required = false) String rut,
                                            @RequestParam(required = false) String nombre,
                                            @RequestParam(required = false) String tipo) {
        return repository.buscarConFiltros(rut, nombre, tipo);
    }

    // 2. LISTAR TODOS
    @GetMapping
    public List<Protocolo> listarTodos() {
        return repository.findAll();
    }

    // 3. GUARDAR (Crear nuevo)
    @PostMapping
    public Protocolo guardarProtocolo(@RequestBody Protocolo protocolo) {
        return repository.save(protocolo);
    }

    // 4. ACTUALIZAR (Editar)
    @PutMapping("/{id}")
    public Protocolo actualizarProtocolo(@PathVariable Long id, @RequestBody Protocolo protocoloDetails) {
        protocoloDetails.setId(id);
        return repository.save(protocoloDetails);
    }

    // 5. ELIMINAR
    @DeleteMapping("/{id}")
    public void eliminarProtocolo(@PathVariable Long id) {
        repository.deleteById(id);
    }
}