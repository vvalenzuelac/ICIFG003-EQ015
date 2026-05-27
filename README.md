# 🛡️ Sistema de Inspectoría Web


## ✨ Características Principales

* **Autenticación Segura:** Acceso restringido mediante credenciales de administrador.
* **Dashboard Interactivo:** Panel principal con acceso a los módulos del sistema.
* **Gestión de Protocolos (CRUD):** Creación, lectura, actualización y eliminación de registros disciplinarios de alumnos.
* **Búsqueda en Tiempo Real:** Filtros dinámicos multicriterio (por RUT, nombre, tipo de falta y fecha).
* **Exportación de Reportes:** Generación automática de documentos PDF oficiales con los datos filtrados en pantalla.
* **Diseño Responsivo y Moderno:** UI/UX premium utilizando Bootstrap 5, tipografía Poppins y efectos de desenfoque de fondo.

## ⚙️ Tecnologías Utilizadas

* **Frontend:** Angular 17+, TypeScript, HTML5, CSS3, Bootstrap 5, jsPDF.
* **Backend:** Java 17+, Spring Boot, Spring Data JPA, Hibernate.
* **Base de Datos:** PostgreSQL.

---

## 🚀 Instrucciones de Ejecución

Siga estos pasos para ejecutar el proyecto en un entorno de desarrollo local.

### 1. Pre-requisitos
Asegúrese de tener instalados los siguientes programas:
* [Node.js](https://nodejs.org/) y Angular CLI (`npm install -g @angular/cli`).
* [Java Development Kit (JDK 17+)](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html).
* [PostgreSQL](https://www.postgresql.org/).

### 2. Configuración de la Base de Datos
1. Abra su consola de PostgreSQL (`psql -U postgres`).
2. Ingrese su contraseña (configurada por defecto en `admin o 1234` u otra especificada en `application.properties`).
3. Cree la base de datos del proyecto ejecutando:
   ```sql
   CREATE DATABASE bd_inspectoria;

### 3. Ejecución del Backend (Spring Boot)
Navegue hacia la carpeta backend desde su terminal.

Ejecute el servidor integrado de Maven/Spring Boot:

Bash
./mvnw spring-boot:run
(El backend iniciará en el puerto 8080 y creará las tablas automáticamente).

4. Ejecución del Frontend (Angular)
Abra una nueva terminal y navegue hacia la carpeta frontend.

Instale las dependencias del proyecto:

Bash
npm install
Inicie el servidor de desarrollo de Angular:

Bash
ng serve -o
(Esto abrirá automáticamente su navegador en http://localhost:4200/).

🔐 Credenciales de Acceso (Entorno de Pruebas)
Para ingresar al sistema una vez levantado, utilice las siguientes credenciales:

Usuario: admin

Contraseña: 1234
