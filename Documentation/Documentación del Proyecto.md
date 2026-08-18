# Plataforma Web MisterFiestas

## 1. Visión General del Proyecto

Desarrollar una página web dinámica y orientada a la conversión para la empresa de eventos MisterFiestas. El objetivo principal es estructurar un catálogo digital que resalte los servicios más rentables y de mayor interés de venta, permitiendo a clientes particulares y corporativos (B2B) solicitar cotizaciones personalizadas de manera rápida y automatizada.

## 2. Estructura del Equipo de Desarrollo y Roles

Para asegurar el éxito del proyecto y una ejecución eficiente, las responsabilidades se dividen de la siguiente manera:

- **Walen (UX/UI & Diseño Visual):** Creación de la interfaz de usuario, diseño de la experiencia y elaboración de los wireframes visuales, priorizando destacar el "Túnel Infinito" y los "Mariachis".
    
- **David (Frontend & Flujos):** Definición de los flujos de navegación (Sitemap), requerimientos del lado del cliente y estructura de la experiencia del usuario en los formularios de cotización dinámica.
    
- **Sebastián (Arquitectura de Datos & Lógica Core):** Diseño del diagrama relacional de la base de datos (SQL Server), estructuración general del servidor y definición de la lógica matemática para cálculos de recargos por provincia y agrupación de paquetes.
    
- **Mario (Desarrollo Backend & APIs):** Desarrollo del lado del servidor (Spring Boot), creación de los _endpoints_ (API REST) para conectar el formulario web con la base de datos, y manejo del procesamiento de las solicitudes de los clientes.
    

## 3. Alcance y Requerimientos Clave del Negocio

- **Estrategia de Ventas:** Dar máxima prioridad visual al **Túnel Infinito** (servicio de mayor rentabilidad) y a los **Mariachis** (mayor prioridad de venta de la empresa).
    
- **Catálogo de Servicios:** Soporte para servicios individuales (karaokes, estaciones de foto, etc.) y "Combos/Paquetes" prearmados.
    
- **Logística y Cobertura:** El formulario debe incluir un selector de ubicación. Se aplicarán recargos automáticos o advertencias de costo adicional para eventos que impliquen viajes a otras provincias.
    
- **Tipos de Cliente:** El sistema distinguirá entre:
    
    - _Clientes Particulares (B2C):_ Bodas, cumpleaños, etc.
        
    - _Clientes Corporativos (B2B):_ Actividades de empresas. El formulario solicitará Nombre de Empresa y RNC.
        
- **Manejo de Pagos:** La plataforma web **no** procesará pagos en línea de forma automática. Su función será capturar toda la información del evento y generar una solicitud para que la administración de MisterFiestas envíe un enlace de pago manual al cliente final. Se aceptan todos los métodos de pago.
    
- **Multimedia:** La empresa se apoya en fotógrafos subcontratados; el diseño debe contemplar galerías alimentadas por este material de alta calidad.
    

## 4. Arquitectura y Definición Técnica

- **Gestión del Proyecto:** Creación de un tablero en **Jira** para la asignación y seguimiento de tareas, y control de versiones del código mediante **GitHub**.
    
- **Backend:** API REST estructurada en **Spring Boot** (manejado por Sebastián y Mario).
    
- **Base de Datos:** Estructura relacional en **SQL Server** para gestionar de forma eficiente la relación de muchos a muchos (ej. Combos que contienen varios servicios), catálogos y perfiles de clientes.
    

## 5. Mapa del Sitio (Sitemap) / Arquitectura de la Información

- **1. Inicio (Home)**
    
    - **Hero Section (Cabecera):** Elemento visual destacado (carrusel o video) enfocado en el Túnel Infinito y los Mariachis con un botón de llamada a la acción (CTA): "Cotizar mi Evento".
        
    - **Sección de Combos Rápidos:** Vista previa de los paquetes más populares.
        
    - **Sección B2B:** Bloque de "Atención a Empresas" que redirige al área corporativa.
        
- **2. Catálogo de Servicios**
    
    - **2.1. Servicios Individuales:** Lista completa descriptiva de cada servicio ofrecido.
        
    - **2.2. Paquetes y Combos:** Agrupación de servicios con precios especiales (según la lista pendiente del cliente).
        
- **3. Eventos Corporativos (B2B)**
    
    - Página dedicada a empresas (activaciones de marca, _team building_, fiestas de fin de año).
        
    - Botón directo al formulario de cotización con el perfil "Empresa" preseleccionado.
        
- **4. Galería de Eventos**
    
    - Fotos y videos de eventos reales.
        
    - Filtros de navegación: Bodas, Cumpleaños, Corporativo.
        
- **5. Nosotros / Preguntas Frecuentes (FAQ)**
    
    - Breve historia y valores de MisterFiestas.
        
    - Dudas operativas: Cobertura nacional, métodos de pago, proceso de reserva.
        
- **6. Formulario de Cotización y Reserva (Checkout)**
    
    - _Paso 1:_ Tipo de Cliente (Físico o Empresa). Despliegue dinámico de campos (RNC, Nombre de empresa).
        
    - _Paso 2:_ Selección de Servicios o Combos.
        
    - _Paso 3:_ Logística (Selector de provincia, fecha y hora del evento).
        
    - _Paso 4:_ Confirmación de solicitud exitosa e indicación de que se enviará el enlace de pago.
        

## 6. Cuestionario Pendiente para el Cliente (MisterFiestas)

Para definir la lógica exacta de la base de datos y los flujos, es necesario aclarar estos puntos en la próxima reunión con el dueño:

1. **Cálculo de traslados a provincias:** ¿Tienen una tabla de precios fijos por provincia (ej. Santiago cuesta $X, Punta Cana$Y) o el recargo se calcula bajo otra métrica?
    
2. **Enlaces de pago:** ¿Qué plataforma utilizan actualmente para generar esos links (Azul, PayPal, transferencias de bancos locales)? (Útil para prever futuras integraciones).
    
3. **Tiempo de anticipación:** ¿Con cuántos días u horas de anticipación mínima debe un cliente reservar en la web para garantizar disponibilidad?
    
4. **Gestión de las solicitudes:** Cuando un cliente termine de llenar el formulario en la web, ¿dónde desea recibir la alerta? (¿Un correo específico, un número de WhatsApp, o un panel administrador básico en la web?).