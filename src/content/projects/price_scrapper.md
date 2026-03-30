---
title: "Scraping de precios de la construcción"
description: "Pipeline automatizado en Python para monitorear precios históricos y proyecciones en Argentina."
cover: "/covers/Scrapper.png" 
order: 2
---

**TL:DR** Armé un script que rastrea automáticamente los precios online de materiales de construcción todos los días. Sirve para dejar de llamar a los corralones a cada rato, armar estrategias de acopio basadas en volatilidad real y dejar el trabajo repetitivo a las máquinas.

---

Mantener una base de datos actualizada de precios de insumos de la construcción en Argentina (donde tuvimos una inflación promedio del 188% en los últimos 50 años) es un reto que típicamente consiste en pasar 2 o 3 horas todas las semanas hablando con distintos proveedores para ver qué valores modificaron.

Pero con la digitalización de las tiendas online (los corralones ahora tienen e-commerce), el *web scraping* toma muchísima fuerza como herramienta para tener garantizado el último precio del mercado en todo momento, de manera automatizada.

Para los insumos más comunes resulta muy simple no solo encontrar los precios publicados, sino hacerlo en gran cantidad. Eso nos permite sacar una radiografía instantánea de la dispersión de precios que existe para un mismo producto a lo largo de distintos proveedores e identificar dónde están realmente las anomalías.

---

**Estrategias de acopio y volatilidad**

El gran poder de almacenar todo el historial minuto a minuto no es solo saber "cuánto cuesta hoy". Al consolidar los saltos de precios en el tiempo, se vuelve fácil determinar cuáles materiales son más o menos volátiles. 

Esta es la clave de bóveda logística en Argentina: cruzar esa métrica con la obra permite idear estrategias de acopio inteligentes, inyectando capital rápido en los insumos que pican en punta, e iterando las compras de los menos inestables.

---

**Cómo funciona el proceso**

Corro un script desatendido (programado en Python) que recorre una base de datos con distintas webs de distribuidores y tiendas online de materiales de construcción.

El proceso visita los catálogos y, si detecta cualquier variación respecto al precio anterior, lo impacta en una base de datos maestra.
Para que este ecosistema funcione y poder comparar peras con peras, el backend limpia los datos, agrupando los nombres particulares e irregulares que cada corralón le pone a un material bajo un único nombre genérico estandarizado.

---

**Visualización del historial**

Acá abajo podés explorar de forma interactiva una muestra de cómo se van generando los saltos de precio históricos consolidados:

<div class="iframe-container" style="margin-top: 2rem; margin-bottom: 2rem; width: 100%;">
    <iframe id="grafico-dinamico" width="100%" height="1250px" style="border:none; border-radius: 8px; background-color: #f7f9fa; overflow: hidden;" scrolling="no"></iframe>
</div>

<script>
    fetch('https://raw.githubusercontent.com/valentnluc/price_scrapper/main/grafico_precios.html')
        .then(response => response.text())
        .then(html => {
            let modifiedHtml = html.replace('padding: 40px;', 'padding: 10px; box-sizing: border-box;');
            modifiedHtml = modifiedHtml.replace('max-width: 1200px;', 'max-width: 100%;');
            modifiedHtml = modifiedHtml.replace('overflow-x: auto;', 'overflow-x: hidden;');
            
            // Reducir márgenes internos enormes de Vega-Lite que forzaban +1400px de ancho
            modifiedHtml = modifiedHtml.replace(/"labelPadding":\s*300/g, '"labelPadding": 20');
            modifiedHtml = modifiedHtml.replace(/"labelLimit":\s*400/g, '"labelLimit": 250');
            modifiedHtml = modifiedHtml.replace(/"width":\s*600/g, '"width": "container"');
            
            const iframe = document.getElementById('grafico-dinamico');
            if (iframe) iframe.srcdoc = modifiedHtml;
        })
        .catch(err => console.error("Error cargando el gráfico:", err));
</script>

---

**La idea a futuro**

La meta final de esta infraestructura de datos es permitir crear **presupuestos actualizables al instante** para los clientes y obras. En segunda instancia, el volumen de datos permitirá extraer métricas sólidas de volatilidad para terminar haciendo proyecciones de los costos de la construcción, cruzando todo libremente y *linkeándolo* con distintos índices macroeconómicos.

Porque la incertidumbre argentina duele un poco menos cuando se la mide.
