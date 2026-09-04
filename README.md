# Sistema de Reconocimiento por Puntos Vida — Demo

Demo React + JavaScript + CSS, sin backend, APIs ni base de datos.

## Reglas de datos

- Toda la información de trabajadores, áreas y puntos está en `src/data/dashboard-data.json`.
- El TOP 5 anual es un input independiente y NO se calcula a partir de los meses.
- El frontend solo lee/organiza los datos.
- Los filtros funcionan con React state y no recargan la página.

## Ejecutar

```bash
npm install
npm run dev
```

Luego abrir la dirección local mostrada por Vite.

## Imágenes

Solo se prepararon rutas para las imágenes visibles en la referencia:
- `/public/images/branding/logo.png`
- `/public/images/branding/mascot.png`
- `/public/images/podium/trophy.png`

La demo funciona incluso si todavía no colocas esos archivos porque los componentes tienen fallback visual.
