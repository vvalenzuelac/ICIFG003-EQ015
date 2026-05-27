import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProtocoloService } from '../../services/protocolo';
import { jsPDF } from 'jspdf'; 

@Component({
  selector: 'app-protocolos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './protocolos.html'
})
export class ProtocolosComponent implements OnInit {
  
  listaCompleta: any[] = [];
  listaProtocolos: any[] = [];
  
  filtroRut: string = '';
  filtroNombre: string = '';
  filtroTipo: string = '';
  filtroFecha: string = '';

  mostrarFormulario: boolean = false;
  protocoloActual: any = {};

  // Variables para el modal detalle
  mostrarModal: boolean = false;
  protocoloSeleccionado: any = {};

  constructor(private protocoloService: ProtocoloService) {}

  ngOnInit() {
    this.cargarTodos();
  }

  cargarTodos() {
    this.protocoloService.getProtocolos().subscribe({
      next: (data) => {
        
        this.listaCompleta = data;
        
        
        this.listaProtocolos = [...this.listaCompleta]; 
        
        
        this.buscar(); 
      },
      error: (err) => {
        console.error("Error al conectar con la base de datos:", err);
      }
    });
  }

  buscar() {
    this.listaProtocolos = this.listaCompleta.filter(p => {
      const coincideRut = !this.filtroRut || (p.rut && p.rut.toLowerCase().includes(this.filtroRut.toLowerCase()));
      const coincideNombre = !this.filtroNombre || (p.nombreAlumno && p.nombreAlumno.toLowerCase().includes(this.filtroNombre.toLowerCase()));
      const coincideTipo = !this.filtroTipo || (p.tipoProtocolo && p.tipoProtocolo === this.filtroTipo);
      const coincideFecha = !this.filtroFecha || (p.fecha && p.fecha === this.filtroFecha);
      
      return coincideRut && coincideNombre && coincideTipo && coincideFecha;
    });
  }

  limpiarFiltros() {
    this.filtroRut = '';
    this.filtroNombre = '';
    this.filtroTipo = '';
    this.filtroFecha = '';
    this.buscar();
  }

  // Función para abrir el modal de descripción
  verDetalle(protocolo: any) {
    this.protocoloSeleccionado = { ...protocolo };
    this.mostrarModal = true;
  }

  // Función para generar el reporte PDF
  exportarPDF() {
    const doc = new jsPDF();

    // Encabezado del Documento
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(18);
    doc.text('REPORTE OFICIAL DE PROTOCOLOS', 14, 20);
    
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(11);
    doc.text('Departamento de Inspectoría General', 14, 27);
    doc.text(`Fecha del Reporte: ${new Date().toLocaleDateString()}`, 14, 33);
    
    // Línea divisoria
    doc.setLineWidth(0.5);
    doc.line(14, 38, 195, 38);

    // Títulos de la tabla en el PDF
    let y = 48;
    doc.setFont('Helvetica', 'bold');
    doc.text('RUT', 14, y);
    doc.text('ALUMNO', 45, y);
    doc.text('TIPO FALTA', 115, y);
    doc.text('FECHA', 165, y);
    
    doc.line(14, y + 3, 195, y + 3);
    y += 12;

    // Listado de filas
    doc.setFont('Helvetica', 'normal');
    this.listaProtocolos.forEach(p => {
      if (y > 270) { 
        doc.addPage(); 
        y = 20; 
      }
      doc.text(p.rut || 'N/A', 14, y);
      doc.text(p.nombreAlumno || 'N/A', 45, y);
      doc.text(p.tipoProtocolo || 'N/A', 115, y);
      doc.text(p.fecha || 'N/A', 165, y);
      y += 9;
    });

    // Descarga automática del archivo
    doc.save('Reporte_Inspectoria_Protocolos.pdf');
  }

  prepararNuevo() {
    this.protocoloActual = {};
    this.mostrarFormulario = true;
  }

  seleccionar(protocolo: any) {
    this.protocoloActual = { ...protocolo }; 
    this.mostrarFormulario = true;
  }

  guardar() {
    if (this.protocoloActual.id) {
      this.protocoloService.actualizarProtocolo(this.protocoloActual.id, this.protocoloActual).subscribe(() => {
        this.mostrarFormulario = false;
        this.cargarTodos();
      });
    } else {
      this.protocoloService.crearProtocolo(this.protocoloActual).subscribe(() => {
        this.mostrarFormulario = false;
        this.cargarTodos();
      });
    }
  }

  eliminar(id: number) {
    if(confirm('¿Estás seguro de eliminar este registro?')) {
      this.protocoloService.eliminarProtocolo(id).subscribe(() => {
        this.cargarTodos();
      });
    }
  }
}