---
title: "Análisis estocástico inmobiliario"
description: "Evaluación de riesgo usando el Método de Montecarlo."
cover: "/covers/Montecarlo.png"
order: 1
---

**TL:DR** Hice una calculadora que corre x simulaciones de tu proyecto inmobiliario para decirte que hay un 31% de chances de que pierdas plata. El Excel te hubiera dicho que todo estaba bien.

---

Los métodos usualmente usados para estudiar viabilidad de proyectos se apoyan en el viejo y querido Excel. No son malos, pero se quedan un poco cortos y basándonos en métodos estadísticos podemos elevar bastante el nivel del análisis.

El Excel generalmente parte de una hipótesis y te devuelve qué tan bueno o malo va a ser el proyecto, pero no te habla del riesgo subyacente si esa hipótesis cambia. Básicamente te dice "el proyecto vale $X" asumiendo que todo sale exactamente como planeaste. Y todos sabemos que eso no pasa.

---

**¿Cómo funciona Montecarlo?**

La idea es simple: en vez de correr el modelo una sola vez con tus supuestos base, lo corrés cientos de veces variando aleatoriamente los parámetros clave en este caso, precio de venta y costo de construcción dentro de rangos razonables. Cada corrida es un escenario posible. Con 500 escenarios empezás a tener una distribución de resultados en lugar de un número único.

Eso te permite responder preguntas que el Excel estático no puede: ¿cuál es la probabilidad de que el proyecto pierda plata? ¿Cuál es el peor escenario realista? ¿Cuánto capital necesito en el peor caso?

El método lo desarrollaron en el Laboratorio de Los Álamos en los años 40 para simular la difusión de neutrones en materiales de fisión nuclear. Ahora lo podés usar para evaluar si un lote es rentable o no.

![Modelo estocástico vs. determinístico](/images/estocastico_vs_deterministico.png)

---

**Qué calcula**

La implementación permite calcular las variables típicas de un desarrollo inmobiliario:

- **VAN** — cuánto voy a ganar en valor presente
- **TIR** — cuánto rindo invirtiendo en este desarrollo vs otro instrumento de referencia
- **Capital de trabajo** — qué capital necesito para sostener el desarrollo hasta que los flujos por ventas lo soporten
- **Break even** — en qué mes comienzo a ganar dinero

Con un ejemplo concreto: un proyecto de 350m² de superficie, FOT 3.5, precio de venta de USD 1.800/m² y costo de construcción de USD 950/m², el modelo base arroja un VAN de $114K y una TIR del 26%. Suena bien. Pero cuando incorporás la incertidumbre (variación de precios del 15% y de costos del 10%) aparece que hay un 31% de probabilidad de que el proyecto tenga VAN negativo. Eso es lo que el Excel no te dice.

![Distribución de VAN y Riesgo](/images/distribucion_van_riesgo.png)

---

**Evolución del saldo bajo incertidumbre**

Incluso si el proyecto es rentable, es vital entender el balance acumulado en el tiempo. La simulación nos muestra el rango de posibles flujos de caja mes a mes: desde el pozo de inversión máxima (capital de trabajo) hasta la recuperación mediante ventas. Comprender esta dispersión es clave para no quedarse sin liquidez a mitad de obra.

---

**Análisis de sensibilidad**

Estos gráficos muestran qué pasa con el VAN y la TIR cuando variás simultáneamente el precio de venta y el costo de construcción. Cada burbuja es una combinación posible: azul significa rentable, rojo significa pérdida. La línea blanca punteada es la frontera neutral todo lo que queda por encima es déficit, todo lo que queda por debajo es ganancia. Lo útil de esto es que te permite ver de un vistazo qué tan lejos estás de esa frontera y en qué dirección es más frágil el proyecto: si es más sensible a una caída de precios o a un aumento de costos.

![Análisis de sensibilidad](/images/montecarlo-burbujas.png)

---

**Para qué no sirve**

El modelo no reemplaza un estudio de mercado, no predice el futuro y no tiene en cuenta variables macroeconómicas como tipo de cambio o inflación en costos locales. Los rangos de incertidumbre los definís vos, así que si los ponés muy chicos el análisis de riesgo pierde sentido. Es una herramienta para pensar mejor el proyecto, no para que te diga qué hacer.

---

**Cómo se hizo**

El motor de cálculo está hecho en Python y el dashboard se construyó con Streamlit.

<div class="dashboard-btn-container">
    <a href="https://modelo-riesgo-inmobiliario-n3th8r5ppruvgcj8ovtkyu.streamlit.app/" target="_blank" class="dashboard-btn">Probalo acá →</a>
</div>
