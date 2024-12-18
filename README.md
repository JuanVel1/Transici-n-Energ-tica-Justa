# Proyecto: Transición Energética Justa

## Objetivo

Ofrecer una visión comprensiva y práctica que respalde la transición hacia un futuro energético más sostenible y justo mediante un aplicativo web que exhiba características de usabilidad.

## Descripción del Proyecto

Este proyecto se centra en un amplio conjunto de datos globales sobre energía renovable que cubre el periodo de 1965 a 2022. Los datos incluyen detalles sobre la producción de energía hidroeléctrica, eólica, solar, de biocombustibles y geotérmica en todo el mundo.

Desde la Revolución Industrial, la mayoría de los países han dependido principalmente de los combustibles fósiles para su matriz energética, lo cual ha tenido consecuencias considerables tanto para el clima global como para la salud de los seres humanos. Esta dependencia ha contribuido al incremento de las emisiones de CO2 y la contaminación del aire, subrayando la necesidad urgente de una transición hacia fuentes de energía más limpias y sostenibles. Para reducir las emisiones de CO2 y la contaminación local, es esencial que el mundo se oriente hacia el uso de fuentes de energía de bajo carbono, como las tecnologías nucleares y renovables. En este sentido, la energía renovable será fundamental para la descarbonización de los sistemas energéticos en las próximas décadas.

## Requerimientos

Los requerimientos están clasificados por niveles de dificultad acordes a las competencias adquiridas en el desarrollo temático de cada misión.

### Nivel 1

**Descripción del requerimiento:**

- Crear una página de información sobre una fuente de energía limpia que se encuentre registrada en el conjunto de datos (por ejemplo, energía solar) estilizada con HTML o mediante un framework como Bootstrap o React para hacerla visualmente atractiva y accesible.

### Nivel 2

**Descripción del requerimiento:**

- Se deberá contar con la opción de cargar y visualizar de manera tabular todo el conjunto de datos históricos globales sobre energía renovable que cubre el periodo de 1965 a 2022.
  
  - La página web deberá tener un formulario para la estimación del porcentaje de energía renovable en el consumo eléctrico total de un hogar o comunidad. Para conseguirlo, el usuario únicamente deberá ingresar su consumo eléctrico total (kWh) y el sistema calculará la capacidad instalada de energía renovable sumando las capacidades instaladas de las distintas fuentes renovables (eólica, solar, hidroeléctrica, geotérmica, etc.) contenidas en el conjunto de datos, usar los campos relevantes del conjunto de datos para calcular la proporción de energía renovable en la producción total y, finalmente, calcular el porcentaje de energía renovable en el consumo eléctrico total del usuario.

### Nivel 3

**Descripción del requerimiento:**

- A partir del conjunto de datos se requiere visualizar un dashboard de producción y consumo de energía renovable, que muestre una visión integral de la producción y el consumo de energía renovable en una comunidad o región específica.

#### Componentes del Dashboard

1. **Gráfico de Barras: Producción de Energía Renovable por Fuente**

   - **Descripción:** Muestra la cantidad de energía producida por cada fuente renovable.
   - **Datos:** `wind-generation`, `solar-energy-consumption`, `hydropower-consumption`, `biofuel-production`, `installed-geothermal-capacity`.

2. **Gráfico de Torta: Participación de Energías Renovables**

   - **Descripción:** Muestra el porcentaje de cada tipo de energía renovable en el total del consumo eléctrico.
   - **Datos:** `share-electricity-renewables`, `share-electricity-wind`, `share-electricity-solar`, `share-electricity-hydro`.

3. **Gráfico de Líneas: Tendencia en la Capacidad Instalada**

   - **Descripción:** Muestra la evolución de la capacidad instalada de las diferentes fuentes de energía renovable a lo largo del tiempo.
   - **Datos:** `cumulative-installed-wind-energy-capacity-gigawatts`, `installed-solar-PV-capacity`, `installed-geothermal-capacity`.

4. **Gráfico de Área: Comparación entre Consumo de Energía Renovable y Convencional**

   - **Descripción:** Compara el consumo de energía renovable con el consumo de energía convencional a lo largo del tiempo.
   - **Datos:** `modern-renewable-energy-consumption`, datos de consumo de energía convencional si están disponibles.
