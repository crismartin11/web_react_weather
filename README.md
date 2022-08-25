# web_react_weather
Challenge - Weather forecast

Proyecto creado con Vite.
Se utilizó redux-toolkit como alternativa al modo de uso de redux original.
Los reducers y actions quedan definidos dentro de slices.
Se utilizan custom hooks para actualizar el estado de reducers.
Se accede a la api desde los hooks.



Pasos para ejecutar en ambiente local:

    - Descargar dependencias (npm install o yarn install)

    - Cambiar el nombre de .env.template por .env

    - Cambiar la variable de ambiente VITE_API_KEY por una clave propia generada desde www.openweathermap.org.
      Importante: Luego de generar una nueva clave, ésta puede tadar algunas horas en quedar activada y lista para usar.
