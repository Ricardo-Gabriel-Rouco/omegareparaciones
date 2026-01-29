# Tema de Colores Personalizado - Tailwind CSS

## Esquema de Colores

Este tema utiliza una paleta oscuro/neón con verde lima como color principal (`#CBE03F`).

## Colores Disponibles

### Primary (Principal)

- `primary` - `#CBE03F` (verde lima)
- `primary-foreground` - `#000000` (negro)

### Background (Fondo)

- `background` - `#000000` (negro)
- `background-foreground` - `#CBE03F` (verde lima)

### Accent (Énfasis)

- `accent` - `#CBE03F` (verde lima)
- `accent-hover` - `#A8BC35` (verde lima oscuro)
- `accent-muted` - `#2A2A2A` (gris muy oscuro)

### Secondary (Secundario)

- `secondary` - `#1A1A1A` (gris oscuro)
- `secondary-foreground` - `#FFFFFF` (blanco)

### Muted (Apagado)

- `muted` - `#333333` (gris medio oscuro)
- `muted-foreground` - `#CBE03F` (verde lima)

### Highlight (Resaltado)

- `highlight` - `#D4E453` (verde lima brillante)
- `highlight-foreground` - `#000000` (negro)

## Ejemplos de Uso

```html
<!-- Fondo principal -->
<div class="bg-background text-foreground">
  <!-- Tarjeta con primary -->
  <div class="bg-primary text-primary-foreground p-4">Contenido principal</div>

  <!-- Botón con hover -->
  <button class="bg-accent hover:bg-accent-hover text-white">
    Botón interactivo
  </button>

  <!-- Texto secundario -->
  <p class="text-muted-foreground">Texto secundario</p>

  <!-- Resaltado -->
  <span class="bg-highlight text-highlight-foreground">Resaltado</span>
</div>
```

## Características del Tema

- **Modo oscuro**: Fondos negros y grises oscuros
- **Contraste alto**: Textos blancos sobre fondos oscuros
- **Color de acento**: Verde lima (`#CBE03F`) como elemento visual principal
- **Gradientes sutiles**: Variaciones del verde lima para estados interactivos

