# EcomFlex

EcomFlex es una aplicación de comercio electrónico construida con React y Vite. Permite a los usuarios navegar por los productos disponibles, añadirlos al carrito y gestionar su carrito de compras. Además, incluye una sección de administración donde los administradores pueden ver un dashboard con gráficos y agregar nuevos productos.

## Tecnologías Utilizadas

- React
- Vite
- Axios
- ApexCharts
- React Router
- Bootstrap
- Node.js (Backend)
- Prisma (ORM)
- PostgreSQL (Base de datos)

## Características

- **Inicio:** Página principal donde se muestran los productos disponibles.
- **Carrito:** Los usuarios pueden agregar o quitar productos de su carrito.
- **Admin:** Login para administradores. Los administradores pueden ver un dashboard con gráficos y agregar nuevos productos.
- **Dashboard:** Gráfico que muestra la cantidad de productos por categoría.
- **Gestión de Productos:** Los administradores pueden agregar nuevos productos, los cuales se reflejan en la página de inicio.

## Instalación

1. Clonar el repositorio:

    ```bash
    git clone https://github.com/CARLOSARMANDOLARIOSROJAS/EcomFlex-Front
    cd ecomflex
    ```

2. Instalar dependencias:

    ```bash
    npm install
    ```

3. Configurar las variables de entorno:

    Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables de entorno:

    ```bash
    VITE_BACKEND_URL=http://localhost:3000
    ```

4. Ejecutar la aplicación:

    ```bash
    npm run dev
    ```

## Uso

1. **Inicio:** Al abrir la aplicación, se mostrarán los productos disponibles.
2. **Carrito:** Puedes añadir productos al carrito desde la página de inicio y luego gestionar tu carrito.
3. **Admin:** Accede a la sección de administración a través del login de administrador. 
4. **Dashboard:** En el dashboard se muestra un gráfico de la cantidad de productos por categoría.
5. **Agregar Productos:** Los administradores pueden agregar nuevos productos desde la sección de administración, los cuales se reflejarán en la página de inicio.

