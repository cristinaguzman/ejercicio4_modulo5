# Hospital Manager

Este proyecto es una aplicación web para la gestión de un hospital, desarrollada utilizando **React** con **TypeScript**. La aplicación permite la autenticación de usuarios y el manejo de diferentes módulos como la lista de doctores, citas y pacientes.

## Tecnologías Utilizadas

- **React** (con TypeScript)
- **React Router** para la navegación
- **Bootstrap** para los estilos
- **Axios** para las solicitudes HTTP
- **Node.js** y **npm** para el manejo de dependencias

## Requisitos Previos

Asegúrate de tener instalado lo siguiente:

- **Node.js** (versión 14 o superior)
- **npm** o **yarn**

## Instalación

Sigue estos pasos para configurar el proyecto en tu máquina local:

1. Clona este repositorio:
   ```bash
   git clone https://github.com/usuario/hospital-manager.git


hospital-manager/
├── public/               # Archivos públicos (favicon, index.html, etc.)
├── src/
│   ├── components/       # Componentes reutilizables (DoctorList, PatientForm, etc.)
│   ├── pages/            # Páginas principales (LoginPage, Dashboard, etc.)
│   ├── routes/           # Rutas protegidas y configuración de navegación
│   ├── hooks/            # Hooks personalizados
│   ├── utils/            # Funciones auxiliares (jwtHelper, etc.)
│   ├── App.tsx           # Componente principal
│   ├── index.tsx         # Punto de entrada de la aplicación
│   └── main.css          # Estilos globales
├── .gitignore            # Archivos y carpetas ignorados por Git
├── package.json          # Dependencias y scripts del proyecto
└── README.md             # Información del proyecto

