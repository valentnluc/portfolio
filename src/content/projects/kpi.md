---
title: "El único KPI que importa."
description: "Aplicación práctica de POR para control de supply chain."
cover: "/covers/Dashboard-kpi.png"
order: 4
---


## Visión Macro Antes que Micro

Para entender algo indefectiblemente tenemos que arrancar con una visión macro antes de pasar a una visión micro. Con los procesos no es diferente, y uno de los mejores indicadores de la cadena de suministros es el **Perfect Order Rate** (POR).

Este indicador desarrollado en los 90s por la *Association for Supply Chain Management* logra comprimir el funcionamiento general del área en un número que refleja directamente la satisfacción del cliente interno. Pero su verdadero valor está en otra parte: con el POR es muy fácil pasar rápidamente de un nivel macro a uno micro en pocos pasos, permitiendo rastrear el origen de la ineficiencia sin perderse en la maraña de datos.

## Composición del Perfect Order Rate

El POR está compuesto por cuatro variables que capturan los puntos críticos de cualquier orden de compra:

```
POR = (% On-time) × (% Complete) × (% Damage-free) × (% Accurate docs)
```

**Entregas a tiempo:** Órdenes recibidas en la fecha comprometida  
**Entregas completas:** Órdenes sin faltantes  
**Entregas sin daños:** Materiales en condiciones óptimas  
**Documentación correcta:** Facturación y papeles sin errores

Para este caso al trabajar sobre supply chain en el rubro de la construccion donde debemos adherirnos a un presupuesto se incorpora un termino mas % Bajo presupuesto teniendo asi:

```
POR = (% On-time) × (% Complete) × (% Damage-free) × (% Accurate docs) × (% Under budget)
```

### El Efecto Multiplicador

Si cada componente está al 95%:

```
POR = 0.95 × 0.95 × 0.95 × 0.95 × 0.95 = 81.5%
```

Casi 1 de cada 5 órdenes tiene al menos un defecto. Ahí está el desperdicio.

## De lo General a lo Específico en Tres Pasos

La virtud del POR es que permite bajar de nivel de abstracción sin esfuerzo:

**Nivel 1 - Macro:** POR del mes = 87%  
**Nivel 2 - Componentes:** "Entregas completas" está en 92%  
**Nivel 3 - Origen:** 3 proveedores concentran el 70% de las entregas incompletas

En tres pasos pasaste de "algo anda mal" a "el problema está acá". Sin reuniones eternas ni análisis paralizantes.

## Adaptabilidad: Otra Virtud Clave

El indicador es fácilmente modificable para incorporar otras variables que pueden ser importantes para la cadena de suministros particular en la que nos encontramos trabajando.

**Ejemplos:**

- Importaciones: agregar "documentación aduanera completa"
- Just-in-time: cambiar "a tiempo" por "dentro de ventana horaria"
- Industria regulada: incluir "certificaciones vigentes"

La estructura se mantiene, los componentes se adaptan.

## Aplicación LEAN: Medir para Mejorar

El POR encaja naturalmente en una filosofía LEAN porque:

**Hace visible el desperdicio:** Cada orden imperfecta es muda (retrabajo), mura (variabilidad) o muri (urgencias).

**Orienta al cliente interno:** Mide exactamente lo que importa a quien recibe el material.

**Facilita la mejora continua:** Identificas el componente más débil y aplicas PDCA sobre eso específicamente.

No necesitas mejorar todo a la vez. El POR te dice dónde enfocar.

## Dashboard Centrado en POR

Un dashboard efectivo no necesita ser complejo. Necesita mostrar lo importante y permitir profundizar cuando hace falta.

### Vista Principal

```
POR Mensual:  87.3%
Objetivo:     95%
Tendencia:    ↑ (+2.1% vs mes anterior)
```

### Descomposición Inmediata

```
On-time:      95%  ✓
Complete:     92%  ⚠ ← Foco aquí
Damage-free:  98%  ✓
Accurate:     96%  ✓
```

### Drill Down Rápido

```
Top 3 Proveedores con Problemas:
Proveedor A - POR: 78% - 12 órdenes imperfectas
Proveedor B - POR: 81% - 8 órdenes imperfectas  
Proveedor C - POR: 85% - 6 órdenes imperfectas
```

El dashboard no es un adorno. Es una herramienta de trabajo que permite pasar de la detección a la acción en minutos.
## Por Qué Funciona

El POR funciona porque:

1. **Comprime información compleja** en un número accionable
2. **Permite trazabilidad rápida** desde el resultado hasta la causa
3. **Es adaptable** a cualquier realidad operativa
4. **Orienta al valor** que el cliente interno necesita
5. **Facilita la comunicación** con management y proveedores

Un solo indicador que responde: "¿Cómo está funcionando compras?" y "¿Dónde hay que intervenir?"

## Conclusión

El Perfect Order Rate no es solo un KPI más para el tablero. Es el indicador que te permite tener visión macro sin perder la capacidad de bajar a lo micro cuando hace falta.

En compras, como en cualquier proceso, entender el todo antes que las partes es lo que permite tomar decisiones acertadas. El POR te da esa visión general y, al mismo tiempo, te señala exactamente dónde está el problema.
