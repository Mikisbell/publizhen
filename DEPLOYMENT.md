# Guía de Despliegue: Hostinger + GitHub

Esta guía te explica cómo conectar tu repositorio de GitHub con Hostinger para que tu página se actualice automáticamente cada vez que hagas un cambio.

## Prerrequisitos
1.  Tener tu código subido a GitHub (ya hicimos el `commit`, solo falta el `push`).
2.  Tener acceso a tu panel de Hostinger (hPanel).

## Paso 1: Subir tu código a GitHub
Si aún no has subido los cambios, ejecuta este comando en tu terminal:
```bash
git push origin main
```

## Paso 2: Configurar Hostinger
1.  Ingresa a tu **hPanel** de Hostinger.
2.  Ve a la sección **Avanzado** y selecciona **GIT**.
3.  En el apartado "Añadir repositorio":
    *   **Repositorio**: Pega la URL de tu repositorio (ej: `https://github.com/Mikisbell/publizhen.git`).
    *   **Rama**: Escribe `main`.
    *   **Directorio**: Déjalo vacío (o escribe `public_html` si te lo pide explícitamente, pero usualmente Hostinger despliega en una subcarpeta y luego tú mueves los archivos, o configuras el directorio raíz).
    *   **IMPORTANTE**: Como es un proyecto Vite/React, Hostinger necesita servir la carpeta `dist`.
        *   *Opción A (Recomendada)*: Configura en Hostinger que el "Directorio de publicación" sea `dist`.
        *   *Opción B (Manual)*: Usa un archivo `.htaccess` para redirigir el tráfico a `dist`.

## Paso 3: Build Automático (Webhook)
Hostinger por defecto solo "baja" los archivos. Para proyectos como este (React/Vite) que requieren "construcción" (`npm run build`), tienes dos caminos:

### Camino A: GitHub Actions (El Profesional)
Hostinger no ejecuta `npm run build` por ti. Lo ideal es usar **GitHub Actions** para que GitHub construya la página y luego envíe solo la carpeta `dist` a Hostinger (vía FTP o Git).

### Camino B: Subir la carpeta `dist` (El Rápido)
Si no quieres complicarte con configuraciones avanzadas:
1.  Ejecuta `npm run build` en tu computadora (ya lo hicimos).
2.  Asegúrate de que la carpeta `dist` **NO** esté ignorada en `.gitignore` (quita `dist` del `.gitignore` si está ahí).
3.  Haz commit y push de la carpeta `dist`.
4.  Conecta Hostinger al repo como se explicó arriba.
5.  En Hostinger, configura para que la carpeta raíz del dominio apunte a `publizhen/dist`.

## Resumen Rápido
La forma más sencilla hoy es:
1.  Edita `.gitignore` y borra la línea `dist`.
2.  Ejecuta:
    ```bash
    npm run build
    git add dist -f
    git commit -m "chore: add dist folder for deployment"
    git push origin main
    ```
3.  Conecta Hostinger a GitHub.
4.  ¡Listo! Hostinger descargará tu carpeta `dist` lista para usarse.
